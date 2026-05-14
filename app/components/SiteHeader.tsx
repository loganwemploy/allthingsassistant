"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const LOGO_URL = "/logo.png";

const NAV: { label: string; href: string }[] = [
  { label: "Home", href: "/#hero" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
  { label: "About Me", href: "/about-me" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const closeMenu = useCallback(() => {
    setLeaving(true);
    setTimeout(() => {
      setOpen(false);
      setLeaving(false);
    }, 280);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open || leaving) return;
    const panel = menuRef.current;
    if (!panel) return;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    panel.addEventListener("keydown", trap);
    return () => panel.removeEventListener("keydown", trap);
  }, [open, leaving]);

  useEffect(() => {
    if (!open && !leaving) {
      triggerRef.current?.focus();
    }
  }, [open, leaving]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string): boolean => {
    if (href === "/#hero") return pathname === "/";
    return pathname === href;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = Math.abs(touchStartY.current - e.changedTouches[0].clientY);
    if (dx > 80 && dy < 60) {
      closeMenu();
    }
  };

  const handleToggle = () => {
    if (open) {
      closeMenu();
    } else {
      setOpen(true);
    }
  };

  return (
    <header className={`headerShell ${scrolled ? "headerScrolled" : ""}`}>
      <div className="container header">
        <Link href="/" className="brand" onClick={() => closeMenu()}>
          <Image
            src={LOGO_URL}
            alt="All Things Assistant logo"
            width={44}
            height={44}
            className="brandLogo"
            priority
          />
          <div className="brandText">
            <div className="brandTagline">Reclaim Your Time</div>
          </div>
        </Link>

        <nav className="navDesktop" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              className={`navLink ${isActive(item.href) ? "navLinkActive" : ""}`}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link className="btn btnPrimary navCta" href="/#booking">
            Book a Discovery Call
          </Link>
        </nav>

        <div className="headerActions">

          <button
            ref={triggerRef}
            className="menuBtn"
            type="button"
            aria-label={open && !leaving ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open || leaving}
            aria-controls="mobileMenuPanel"
            onClick={handleToggle}
          >
            <span className="menuBtnBars" aria-hidden="true" />
          </button>
        </div>
      </div>

          {(open || leaving) && (
            <div
              className={`mobileMenuBackdrop ${leaving ? "mobileMenuBackdropLeave" : ""}`}
              onClick={closeMenu}
              aria-hidden="true"
            />
          )}

          {(open || leaving) && (
          <div
            ref={menuRef}
            id="mobileMenuPanel"
            className={`mobileMenu ${leaving ? "mobileMenuLeave" : ""}`}
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="mobileMenuInner">
            <div className="mobileMenuTop">
              <Link href="/" className="mobileMenuBrand" onClick={closeMenu}>
                <Image
                  src={LOGO_URL}
                  alt="All Things Assistant logo"
                  width={32}
                  height={32}
                  className="mobileMenuLogo"
                />
              </Link>
              <button className="menuCloseBtn" type="button" onClick={closeMenu} aria-label="Close navigation">
                <span className="menuCloseIcon" aria-hidden="true" />
              </button>
            </div>

            <nav className="mobileMenuLinks" aria-label="Mobile navigation">
              {NAV.map((item, i) => (
                <Link
                  key={item.href}
                  className={`mobileLink ${isActive(item.href) ? "mobileLinkActive" : ""}`}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  style={{ "--link-delay": leaving ? `${(NAV.length - 1 - i) * 0.04}s` : `${i * 0.06}s` } as React.CSSProperties}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mobileMenuCta">
              <Link
                className="btn btnPrimary btnFull"
                href="/#booking"
                onClick={closeMenu}
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
