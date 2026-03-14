import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | TranslateNow",
  description: "Guides on AI translation, multilingual communication, and best practices for translating business documents online.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "ai-translation-2026",
    title: "How AI Translation Has Changed in 2026: What's Actually Different",
    excerpt: "A practical look at where AI translation quality has genuinely improved, where limitations remain, and how to use AI translators effectively for different content types.",
    date: "2026-03-10",
  },
  {
    slug: "translate-business-documents",
    title: "Best Practices for Translating Business Documents Online",
    excerpt: "When is AI translation sufficient for business use, and when is human review essential? A practical framework for emails, contracts, and marketing content.",
    date: "2026-03-08",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h1>
          <p className="mt-2 text-gray-600">Guides on AI translation, language tools, and multilingual communication.</p>
          <div className="mt-10 space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <time className="text-xs font-medium text-gray-400">{post.date}</time>
                <h2 className="mt-2 text-xl font-bold text-gray-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-amber-600">{post.title}</Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-semibold text-amber-600 hover:text-amber-700">Read more →</Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
