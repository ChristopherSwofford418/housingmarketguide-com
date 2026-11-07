import AdSlot from "@/components/AdSlot";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://housingmarketguide.com/" },
  openGraph: { url: "https://housingmarketguide.com/" },
};

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-soft to-white py-20 border-b border-line">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">Understand Housing Markets</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Learn how to compare places, read housing indicators, and find data from public sources. This site does not provide live city prices or forecasts.
          </p>
          <Link href="/calculator/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:opacity-90 transition-opacity">
            Start comparing markets →
          </Link>
        </div>
      </section>
      <AdSlot slot="1234567890" format="horizontal" className="mt-8" />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-ink mb-8">Guides &amp; Data</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/learn/housing-market-trends-2025/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors">
            <h3 className="text-lg font-bold text-ink">Researching Housing Trends</h3>
            <p className="mt-2 text-sm text-gray-600">How to find and interpret historical price, housing, and borrowing data.</p>
          </Link>
          <Link href="/learn/best-cities-to-buy-a-home/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors">
            <h3 className="text-lg font-bold text-ink">How to Compare Cities</h3>
            <p className="mt-2 text-sm text-gray-600">A practical framework for weighing housing costs and local conditions.</p>
          </Link>
          <Link href="/learn/when-will-housing-market-crash/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors">
            <h3 className="text-lg font-bold text-ink">Understanding Market Risk</h3>
            <p className="mt-2 text-sm text-gray-600">Indicators to investigate and the limits of predicting a downturn.</p>
          </Link>
        </div>
      </section>
      <AdSlot slot="0987654321" format="rectangle" />

      <section className="max-w-4xl mx-auto px-4 py-12 border-t border-gray-200 prose-article">
        <h2>Use the right comparison</h2>
        <p>A city and its surrounding metropolitan area are different geographies. Check the area, reporting period, type of housing, and definition before comparing numbers. A price index measures change; it is not a listing price or an appraisal of a particular home.</p>
        <p>For an overview of the sources and their limits, see our <Link href="/methodology/">methodology and sources</Link>. Housing decisions also depend on your budget and individual circumstances.</p>
      </section>
    </div>
  );
}
