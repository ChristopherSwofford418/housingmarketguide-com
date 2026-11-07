import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About the housing market guides on housingmarketguide.com.",
  alternates: { canonical: "https://housingmarketguide.com/about/" },
  openGraph: { url: "https://housingmarketguide.com/about/" },
};

export default function AboutPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 prose-article">
      <h1 className="text-3xl font-bold text-ink">About HousingMarketTracker</h1>
      <p className="mt-6">HousingMarketTracker offers educational guides to understanding housing data and comparing locations. The guides link to public sources so readers can check their definitions and reporting periods.</p>
      <h2>What the site does not do</h2>
      <p>The site does not provide live city prices, personalized property valuations, or predictions of future prices. Broad market data cannot substitute for property-specific information or advice suited to your circumstances.</p>
      <p>Learn more about the <Link href="/methodology/">sources and their limitations</Link>, or visit the <Link href="/contact/">contact page</Link> to report a problem.</p>
    </article>
  );
}
