"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How many languages does TranslateNow support?",
    a: "TranslateNow supports over 100 languages, including English, Chinese, Spanish, French, German, Japanese, Korean, Portuguese, Russian, Arabic, Hindi, and many more.",
  },
  {
    q: "Is TranslateNow free?",
    a: "Yes, completely free with no sign-up or account required. Translate as much text as you like.",
  },
  {
    q: "What is the character limit?",
    a: "You can translate up to 5,000 characters per request. For longer texts, split them into smaller sections.",
  },
  {
    q: "Does it auto-detect the source language?",
    a: "Yes! Select 'Auto Detect' as the source language (it's the default) and TranslateNow will automatically identify the language of your input text.",
  },
  {
    q: "How accurate are the translations?",
    a: "TranslateNow uses Google Translate's neural machine translation engine, which provides high-quality translations for most language pairs. Results are best for common languages and may vary for less common ones.",
  },
  {
    q: "Can I swap source and target languages?",
    a: "Yes! Click the swap button (↔) between the language selectors to quickly reverse the translation direction. This also swaps the text content for easy back-translation.",
  },
  {
    q: "Is my text stored or tracked?",
    a: "No. Text is sent to our translation API for real-time processing and is not stored, logged, or shared. Your translations are completely private.",
  },
  {
    q: "Does it support translating documents or files?",
    a: "Currently TranslateNow supports text input only. For document translation, copy the text from your document and paste it into the translator. File upload support is planned for a future update.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-gray-200 bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium text-gray-900 sm:text-base">{faq.q}</span>
                <svg className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="border-t border-gray-100 px-5 pb-4 pt-3">
                  <p className="text-sm leading-relaxed text-gray-600">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
