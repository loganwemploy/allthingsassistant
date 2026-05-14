import Link from "next/link";
import type { ReactNode } from "react";

export function CTAButton({
  children,
  className,
  href = "https://calendly.com/allthingsassistantllc/new-meeting?back=1&month=2026-05",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <Link
      className={`btn btnPrimary ${className ?? ""}`}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
