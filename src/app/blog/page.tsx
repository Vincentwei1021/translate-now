import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | TranslateNow",
  description: "Tips on translation, language learning, and multilingual communication.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] items-center justify-center px-4 py-16">
        <div className="text-center">
          <div className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">Coming Soon</div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">TranslateNow Blog</h1>
          <p className="mt-3 text-lg text-gray-600">Articles on translation, language tips, and cross-cultural communication. Stay tuned!</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
