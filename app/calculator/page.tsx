import AdSlot from "@/components/AdSlot";
import Calculator from "./Calculator";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Housing Market Comparison Tool",
  description: "Compare housing market conditions across US cities — free tool from HousingMarketTracker.",
};
export default function CalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-2">Housing Market Comparison Tool</h1>
      <p className="text-gray-600 mb-8">Compare housing market conditions across US cities.</p>
      <AdSlot slot="1122334455" format="horizontal" />
      <Calculator />
      <AdSlot slot="5544332211" format="rectangle" />
    </div>
  );
}
