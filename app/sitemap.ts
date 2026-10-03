import type { MetadataRoute } from "next";

const BASE = "https://saigonseniorcare.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/home-care`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/senior-living-homes`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/resources`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/contact`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/services`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/privacy`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${BASE}/terms`, changeFrequency: "yearly", priority: 0.1 },
  ];
}
