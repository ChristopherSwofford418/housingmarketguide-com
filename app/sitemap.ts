import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://housingmarketguide.com/", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: "https://housingmarketguide.com/calculator/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "https://housingmarketguide.com/learn/housing-market-trends-2025/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://housingmarketguide.com/learn/best-cities-to-buy-a-home/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://housingmarketguide.com/learn/when-will-housing-market-crash/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://housingmarketguide.com/about/", lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 },
  ];
}
