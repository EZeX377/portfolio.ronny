import { siteUrl } from "@/lib/site";

export default function sitemap() {
  // Detailed case studies will be added when they replace the modal overviews.
  return [{ url: siteUrl, changeFrequency: "monthly", priority: 1 }];
}
