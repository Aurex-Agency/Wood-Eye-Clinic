import type { MetadataRoute } from "next";
import { doctors, services, siteUrl, staff } from "@/lib/site";
import { locations } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/contact", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/about/meet-the-doctors", priority: 0.7 },
    { path: "/about/meet-the-team", priority: 0.6 },
    { path: "/insurance", priority: 0.6 },
    { path: "/locations", priority: 0.8 },
  ];

  const serviceRoutes = services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.8,
  }));

  const locationRoutes = locations.map((l) => ({
    path: `/locations/${l.slug}`,
    priority: 0.8,
  }));

  const teamRoutes = [...doctors, ...staff].map((m) => ({
    path: `/team/${m.slug}`,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...teamRoutes].map(
    ({ path, priority }) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
    })
  );
}
