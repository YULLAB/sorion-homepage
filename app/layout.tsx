import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sori-on.com"),
  title: "SORI:ON | ESE 기반 표현 AI 분석 앱 플랫폼",
  description: "보컬, 국악, 기타 등 다양한 AI 분석 코칭 앱을 한곳에서 만나보세요.",
  alternates: {
    canonical: "https://www.sori-on.com",
  },
  openGraph: {
    title: "SORI:ON | ESE 기반 표현 AI 분석 앱 플랫폼",
    description:
      "보컬, 국악, 기타 등 다양한 AI 분석 코칭 앱을 한곳에서 만나보세요.",
    url: "https://www.sori-on.com",
    siteName: "SORI:ON",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/sorion-og.png",
        width: 10668,
        height: 6000,
        alt: "SORI:ON by YULLAB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SORI:ON | ESE 기반 표현 AI 분석 앱 플랫폼",
    description:
      "보컬, 국악, 기타 등 다양한 AI 분석 코칭 앱을 한곳에서 만나보세요.",
    images: ["/sorion-og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
