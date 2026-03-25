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
  title: "All Things Assistant LLC | Virtual Assistant Services",
  description:
    "All Things Assistant LLC provides executive administrative and virtual assistant support to help busy professionals reclaim time, stay organized, and grow their business.",
  keywords: [
    "Virtual Assistant Services",
    "Executive Administrative Support",
    "Executive Assistant Services",
    "Administrative Support Services",
    "Virtual Executive Assistant",
    "Outsource Administrative Tasks",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri&family=Open+Sans:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${lora.variable} ${openSans.variable} ${amiri.variable}`}>
        {children}
      </body>
    </html>
  );
}
