import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://housingmarketguide.com";
  const paths = [
    "/", "/calculator/", "/learn/", "/learn/housing-market-trends-2025/",
    "/learn/best-cities-to-buy-a-home/", "/learn/when-will-housing-market-crash/",
    "/about/", "/contact/", "/methodology/", "/privacy/", "/terms/", "/disclaimer/",
  ];
  return paths.map((path) => ({ url: `${baseUrl}${path}` }));
}
