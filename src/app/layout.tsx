import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/AuthContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { SearchHistoryProvider } from "@/contexts/SearchHistoryContext";
import { BookmarksProvider } from "@/contexts/BookmarksContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import RouterLoader from "@/components/RouterLoader";

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
    default: "Aikita - Direktori AI Tools Indonesia",
    template: "%s | Aikita"
  },
  description: "Platform terlengkap untuk menemukan dan membandingkan AI tools terbaik di Indonesia. Temukan ChatGPT, Midjourney, Claude, dan 100+ tools AI lainnya dengan review dan perbandingan lengkap.",
  keywords: [
    // Primary keywords
    "ai tools indonesia",
    "artificial intelligence indonesia",
    "direktori ai tools",
    "ai tools terbaik",
    "platform ai indonesia",

    // Tool-specific keywords
    "chatgpt indonesia",
    "midjourney indonesia",
    "claude ai indonesia",
    "ai writing tools",
    "ai image generator",
    "ai coding tools",

    // Long-tail keywords
    "cara menggunakan ai tools",
    "perbandingan ai tools",
    "review ai tools indonesia",
    "ai tools gratis terbaik",
    "ai tools untuk bisnis",
    "ai tools untuk content creator",
    "machine learning tools indonesia",

    // Local keywords
    "ai startup indonesia",
    "teknologi ai indonesia",
    "kecerdasan buatan indonesia"
  ],
  authors: [{ name: "Aikita Team" }],
  creator: "Aikita",
  publisher: "Aikita",
  category: "Technology",
  classification: "AI Tools Directory",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL("https://aikita.id"),

  alternates: {
    canonical: "/",
    languages: {
      'id-ID': '/',
      'en-US': '/en'
    }
  },

  openGraph: {
    title: "Aikita - Direktori AI Tools Terlengkap Indonesia",
    description: "Platform terlengkap untuk menemukan dan membandingkan AI tools terbaik. Temukan ChatGPT, Midjourney, Claude, dan 100+ tools AI lainnya.",
    url: "https://aikita.id",
    siteName: "Aikita",
    images: [
      {
        url: "https://aikita.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aikita - Direktori AI Tools Terlengkap Indonesia",
        type: "image/png",
      },
      {
        url: "https://aikita.id/og-square.png",
        width: 400,
        height: 400,
        alt: "Aikita Logo",
        type: "image/png",
      }
    ],
    locale: "id_ID",
    alternateLocale: "en_US",
    type: "website",
    countryName: "Indonesia",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aikita - Direktori AI Tools Indonesia",
    description: "Platform terlengkap untuk menemukan dan membandingkan AI tools terbaik di Indonesia",
    images: ["https://aikita.id/twitter-image.png"],
    creator: "@aikita_id",
    site: "@aikita_id",
  },

  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },

  // Additional SEO tags
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Aikita",
    "application-name": "Aikita",
    "msapplication-TileColor": "#6366f1",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#6366f1",

    // SEO optimization
    "geo.region": "ID",
    "geo.country": "Indonesia",
    "geo.placename": "Indonesia",
    "ICBM": "-6.2088,106.8456", // Jakarta coordinates

    // Social meta
    "fb:app_id": "your-facebook-app-id",
    "article:publisher": "https://facebook.com/aikita.id",

    // Additional OpenGraph
    "og:email": "hello@aikita.id",
    "og:phone_number": "+62-xxx-xxxx-xxxx",
    "og:latitude": "-6.2088",
    "og:longitude": "106.8456",
    "og:street-address": "Indonesia",
    "og:locality": "Jakarta",
    "og:region": "DKI Jakarta",
    "og:postal-code": "10110",
    "og:country-name": "Indonesia",
  }
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

        {/* Google Search Console Verification */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <FavoritesProvider>
              <SearchHistoryProvider>
                <BookmarksProvider>
                  <RouterLoader />
                  {children}
                  <CookieConsent />
                </BookmarksProvider>
              </SearchHistoryProvider>
            </FavoritesProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
