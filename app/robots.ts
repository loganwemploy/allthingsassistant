import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/mint", "/why-akilah"],
      },
    ],
    sitemap: "https://allthingsassistantllc.com/sitemap.xml",
  };
}
