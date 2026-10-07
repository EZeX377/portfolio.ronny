import { siteUrl } from "@/lib/site";

export default function sitemap() {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/projects/nesfic-2026/case_study`, changeFrequency: "monthly", priority: .8 },
  ];
}
