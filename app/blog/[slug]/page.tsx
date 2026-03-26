import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getBlogPostBySlug } from "@/lib/blog/wp";
import styles from "../blog.module.css";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return { title: "Blog post" };
  return { title: `${post.title} | All Things Assistant LLC` };
}

function formatDate(dateISO: string) {
  const d = new Date(dateISO);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="page">
      <SiteHeader />

      <section className={styles.paper} aria-label={`Blog post: ${post.title}`}>
        <div className={styles.topNav}>
          <Link href="/blog">
            <b>Home</b>
          </Link>{" "}
          &emsp; <span aria-hidden="true">·</span> &emsp; <b>news</b>
        </div>

        <div className={styles.heading}>
          <div className={styles.titleRow}>
            <div className={styles.siteTitle}>Akilah Notes</div>
            <div className={styles.dateBlock}>
              Edition
              <br />
              {formatDate(post.dateISO)}
            </div>
          </div>
        </div>

        <div className={styles.subhead}>
          <b>{post.author}</b> &emsp;·&emsp; {formatDate(post.dateISO)} &emsp;·&emsp; {post.readTimeMinutes} min
          read
        </div>

        <Image
          src={post.heroImageUrl}
          alt={post.title}
          width={1400}
          height={800}
          className={styles.postImage}
          style={{ height: "14rem" }}
        />

        <h1 className={styles.postTitle} style={{ fontSize: "2rem", marginTop: "1rem" }}>
          {post.title}
        </h1>

        <div className={styles.detailsBody} style={{ marginTop: "0.75rem" }}>
          <p>{post.excerpt}</p>
          {post.body.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        <div className={styles.callout} style={{ marginBottom: "0" }}>
          <div className={styles.calloutTitle}>Want support for follow‑through?</div>
          <div style={{ fontSize: "0.95rem", lineHeight: 1.75 }}>
            Book a discovery call and we&apos;ll map your next best steps. If you&apos;re hiring, consider sharing a
            one‑page overview in your inquiry.
          </div>
          <div style={{ marginTop: "0.75rem", fontWeight: 700 }}>
            <Link href="/#booking">Book a Discovery Call →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

