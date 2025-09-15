import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { fontVazirmatn, site } from "@/core/config";

export const metadata: Metadata = {
  generator: "Next.js",
  manifest: "/manifest.json",
  authors: [{ name: site.name.en, url: site.socials.instagram }],
  robots: {
    index: false,
    follow: false,
  },
  creator: site.name.en,
  icons: { icon: "/logo/logo-128.png", apple: "/logo/logo-128.png" },
  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#006fee",
    "msapplication-tap-highlight": "no",
    "theme-color": "#1b1b1f",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "black" },
    { media: "(prefers-color-scheme: light)", color: "white" },
  ],
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="fa"
      dir="rtl"
      className="light"
      style={{ colorScheme: "light" }}
    >
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-vazirmatn antialiased",
          fontVazirmatn.className
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
