import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Margin from "@/components/Margin";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "인터벌 트레이닝 타이머 | Mengineer",
  description:
    "개발자가 직접 운동하며 만든 다양한 운동 프로그램을 세팅하기에 적합한 인터벌 트레이닝 타이머입니다. 요일별 또는 운동시간별 트레이닝 프로그램을 저장해 놓고, 불러와서 실행하기만 하면 됩니다.",
  keywords: ["인터벌 트레이닝", "인터벌 트레이닝 타이머", "타바타 운동 타이머"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className}`}>
        <Header />
        <Margin className="h-8 lg:h-20" />
        {children}
      </body>
    </html>
  );
}
