import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology & Sources",
  description: "Sources and limitations for the housing research guides.",
  alternates: { canonical: "https://housingmarketguide.com/methodology/" },
  openGraph: { url: "https://housingmarketguide.com/methodology/" },
};

export default function MethodologyPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 prose-article">
      <h1 className="text-3xl font-bold text-ink">Methodology &amp; Sources</h1>
      <p className="mt-6">The housing guides explain how to locate and interpret public information. The former city selector was removed because its figures lacked a documented source and reporting period. This site does not currently calculate city market ratings or publish a live city dataset.</p>
      <h2>Federal Housing Finance Agency</h2>
      <p>The <a href="https://www.fhfa.gov/data/hpi">FHFA House Price Index</a> measures changes in single-family prices using repeat transactions. Different index series cover different transactions and areas. Consult the <a href="https://www.fhfa.gov/faqs/hpi">FHFA methodology and coverage explanations</a> before comparing series. An index is not a median sale price or individual home valuation.</p>
      <h2>U.S. Census Bureau</h2>
      <p><a href="https://www.census.gov/quickfacts/">QuickFacts</a> provides housing and income estimates for states, counties, and many cities. Read the estimate years and source notes. Survey estimates have sampling error; median owner-occupied home value is not a median sale price.</p>
      <h2>Consumer Financial Protection Bureau</h2>
      <p>The <a href="https://www.consumerfinance.gov/owning-a-home/loan-estimate/">Loan Estimate explainer</a> describes the costs and terms on a lender&apos;s estimate. Actual loan terms and ownership costs depend on the property and borrower.</p>
      <h2>Comparing sources</h2>
      <p>Check each dataset&apos;s reporting period, geography, property coverage, definition, and revisions. Sources are not necessarily directly comparable. External pages may update independently; this site does not assert a data-refresh schedule.</p>
    </article>
  );
}
