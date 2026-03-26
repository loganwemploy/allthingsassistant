import Image from "next/image";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import styles from "./blog.module.css";
import { getBlogPosts } from "@/lib/blog/wp";

export const metadata = {
  title: "Blog | Akilah Adams MBA | All Things Assistant LLC",
};

function formatDate(dateISO: string) {
  const d = new Date(dateISO);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return (
    <main className="page">
      <SiteHeader />

      <section className={styles.paper} aria-label="Blog posts">
        <div className={styles.topNav}>
          <b>Home</b> &emsp; <b>news</b> &emsp; <b>about us</b>
        </div>

        <div className={styles.heading}>
          <div className={styles.titleRow}>
            <div className={styles.siteTitle}>Akilah Notes</div>
            <div className={styles.dateBlock}>
              Edition {String(Math.max(1, posts.length))}
              <br />
              {posts[0] ? formatDate(posts[0].dateISO) : "—"}
            </div>
          </div>
        </div>

        <div className={styles.subhead}>
          Short, practical notes for high performers: clarity, follow‑through, and executive-level calm.
        </div>

        {posts.map((p) => (
          <article key={p.slug} className={styles.post}>
            <Image
              src={p.heroImageUrl}
              alt={p.title}
              width={900}
              height={520}
              className={styles.postImage}
            />

            <div className={styles.postMeta}>
              <b>{p.author}</b> &emsp; · &emsp; {formatDate(p.dateISO)} &emsp; · &emsp; {p.readTimeMinutes} min read
            </div>

            <h2 className={styles.postTitle}>{p.title}</h2>

            <details>
              <summary className={styles.detailsSummary}>Read more/less</summary>
              <div className={styles.detailsBody}>
                <p>{p.excerpt}</p>
                {p.body.slice(0, 2).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </details>
          </article>
        ))}

        <div className={styles.callout} aria-label="Hiring callout">
          <div className={styles.calloutTitle}>We&apos;re hiring!</div>
          <div style={{ fontSize: "0.95rem", lineHeight: 1.75 }}>
            If you&apos;re obsessed with follow‑through and discretion, we&apos;d love to meet you. Share your
            work style and availability.
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

