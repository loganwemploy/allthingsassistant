import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page" style={{ display: "grid", placeItems: "center", minHeight: "100dvh", padding: "2rem", textAlign: "center" }}>
      <div>
        <p className="eyebrow">404</p>
        <h1 className="heroTitle" style={{ margin: "0.5rem 0 0.75rem" }}>
          Page not found
        </h1>
        <p className="muted" style={{ maxWidth: "24rem", margin: "0 auto 1.5rem" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn btnPrimary">
          Back to home
        </Link>
      </div>
    </main>
  );
}
