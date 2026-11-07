import AdSlot from "@/components/AdSlot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Housing Market Downturns: Indicators and Limits",
  description: "Learn how to examine housing price movements without relying on a crash prediction.",
  alternates: { canonical: "https://housingmarketguide.com/learn/when-will-housing-market-crash/" },
  openGraph: { url: "https://housingmarketguide.com/learn/when-will-housing-market-crash/" },
};

export default function ArticlePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 prose-article">
      <h1 className="text-3xl md:text-4xl font-bold text-ink">Housing Market Downturns: Indicators and Limits</h1>
      <p className="mt-4 text-gray-600">No indicator can establish when a downturn will occur or how severe it will be. Earlier forecasts on this page have been removed because their source, date, and assumptions were not documented.</p>
      <AdSlot slot="2233445566" format="horizontal" />
      <h2>Look at price changes over a defined period</h2>
      <p>The <a href="https://www.fhfa.gov/data/hpi">FHFA House Price Index</a> provides historical measures of single-family price changes at several geographic levels. Choose the series and comparison period carefully. National results do not describe every local market, and historical changes do not predict future prices.</p>
      <h2>Understand the measurement</h2>
      <p>The index uses repeat transactions and differs from a median sale price. Coverage and transaction types depend on the index selected. The <a href="https://www.fhfa.gov/faqs/hpi">FHFA&apos;s FAQ</a> explains what its measures include and their limitations; an index is not a valuation of an individual home.</p>
      <h2>Plan for your own circumstances</h2>
      <p>When considering a purchase, compare your available funds and recurring costs under more than one scenario, including the possibility that prices or your circumstances change. A lender&apos;s Loan Estimate can help you understand a proposed mortgage; the <a href="https://www.consumerfinance.gov/owning-a-home/loan-estimate/">CFPB guide</a> explains its payments and closing costs. This guide is educational, not a forecast or individualized financial advice.</p>
      <AdSlot slot="6655443322" format="rectangle" />
    </article>
  );
}
