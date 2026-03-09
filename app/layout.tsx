import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Inner Alignment Experience — Clarity, Confidence & Influence",
  description:
    "When clarity within grows, influence naturally follows. A transformational leadership experience for elite professional women aged 27-45.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
