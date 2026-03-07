import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Translator from "@/components/Translator";
import HowTo from "@/components/HowTo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

/* ── FAQ data (shared between component + JSON-LD) ── */
const faqItems = [
  {
    q: "How many languages does this online translator support?",
    a: "TranslateNow supports over 100 languages, including English, Chinese, Spanish, French, German, Japanese, Korean, Portuguese, Russian, Arabic, Hindi, and many more.",
  },
  {
    q: "Is this translation tool free?",
    a: "Yes, completely free with no sign-up or account required. Translate as much text as you like \u2014 no limits, no hidden fees.",
  },
  {
    q: "What is the character limit?",
    a: "You can translate up to 5,000 characters per request. For longer texts, split them into smaller sections.",
  },
  {
    q: "Does it auto-detect the source language?",
    a: "Yes! Select \u0027Auto Detect\u0027 as the source language (it\u0027s the default) and TranslateNow will automatically identify the language of your input text.",
  },
  {
    q: "How accurate are the translations?",
    a: "TranslateNow uses neural machine translation engines, which provide high-quality translations for most language pairs. Results are best for common languages and may vary for less common ones.",
  },
  {
    q: "Can I swap source and target languages?",
    a: "Yes! Click the swap button between the language selectors to quickly reverse the translation direction. This also swaps the text content for easy back-translation.",
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

/* ── JSON-LD: WebApplication ── */
const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "TranslateNow",
  url: "https://translatenow.dev",
  description:
    "Free online translator and translation tool. Translate text between 100+ languages with auto-detection \u2014 no sign-up required.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  browserRequirements: "Requires a modern web browser",
};

/* ── JSON-LD: FAQPage ── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

/* ── JSON-LD: HowTo ── */
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Translate Text Online for Free",
  description:
    "Follow these simple steps to translate text between 100+ languages using TranslateNow \u2014 a free online translation tool.",
  step: [
    {
      "@type": "HowToStep",
      name: "Choose your languages",
      text: "Select the source language (or leave it on Auto Detect) and pick the target language you want to translate into. Use the quick-select buttons or dropdowns for 30+ languages.",
    },
    {
      "@type": "HowToStep",
      name: "Type or paste your text",
      text: "Enter or paste the text you want to translate into the input box (up to 5,000 characters). Translation starts automatically as you type.",
    },
    {
      "@type": "HowToStep",
      name: "Copy your translation",
      text: "The translated text appears instantly in the output panel. Click the Copy button to save it to your clipboard, or use the swap button to reverse the translation direction.",
    },
  ],
  tool: { "@type": "HowToTool", name: "TranslateNow \u2014 Free Online Translator" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Translator />
        <HowTo />

        {/* Features section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Why Use Our Free Translation Tool?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "\uD83C\uDF10",
                  title: "100+ Languages",
                  desc: "Translate between English, Chinese, Spanish, French, German, Japanese, Korean, Arabic, and 90+ more languages \u2014 all in one free online translator.",
                },
                {
                  icon: "\u26A1",
                  title: "Instant Auto-Translate",
                  desc: "Start typing and our translation tool begins working immediately. No need to press a button \u2014 results appear in real time as you type.",
                },
                {
                  icon: "\uD83D\uDD04",
                  title: "One-Click Swap",
                  desc: "Swap source and target languages with one click. The text content swaps too \u2014 perfect for quick back-translations and bilingual editing.",
                },
                {
                  icon: "\uD83D\uDD12",
                  title: "Private & Free",
                  desc: "No sign-up, no data stored, no tracking. Your text is translated in real time and never saved to our servers \u2014 100% private.",
                },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                  <div className="mb-3 text-3xl">{f.icon}</div>
                  <h3 className="mb-2 text-base font-semibold text-gray-900">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ items={faqItems} />

        {/* About — keyword-rich */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              About TranslateNow
            </h2>
            <div className="mt-4 space-y-4 text-gray-600 leading-relaxed text-left sm:text-center">
              <p>
                <strong>TranslateNow</strong> is a <strong>free online translator</strong> powered
                by neural machine translation. Whether you need to translate a quick phrase, a full
                paragraph, or an entire page of content, our{" "}
                <strong>translation tool</strong> handles 100+ languages with auto-detection and
                real-time results.
              </p>
              <p>
                Unlike clunky desktop apps that require downloads and sign-ups, TranslateNow works
                instantly in your browser. Just type or paste your text, pick your target language,
                and get an accurate translation in seconds. Use the one-click swap to reverse
                languages and verify translations both ways.
              </p>
              <p>
                Built for students, travelers, professionals, and anyone who needs fast, reliable
                <strong> multilingual translation</strong>. No accounts, no tracking, no limits
                \u2014 just a clean, fast <strong>online translator</strong> that respects your
                privacy.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}
