import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://housingmarketguide.com"),
  title: {
    default: "HousingMarketTracker — City-by-City Housing Market Data",
    template: "%s · HousingMarketTracker",
  },
  description: "Free housing market data tracker. Compare home prices, inventory, and market trends across 200+ US cities. Updated monthly with the latest real estate data.",
  applicationName: "HousingMarketTracker",
  openGraph: {
    type: "website",
    siteName: "HousingMarketTracker",
    title: "HousingMarketTracker — City-by-City Housing Market Data",
    description: "Free housing market data tracker. Compare home prices, inventory, and market trends across 200+ US cities. Updated monthly with the latest real estate data.",
    url: "https://housingmarketguide.com",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://housingmarketguide.com" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_ADS_ENABLED === "true" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9889586007871680"
            crossOrigin="anonymous"
            suppressHydrationWarning
          />
        )}
      </head>
      <body className="min-h-screen bg-white text-ink antialiased">
        <header className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-serif text-xl font-bold tracking-tight">
              HousingMarketTracker
            </Link>
            <nav className="hidden md:flex gap-6 text-sm">
              <Link href="/calculator" className="hover:text-accent">Market Tracker</Link>
              <Link href="/learn/housing-market-trends-2025" className="hover:text-accent">2025 Trends</Link>
              <Link href="/about" className="hover:text-accent">About</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-line mt-20 py-10 bg-soft">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8 text-sm text-gray-700">
            <div>
              <div className="font-serif text-lg font-bold text-ink mb-2">HousingMarketTracker</div>
              <p>Free housing market data tracker. Compare home prices, inventory, and market trends across 200+ US cities. Updated month...</p>
            </div>
            <div>
              <div className="font-semibold text-ink mb-2">Guides</div>
              <ul className="space-y-1">
                <li><Link href="/learn/housing-market-trends-2025/" className="hover:text-accent">Housing Market Trends 2025</Link></li>
                <li><Link href="/learn/best-cities-to-buy-a-home/" className="hover:text-accent">Best Cities to Buy a Home</Link></li>
                <li><Link href="/learn/when-will-housing-market-crash/" className="hover:text-accent">Will the Housing Market Crash?</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-ink mb-2">Site</div>
              <ul className="space-y-1">
                <li><Link href="/about" className="hover:text-accent">About</Link></li>
                <li><Link href="/privacy" className="hover:text-accent">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-accent">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-4 mt-8 text-xs text-gray-500">
            © {new Date().getFullYear()} HousingMarketTracker. Educational content only. Not financial or legal advice.
          </div>
        </footer>
      </body>
    </html>
  );
}
