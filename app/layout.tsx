import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Nav from "@/components/nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Alnahal — Urban Planning Portfolio",
  description:
    "Urban and Regional Planning student at Cairo University, specializing in Environmental Planning, GIS & Spatial Analysis, and Urban Design. Ranked 1st in class.",
  keywords: [
    "urban planning",
    "environmental planning",
    "GIS",
    "spatial analysis",
    "Cairo University",
    "portfolio",
  ],
  authors: [{ name: "Ahmed Moustafa Hussein Ahmed" }],
  openGraph: {
    title: "Ahmed Alnahal — Urban Planning Portfolio",
    description:
      "Urban Planning student specializing in Environmental Planning, GIS, and Urban Design at Cairo University.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
