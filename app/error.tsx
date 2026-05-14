"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="page" style={{ display: "grid", placeItems: "center", minHeight: "100dvh", padding: "2rem", textAlign: "center" }}>
      <div>
        <p className="eyebrow">Something went wrong</p>
        <h1 className="heroTitle" style={{ margin: "0.5rem 0 0.75rem" }}>
          An unexpected error occurred
        </h1>
        <p className="muted" style={{ maxWidth: "24rem", margin: "0 auto 1.5rem" }}>
          {error.message || "Please try again or return to the homepage."}
        </p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={reset} className="btn btnPrimary">
            Try again
          </button>
          <Link href="/" className="btn">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
