import Link from "next/link";

export default function WithdrawnGuide() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 prose-article">
      <h1 className="text-3xl font-bold text-ink">Guide no longer available</h1>
      <p className="mt-6">The previous content at this address was unrelated to this housing market site and has been removed. It should not be used for care or financial planning.</p>
      <p>Explore our <Link href="/learn/">housing market guides</Link> or return to the <Link href="/">home page</Link>.</p>
    </article>
  );
}
