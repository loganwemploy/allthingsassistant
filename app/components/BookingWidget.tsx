"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CALENDLY_URL =
  "https://calendly.com/allthingsassistantllc/new-meeting?back=1";

export function BookingWidget() {
  const [ready, setReady] = useState(false);
  const [height, setHeight] = useState(700);

  useEffect(() => {
    const mmq = window.matchMedia("(max-width: 40rem)");
    setHeight(mmq.matches ? 500 : 700);
    const handler = (e: MediaQueryListEvent) => setHeight(e.matches ? 500 : 700);
    mmq.addEventListener("change", handler);
    return () => mmq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="calendlyShell" style={{ position: "relative" }}>
      {!ready && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--base-1)",
            borderRadius: "0.75rem",
            color: "var(--muted)",
            fontSize: "0.875rem",
            letterSpacing: "0.06em",
            zIndex: 1,
          }}
        >
          Loading calendar…
        </div>
      )}
      <div
        className="calendly-inline-widget"
        data-url={CALENDLY_URL}
        style={{ minWidth: 280, height, borderRadius: "0.75rem" }}
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
