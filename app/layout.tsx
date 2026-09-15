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
  title: "Ahmed Al Nahal — Urban Planning Portfolio",
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
  icons: {
    icon: "/images/personal_image.jpeg",
    shortcut: "/images/personal_image.jpeg",
    apple: "/images/personal_image.jpeg",
  },
  openGraph: {
    title: "Ahmed Al Nahal — Urban Planning Portfolio",
    description:
      "Urban Planning student specializing in Environmental Planning, GIS, and Urban Design at Cairo University.",
    type: "website",
    images: ["/images/personal_image.jpeg"],
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
