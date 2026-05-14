import type { Metadata } from "next";
import { Amiri, Lora, Open_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "All Things Assistant | Administrative Support",
  description:
    "All Things Assistant provides senior administrative support to help busy leaders reclaim time, stay organized, and execute consistently.",
  keywords: [
    "Administrative Professional",
    "Executive Administrative Support",
    "Administrative Support Services",
    "Virtual Administrative Support",
    "Inbox and calendar support",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
      </head>
      <body className={`${lora.variable} ${openSans.variable} ${amiri.variable}`}>
        <div className="pageWrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
