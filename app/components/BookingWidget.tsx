"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CALENDLY_URL =
  "https://calendly.com/allthingsassistantllc/new-meeting?back=1";

export function BookingWidget() {
  const [ready, setReady] = useState(false);

  const mq = typeof window !== "undefined" ? window.matchMedia("(max-width: 40rem)") : null;
  const [height, setHeight] = useState(mq?.matches ? 500 : 700);

  useEffect(() => {
    const mmq = window.matchMedia("(max-width: 40rem)");
    const handler = (e: MediaQueryListEvent) => setHeight(e.matches ? 500 : 700);
    mmq.addEventListener("change", handler);
    return () => mmq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="calendlyShell">
      {!ready && (
        <div
          style={{
            height,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--base-1)",
            borderRadius: "0.75rem",
            color: "var(--muted)",
            fontSize: "0.875rem",
            letterSpacing: "0.06em",
          }}
        >
          Loading calendar…
        </div>
      )}
      <div
        className="calendly-inline-widget"
        data-url={CALENDLY_URL}
        style={{
          minWidth: 280,
          height,
          borderRadius: "0.75rem",
          display: ready ? undefined : "none",
        }}
      />
      <div className="calendlyFooter">
        <span className="calendlyFooterText">
          No account needed · 15 minute call
        </span>
        <a
          className="calendlyFooterLink"
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in new tab →
        </a>
      </div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setReady(true)}
      />
    </div>
  );
}
