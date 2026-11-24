import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "GEOMINX INDIA — Mining & Civil Engineering Consultancy and Training",
    template: "%s | GEOMINX INDIA",
  },
  description:
    "GEOMINX INDIA is a Jabalpur-based engineering consultancy and technical training organization advancing practical knowledge, capability and industry-ready skills in mining and civil engineering.",
  keywords: [
    "GEOMINX INDIA",
    "mining consultancy",
    "mining engineering training",
    "drone survey",
    "geospatial solutions",
    "mine planning",
    "AutoCAD Surpac Datamine Deswik training",
    "civil engineering consultancy",
    "GET induction program",
    "Jabalpur",
    "Madhya Pradesh",
  ],
  authors: [{ name: "GEOMINX INDIA" }],
  openGraph: {
    title:
      "GEOMINX INDIA — Engineering Knowledge. Digital Innovation. Professional Excellence.",
    description:
      "Mining consultancy, drone survey and geospatial solutions, computer-aided mine planning, corporate training and civil engineering consultancy.",
    type: "website",
    locale: "en_IN",
    siteName: "GEOMINX INDIA",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEOMINX INDIA",
    description:
      "Engineering consultancy, technical training and digital engineering solutions for mining and civil engineering.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-900">
        {children}
      </body>
    </html>
  );
}
