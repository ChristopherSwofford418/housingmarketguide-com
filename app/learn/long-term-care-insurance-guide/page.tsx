import type { Metadata } from "next";
import WithdrawnGuide from "@/components/WithdrawnGuide";

export const metadata: Metadata = {
  title: "Guide no longer available",
  description: "This unrelated guide is no longer available on the housing market site.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <WithdrawnGuide />;
}
