import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Guides & Resources",
  description: "Free guides and resources from HousingMarketTracker.",
};
export default function LearnPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-8">Guides & Resources</h1>
      <div className="grid gap-6">
                <Link href="/learn/housing-market-trends-2025/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group"><h2 className="text-xl font-bold text-ink group-hover:text-accent">Housing Market Trends 2025: What the Data Says</h2><p className="mt-1 text-gray-600">A data-driven look at US housing market trends in 2025, including home prices, inventory levels, and affordability by city.</p></Link>
        <Link href="/learn/best-cities-to-buy-a-home/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group"><h2 className="text-xl font-bold text-ink group-hover:text-accent">Best Cities to Buy a Home in 2025</h2><p className="mt-1 text-gray-600">Data-driven ranking of the best US cities to buy a home in 2025, based on affordability, job growth, and housing market conditions.</p></Link>
        <Link href="/learn/when-will-housing-market-crash/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group"><h2 className="text-xl font-bold text-ink group-hover:text-accent">Will the Housing Market Crash in 2025–2026?</h2><p className="mt-1 text-gray-600">An honest data analysis of whether a US housing market crash is likely in 2025 or 2026, examining the key indicators economists watch.</p></Link>
      </div>
    </div>
  );
}
