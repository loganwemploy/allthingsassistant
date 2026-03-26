import { getMockPostBySlug, mockPosts, type BlogPost } from "./mockPosts";

async function tryFetchWPPosts(): Promise<BlogPost[]> {
  const baseUrl = process.env.NEXT_PUBLIC_WP_BASE_URL;
  if (!baseUrl) return mockPosts;

  // Expected WordPress REST API shape (example):
  // { slug, title: { rendered }, date, excerpt: { rendered }, yoast_head_json?.twitter_image, content?.rendered, author?.name }
  // You can replace this mapping once your WP endpoints are finalized.
  const url = `${baseUrl.replace(/\/$/, "")}/wp-json/wp/v2/posts?per_page=6&_embed`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`WP fetch failed: ${res.status}`);
  const json: any[] = await res.json();

  // Fallback to mock shape if WP returns an unexpected structure.
  if (!Array.isArray(json)) return mockPosts;

  return json.map((p) => {
    const slug: string = String(p.slug ?? "");
    const title: string = p.title?.rendered ? String(p.title.rendered).replace(/<[^>]+>/g, "") : "Untitled";
    const excerpt: string = p.excerpt?.rendered
      ? String(p.excerpt.rendered).replace(/<[^>]+>/g, "")
      : "—";
    const dateISO: string = p.date ? String(p.date) : "2026-01-01";
    const heroImageUrl: string =
      p?.yoast_head_json?.og_image?.[0]?.url ||
      p?.featured_media?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      mockPosts[0].heroImageUrl;

    return {
      slug,
      title,
      author: p?.yoast_head_json?.author_name || "Akilah Adams, MBA",
      dateISO,
      readTimeMinutes: 5,
      heroImageUrl,
      excerpt,
      body: [excerpt],
    } satisfies BlogPost;
  });
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    return await tryFetchWPPosts();
  } catch {
    return mockPosts;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const baseUrl = process.env.NEXT_PUBLIC_WP_BASE_URL;
  if (!baseUrl) return getMockPostBySlug(slug);

  const url = `${baseUrl.replace(/\/$/, "")}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return getMockPostBySlug(slug);
    const json: any[] = await res.json();
    if (!Array.isArray(json) || !json[0]) return getMockPostBySlug(slug);
    // Minimal mapping; expand once you confirm the WP fields.
    const p = json[0];
    return {
      slug: String(p.slug ?? slug),
      title: p.title?.rendered
        ? String(p.title.rendered).replace(/<[^>]+>/g, "")
        : "Untitled",
      author: p?.yoast_head_json?.author_name || "Akilah Adams, MBA",
      dateISO: p.date ? String(p.date) : "2026-01-01",
      readTimeMinutes: 5,
      heroImageUrl:
        p?.yoast_head_json?.og_image?.[0]?.url ||
        mockPosts[0].heroImageUrl,
      excerpt: p.excerpt?.rendered
        ? String(p.excerpt.rendered).replace(/<[^>]+>/g, "")
        : "—",
      body: [
        p.content?.rendered
          ? String(p.content.rendered).replace(/<[^>]+>/g, "")
          : "—",
      ],
    };
  } catch {
    return getMockPostBySlug(slug);
  }
}

