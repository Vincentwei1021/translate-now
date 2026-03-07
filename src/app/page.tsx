import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Translator from "@/components/Translator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Translator />
        <FAQ />
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">About TranslateNow</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              TranslateNow is a free online text translator powered by neural machine translation.
              Translate between 100+ languages with auto-detection, swap languages in one click, and
              copy results instantly. No sign-up, no tracking, no limits.
            </p>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "TranslateNow",
            url: "https://translatenow.dev",
            description: "Free online text translator. Translate between 100+ languages with auto-detection — no sign-up required.",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            browserRequirements: "Requires a modern web browser",
          }),
        }}
      />
    </>
  );
}
