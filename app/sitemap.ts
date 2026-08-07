import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { getAnnouncements } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  // Static site routes
  const staticRoutes = [
    "",
    "/hakkimizda",
    "/duyurular",
    "/etkinlikler",
    "/basvuru-ve-iletisim",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic announcement detail pages
  try {
    const announcements = await getAnnouncements();
    const dynamicRoutes = announcements.map((announcement) => ({
      url: `${baseUrl}/duyurular/${announcement.slug}`,
      lastModified: new Date(announcement.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
    
    return [...staticRoutes, ...dynamicRoutes];
  } catch (error) {
    console.error("Error generating dynamic sitemap routes:", error);
    return staticRoutes;
  }
}
