import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Edwin Winarto — Full Stack Developer",
  description:
    "Full Stack Developer specializing in modern, scalable web applications, APIs, dashboards, payment integrations, and business websites.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "Web Developer",
  ],
  authors: [{ name: "Edwin Winarto" }],
  creator: "Edwin Winarto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Edwin Winarto — Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern, scalable web applications.",
    siteName: "Edwin Winarto Portfolio",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Your Name — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern, scalable web applications.",
    images: ["/assets/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
