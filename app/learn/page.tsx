import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides & Resources",
  description: "Guides to housing trends, comparing cities, and market risk.",
  alternates: { canonical: "https://housingmarketguide.com/learn/" },
  openGraph: { url: "https://housingmarketguide.com/learn/" },
};

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-8">Guides &amp; Resources</h1>
      <div className="grid gap-6">
        <Link href="/learn/housing-market-trends-2025/" className="block rounded-xl border border-line p-6 hover:border-accent"><h2 className="text-xl font-bold text-ink">Researching Housing Trends</h2><p className="mt-1 text-gray-600">Find and interpret historical housing data.</p></Link>
        <Link href="/learn/best-cities-to-buy-a-home/" className="block rounded-xl border border-line p-6 hover:border-accent"><h2 className="text-xl font-bold text-ink">How to Compare Cities</h2><p className="mt-1 text-gray-600">Weigh housing costs and local conditions.</p></Link>
        <Link href="/learn/when-will-housing-market-crash/" className="block rounded-xl border border-line p-6 hover:border-accent"><h2 className="text-xl font-bold text-ink">Housing Market Downturns</h2><p className="mt-1 text-gray-600">Understand indicators and the limits of prediction.</p></Link>
      </div>
    </div>
  );
}
