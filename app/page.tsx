import Link from "next/link";
import AdSlot from "@/components/AdSlot";
export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-soft to-white py-20 border-b border-line">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">
            City-by-City Housing Market Data
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Free housing market data tracker. Compare home prices, inventory, and market trends across 200+ US cities. Updated monthly with the latest real estate data.
          </p>
          <Link href="/calculator" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:opacity-90 transition-opacity">
            Housing Market Comparison Tool →
          </Link>
        </div>
      </section>

      <AdSlot slot="1234567890" format="horizontal" className="mt-8" />

      {/* Articles */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-ink mb-8">Guides & Data</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/learn/housing-market-trends-2025/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Market Data</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">Housing Market Trends 2025: What the Data Says</h3>
            <p className="mt-1 text-sm text-gray-600">A data-driven look at US housing market trends in 2025, including home prices, inventory levels, and affordability by city.</p>
          </a>
          <a href="/learn/best-cities-to-buy-a-home/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">City Rankings</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">Best Cities to Buy a Home in 2025</h3>
            <p className="mt-1 text-sm text-gray-600">Data-driven ranking of the best US cities to buy a home in 2025, based on affordability, job growth, and housing market conditions.</p>
          </a>
          <a href="/learn/when-will-housing-market-crash/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Market Analysis</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">Will the Housing Market Crash in 2025–2026?</h3>
            <p className="mt-1 text-sm text-gray-600">An honest data analysis of whether a US housing market crash is likely in 2025 or 2026, examining the key indicators economists watch.</p>
          </a>
        </div>
      </section>

      <AdSlot slot="0987654321" format="rectangle" />
    </div>
  );
}
