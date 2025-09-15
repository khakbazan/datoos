import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Vazirmatn,
} from "next/font/google";

import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontVazirmatn = Vazirmatn({
  subsets: ["latin"],
  variable: "--font-vazirmatn",
});

export const fontIranYekanXPro = localFont({
  variable: "--font-iranyekanxpro",
  src: [
    {
      path: "../../public/fonts/iran-yekan-x-pro/IRANYekanXFaNum-ExtraBlack.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan-x-pro/IRANYekanXFaNum-Black.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan-x-pro/IRANYekanXFaNum-ExtraBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan-x-pro/IRANYekanXFaNum-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan-x-pro/IRANYekanXFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan-x-pro/IRANYekanXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan-x-pro/IRANYekanXFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
});

export const fontIranYekanWeb = localFont({
  variable: "--font-iranyekanweb",
  src: [
    {
      path: "../../public/fonts/iran-yekan/WebFonts/iranyekanwebextrablackfanum.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/WebFonts/iranyekanwebblackfanum.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/WebFonts/iranyekanwebextraboldfanum.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/WebFonts/iranyekanwebboldfanum.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/WebFonts/iranyekanwebmediumfanum.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/WebFonts/iranyekanwebregularfanum.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/WebFonts/iranyekanweblightfanum.woff",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
});

export const fontIranYekanMobile = localFont({
  variable: "--font-iranyekanmobile",
  src: [
    {
      path: "../../public/fonts/iran-yekan/MobileFonts/IRANYekanMobileExtraBlack.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/MobileFonts/IRANYekanMobileBlack.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/MobileFonts/IRANYekanMobileExtraBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/MobileFonts/IRANYekanMobileBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/MobileFonts/IRANYekanMobileMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/MobileFonts/IRANYekanMobileRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/MobileFonts/IRANYekanMobileLight.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
});

export const fontIranSansXPro = localFont({
  variable: "--font-iransansxpro",
  src: [
    {
      path: "../../public/fonts/iran-sans-x-pro/IRANSansXFaNum-ExtraBlack.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-sans-x-pro/IRANSansXFaNum-Black.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-sans-x-pro/IRANSansXFaNum-ExtraBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-sans-x-pro/IRANSansXFaNum-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-sans-x-pro/IRANSansXFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-sans-x-pro/IRANSansXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-sans-x-pro/IRANSansXFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-sans-x-pro/IRANSansXFaNum-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-sans-x-pro/IRANSansXFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  display: "swap",
});
