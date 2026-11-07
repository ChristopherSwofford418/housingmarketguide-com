import AdSlot from "@/components/AdSlot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Housing Markets",
  description: "A practical guide to comparing local housing markets using public data.",
  alternates: { canonical: "https://housingmarketguide.com/calculator/" },
  openGraph: { url: "https://housingmarketguide.com/calculator/" },
};

export default function CalculatorPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 prose-article">
      <h1 className="text-3xl font-bold text-ink mb-2">Compare Housing Markets</h1>
      <p className="text-gray-600">The former city selector has been removed because its figures did not have a documented source or reporting period. This page does not supply live prices or calculate a market rating.</p>
      <AdSlot slot="1122334455" format="horizontal" />
      <h2>1. Choose comparable areas</h2>
      <p>Write down the cities or metropolitan areas you want to compare. Keep the geography and time period consistent: a city boundary is not the same as a metropolitan area, and data may not be available for every place.</p>
      <h2>2. Check price trends and housing context</h2>
      <p>Use the <a href="https://www.fhfa.gov/data/hpi">Federal Housing Finance Agency House Price Index</a> to investigate changes in single-family home prices. The index is not a median sale price and does not value an individual property. Consult the source for the index type, geography, and reporting period.</p>
      <p>The <a href="https://www.census.gov/quickfacts/">Census Bureau&apos;s QuickFacts</a> provides housing and income estimates for states, counties, and many cities. Its median owner-occupied home value is not the same as the median price of homes recently sold. Check the estimate years and the source&apos;s notes on sampling and comparisons.</p>
      <h2>3. Consider your own costs</h2>
      <p>Look beyond purchase price to taxes, insurance, maintenance, utilities, and any association fees. For a mortgage, compare lender-provided estimates using the <a href="https://www.consumerfinance.gov/owning-a-home/loan-estimate/">Consumer Financial Protection Bureau&apos;s Loan Estimate guide</a>. Figures for a broad area cannot tell you what a particular property will cost.</p>
      <AdSlot slot="5544332211" format="rectangle" />
    </article>
  );
}
