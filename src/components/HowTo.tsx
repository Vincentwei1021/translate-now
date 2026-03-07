export default function HowTo() {
  const steps = [
    {
      num: "1",
      title: "Choose Your Languages",
      desc: "Select the source language or leave it on Auto Detect. Pick the target language from 100+ options using quick-select buttons or the full dropdown.",
    },
    {
      num: "2",
      title: "Type or Paste Text",
      desc: "Enter or paste the text you want to translate (up to 5,000 characters). Our online translator begins translating automatically as you type.",
    },
    {
      num: "3",
      title: "Copy Your Translation",
      desc: "The translated text appears instantly. Click Copy to save it, or hit the swap button to reverse languages and verify the translation both ways.",
    },
  ];

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight text-gray-900">
          How to Translate Text Online — Free &amp; Instant
        </h2>
        <p className="mb-10 text-center text-gray-500">
          Use our free translation tool in three simple steps.
        </p>
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-lg font-bold text-amber-700">
                {s.num}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
