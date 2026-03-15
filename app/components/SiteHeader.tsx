"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CTAButton } from "./CTAButton";

const LOGO_URL =
  "https://dl4.pushbulletusercontent2.com/VvtaaGDjfFBqb7ipDCcwVJWEaT4bskRJ/image.png";

type NavItem = { label: string; href: string };

export function SiteHeader() {
  const nav = useMemo<NavItem[]>(
    () => [
      { label: "Home", href: "#hero" },
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "How It Works", href: "#how" },
      { label: "Contact", href: "#contact" },
    ],
    [],
  );

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header className="headerShell">
      <div className="container header">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image
            src={LOGO_URL}
            alt="All Things Assistant LLC logo"
            width={44}
            height={44}
            className="brandLogo"
            priority
          />
          <div className="brandText">
            <div className="brandName">All Things Assistant LLC</div>
            <div className="brandTagline">FREEING YOUR TIME, GROWING YOUR BUSINESS</div>
          </div>
        </Link>

        <nav className="navDesktop" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} className="navLink" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="headerActions">
          <CTAButton className="hideSm">Book a Discovery Call</CTAButton>

          <button
            className="menuBtn"
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobileMenuPanel"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menuBtnBars" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobileMenuPanel"
          className="mobileMenu"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
        >
          <div className="container mobileMenuInner">
            <div className="mobileMenuTop">
              <div className="eyebrow">Navigate</div>
              <button className="btn" type="button" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>

            <nav className="mobileMenuLinks" aria-label="Mobile navigation">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  className="mobileLink"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mobileMenuCta">
              <CTAButton className="btnFull">Book a Discovery Call</CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
