"use client";

import { useState, useCallback, useEffect, useRef } from "react";

const LANGUAGES = [
  { code: "auto", label: "Auto Detect" },
  { code: "en", label: "English" },
  { code: "zh", label: "Chinese" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "ja", label: "Japanese" },
  { code: "ko", label: "Korean" },
  { code: "pt", label: "Portuguese" },
  { code: "ru", label: "Russian" },
  { code: "ar", label: "Arabic" },
  { code: "hi", label: "Hindi" },
  { code: "it", label: "Italian" },
  { code: "nl", label: "Dutch" },
  { code: "pl", label: "Polish" },
  { code: "tr", label: "Turkish" },
  { code: "vi", label: "Vietnamese" },
  { code: "th", label: "Thai" },
  { code: "id", label: "Indonesian" },
  { code: "uk", label: "Ukrainian" },
  { code: "sv", label: "Swedish" },
  { code: "cs", label: "Czech" },
  { code: "da", label: "Danish" },
  { code: "fi", label: "Finnish" },
  { code: "el", label: "Greek" },
  { code: "he", label: "Hebrew" },
  { code: "hu", label: "Hungarian" },
  { code: "no", label: "Norwegian" },
  { code: "ro", label: "Romanian" },
  { code: "sk", label: "Slovak" },
  { code: "bg", label: "Bulgarian" },
];

const TARGET_LANGUAGES = LANGUAGES.filter((l) => l.code !== "auto");

const QUICK_SOURCE = ["auto", "en", "zh", "es", "fr", "de", "ja", "ko", "pt", "ru", "ar"];
const QUICK_TARGET = ["en", "zh", "es", "fr", "de", "ja", "ko", "pt", "ru", "ar"];

export default function Translator() {
  const [text, setText] = useState("");
  const [source, setSource] = useState("auto");
  const [target, setTarget] = useState("zh");
  const [translation, setTranslation] = useState("");
  const [detectedLang, setDetectedLang] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const translate = useCallback(async () => {
    const trimmed = text.trim();
    if (!trimmed) {
      setTranslation("");
      setDetectedLang("");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: trimmed, source, target }),
      });
      const data = await res.json();
      if (data.success) {
        setTranslation(data.data.translation);
        if (data.data.detectedLanguage?.code) {
          const lang = LANGUAGES.find((l) => l.code === data.data.detectedLanguage.code);
          setDetectedLang(lang ? lang.label : data.data.detectedLanguage.code);
        }
      } else {
        setError(data.error || "Translation failed");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [text, source, target]);

  // Auto-translate with debounce
  useEffect(() => {
    if (!text.trim()) {
      setTranslation("");
      setDetectedLang("");
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(translate, 600);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [translate]);

  const swapLanguages = () => {
    if (source === "auto") return;
    const newSource = target;
    const newTarget = source;
    setSource(newSource);
    setTarget(newTarget);
    setText(translation);
    setTranslation(text);
  };

  const copyTranslation = () => {
    navigator.clipboard.writeText(translation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="translator" className="px-4 py-12 sm:px-6 sm:py-16">
      <h2 className="sr-only">Online Translation Tool</h2>
      <div className="mx-auto max-w-5xl">
        {/* Language selectors + swap */}
        <div className="mb-4 flex items-center gap-2">
          {/* Source lang */}
          <div className="flex-1">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {QUICK_SOURCE.map((code) => {
                const lang = LANGUAGES.find((l) => l.code === code);
                return (
                  <button
                    key={code}
                    onClick={() => setSource(code)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${source === code ? "bg-amber-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                  >
                    {lang?.label || code}
                  </button>
                );
              })}
            </div>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            >
              {LANGUAGES.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>
          </div>

          {/* Swap button */}
          <button
            onClick={swapLanguages}
            disabled={source === "auto"}
            className="mt-6 rounded-full border border-gray-300 p-2 text-gray-500 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30"
            title="Swap languages"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </button>

          {/* Target lang */}
          <div className="flex-1">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {QUICK_TARGET.map((code) => {
                const lang = TARGET_LANGUAGES.find((l) => l.code === code);
                return (
                  <button
                    key={code}
                    onClick={() => setTarget(code)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${target === code ? "bg-amber-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                  >
                    {lang?.label || code}
                  </button>
                );
              })}
            </div>
            <select
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            >
              {TARGET_LANGUAGES.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>
          </div>
        </div>

        {/* Text areas */}
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Input */}
          <div className="relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 5000))}
              placeholder="Type or paste text to translate…"
              rows={8}
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            />
            <div className="absolute bottom-3 right-3 flex items-center gap-2 text-xs text-gray-400">
              {source === "auto" && detectedLang && (
                <span className="rounded bg-amber-100 px-1.5 py-0.5 text-amber-700">Detected: {detectedLang}</span>
              )}
              <span>{text.length}/5000</span>
            </div>
          </div>

          {/* Output */}
          <div className="relative">
            <div className="min-h-[208px] w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
              {loading ? (
                <div className="flex h-full items-center justify-center py-12">
                  <svg className="h-6 w-6 animate-spin text-amber-500" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                </div>
              ) : error ? (
                <p className="text-sm text-red-500">{error}</p>
              ) : translation ? (
                <p className="whitespace-pre-wrap text-gray-800 leading-relaxed">{translation}</p>
              ) : (
                <p className="text-gray-400">Translation will appear here…</p>
              )}
            </div>
            {translation && (
              <div className="absolute bottom-3 right-3">
                <button
                  onClick={copyTranslation}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                >
                  {copied ? (
                    <><svg className="h-3.5 w-3.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Copied!</>
                  ) : (
                    <><svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg> Copy</>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
