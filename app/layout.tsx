import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yousef Fahem Al-Hayafi — Full-Stack Engineer & Web Architect",
  description:
    "Portfolio of Yousef Fahem Al-Hayafi — Full-Stack Software Engineer specializing in Next.js, FastAPI, PostgreSQL, and GSAP animations. Building next-generation digital ecosystems.",
  keywords: ["Full-Stack Developer", "Next.js", "FastAPI", "PostgreSQL", "Web Architect"],
  authors: [{ name: "Yousef Fahem Al-Hayafi" }],
  openGraph: {
    title: "Yousef Fahem Al-Hayafi — Full-Stack Engineer",
    description: "Architecting next-gen digital ecosystems with Next.js, FastAPI & PostgreSQL.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#0b0813]`}>
        {children}
      </body>
    </html>
  );
}
