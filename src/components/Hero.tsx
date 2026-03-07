export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-50/30 px-4 pb-10 pt-20 text-center sm:px-6 sm:pb-16 sm:pt-28">
      <div className="pointer-events-none absolute left-[10%] top-20 text-4xl opacity-20 animate-float">🌍</div>
      <div className="pointer-events-none absolute right-[15%] top-32 text-3xl opacity-15 animate-float" style={{animationDelay:'1s'}}>💬</div>
      <div className="pointer-events-none absolute left-[70%] top-16 text-2xl opacity-10 animate-float" style={{animationDelay:'2s'}}>🔤</div>
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
          <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
          Free &middot; 100+ Languages &middot; Auto-Detect
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          Translate{" "}
          <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Anything</span>{" "}
          Instantly
        </h1>
        <p className="mt-6 text-lg text-gray-600 sm:text-xl leading-relaxed">
          Translate text between 100+ languages with auto-detection. Glossary support to preserve key terms. Fast, free, private.
        </p>
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5"><span className="text-amber-500">✓</span> Auto-Detect</span>
          <span className="flex items-center gap-1.5"><span className="text-amber-500">✓</span> 100+ Languages</span>
          <span className="flex items-center gap-1.5"><span className="text-amber-500">✓</span> Glossary</span>
        </div>
      </div>
    </section>
  );
}
