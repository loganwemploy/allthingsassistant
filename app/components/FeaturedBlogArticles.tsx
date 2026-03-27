import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/blog/wp";
import type { BlogPost } from "@/lib/blog/mockPosts";
import styles from "./FeaturedBlogArticles.module.css";

async function getFeatured(): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.slice(0, 3);
}

export async function FeaturedBlogArticles() {
  const posts = await getFeatured();

  return (
    <section className={styles.section} aria-label="Featured blog articles">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className="eyebrow">Featured blog</div>
          <h2 className={styles.title}>
            <span className="pinline">
              <span>Akilah&apos;s Blog</span>
            </span>
          </h2>
        </div>

        <div className={styles.grid}>
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.cardLink}>
              <article className={styles.card} aria-label={`Read article: ${p.title}`}>
                <div className={styles.imgWrap} aria-hidden="true">
                  <Image
                    src={p.heroImageUrl}
                    alt={p.title}
                    fill
                    sizes="(max-width: 60rem) 100vw, 33vw"
                    className={styles.img}
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.meta}>
                    <span>{p.author}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={p.dateISO}>
                      {new Date(p.dateISO).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </time>
                  </div>
                  <h3 className={styles.postTitle}>{p.title}</h3>
                  <p className={styles.excerpt}>{p.excerpt}</p>
                  <div className={styles.readMore}>Read more →</div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

