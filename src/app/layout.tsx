import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { env } from "process";

export const metadata: Metadata = {
  title: "DayliGames | jogos para voce",
  description:
    "Site para voce amante de jogos, o melhor e mais completo catalogo",
  keywords: ["jogo", "site", "lançamentos"],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
