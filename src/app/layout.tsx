import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Tools Hub - Discover the Best AI Tools for 2024",
    template: "%s | AI Tools Hub"
  },
  description: "Discover, compare, and review the best AI tools of 2024. From ChatGPT to Midjourney, find the perfect AI solution for coding, writing, image generation, and more. Curated by experts.",
  keywords: [
    "AI tools",
    "artificial intelligence",
    "ChatGPT",
    "Midjourney",
    "AI writing",
    "AI coding",
    "AI image generation",
    "machine learning tools",
    "AI comparison",
    "best AI tools 2024"
  ],
  authors: [{ name: "AI Tools Hub Team" }],
  creator: "AI Tools Hub",
  publisher: "AI Tools Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ai-tools-hub.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Tools Hub - Discover the Best AI Tools for 2024",
    description: "Discover, compare, and review the best AI tools of 2024. From ChatGPT to Midjourney, find the perfect AI solution for your needs.",
    url: "https://ai-tools-hub.com",
    siteName: "AI Tools Hub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Tools Hub - Best AI Tools Directory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Hub - Discover the Best AI Tools for 2024",
    description: "Discover, compare, and review the best AI tools of 2024. From ChatGPT to Midjourney, find the perfect AI solution for your needs.",
    images: ["/twitter-image.png"],
    creator: "@ai_tools_hub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
