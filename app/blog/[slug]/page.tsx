import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getBlogPostBySlug } from "@/lib/blog/wp";
import { mockPosts } from "@/lib/blog/mockPosts";
import detailStyles from "../BlogPostDetail.module.css";

type BlogSlugParams = { slug: string };

const AKILAH_PORTRAIT =
  "https://dl4.pushbulletusercontent2.com/d0WgxSJ9mXgjr7l62jruYsBA76YsaQtf/image.png";

async function resolveSlugParams(params: BlogSlugParams | Promise<BlogSlugParams>) {
  const resolved = await Promise.resolve(params);
  const raw = resolved.slug ?? "";
  try {
    return decodeURIComponent(raw).trim();
  } catch {
    return raw.trim();
  }
}

export async function generateStaticParams() {
  return mockPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: BlogSlugParams | Promise<BlogSlugParams> }) {
  const slug = await resolveSlugParams(params);
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Blog post" };
  return { title: `${post.title} | All Things Assistant LLC` };
}

function splitAuthorName(author: string): { first: string; last: string; suffix?: string } {
  const [main, rest] = author.split(",").map((s) => s.trim());
  const suffix = rest || undefined;
  const parts = (main || author).split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { first: "Akilah", last: "Adams", suffix: "MBA" };
  if (parts.length === 1) return { first: parts[0], last: "", suffix };
  return { first: parts[0], last: parts.slice(1).join(" "), suffix };
}

function formatPermaDate(dateISO: string) {
  const d = new Date(dateISO);
  return d.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function postDisplayNumber(slug: string) {
  const idx = mockPosts.findIndex((p) => p.slug === slug);
  if (idx >= 0) return 5001 + idx;
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h + slug.charCodeAt(i) * (i + 1)) % 900;
  return 5000 + h;
}

export default async function BlogPostPage({ params }: { params: BlogSlugParams | Promise<BlogSlugParams> }) {
  const slug = await resolveSlugParams(params);
  if (!slug) notFound();

  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const { first, last, suffix } = splitAuthorName(post.author);
  const permNo = postDisplayNumber(post.slug);
  const permaLabel = formatPermaDate(post.dateISO);

  return (
    <main className="page">
      <SiteHeader />

      <div className={detailStyles.detailOutline}>
        <div className={detailStyles.frame}>
          <nav className={detailStyles.frameNav} aria-label="Blog">
            <Link href="/">
              <b>Home</b>
            </Link>
            {" "}
            &emsp;·&emsp;{" "}
            <Link href="/blog">
              <b>Akilah&apos;s Blog</b>
            </Link>
            {" "}
            &emsp;·&emsp;{" "}
            <Link href="/blog">
              <b>All posts</b>
            </Link>
          </nav>

          <h1 className={detailStyles.frameTitle}>{post.title}</h1>

          <div className={detailStyles.wrapPost}>
            <aside className={detailStyles.postProfile} aria-label="Author">
              <div className={detailStyles.profileName}>
                <span className={detailStyles.firstName}>{first}</span>
                <span className={detailStyles.lastName}>{last || "Adams"}</span>
                {suffix ? <span className={detailStyles.credentials}>{suffix}</span> : null}

                <div className={detailStyles.perma}>
                  <Link href={`/blog/${post.slug}`}>
                    <b>{permNo}</b> {permaLabel}
                  </Link>
                </div>

                <div className={detailStyles.ledger}>
                  <Link href="/blog">Back</Link>
                  <Link href="/#booking">Book a call</Link>
                  <Link href="/cv">CV</Link>
                </div>
              </div>

              <div className={detailStyles.profileAvatar}>
                <div className={detailStyles.avatar}>
                  <Image
                    src={AKILAH_PORTRAIT}
                    alt="Akilah Adams, MBA — All Things Assistant LLC"
                    width={250}
                    height={450}
                    className={detailStyles.avatarImg}
                    priority
                  />
                </div>
              </div>
            </aside>

            <article className={detailStyles.postContent}>
              <p>{post.excerpt}</p>
              {post.body.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </article>
          </div>

          <div className={detailStyles.frameFooter}>
            <strong>All Things Assistant LLC</strong> — Executive support for high-profile leaders. Ready to reclaim
            clarity?{" "}
            <Link href="/#booking">Book a Discovery Call</Link> or{" "}
            <Link href="/blog">return to the blog index</Link>.
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
