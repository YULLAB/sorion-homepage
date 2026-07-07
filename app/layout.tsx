import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SORI:ON | ESE 기반 분석 앱 플랫폼",
  description:
    "SORI:ON은 율랩의 ESE 기반 분석 앱들이 모이는 소리 분석 플랫폼입니다.",
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
