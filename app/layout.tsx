import type { Metadata } from "next";
import { Berkshire_Swash, Lato, Rowdies } from "next/font/google";
import "./globals.css";

const fontLead = Berkshire_Swash({
  variable: "--font-berkshire-swash",
  subsets: ["latin"],
  weight: "400",
});

const fontRowdies = Rowdies({
  variable: "--font-rowdies",
  subsets: ["latin"],
  weight: "400",
});

const fontBase = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hem Raj Joshi | Frontend Developer Nepal",
  description: "Frontend Developer with 2+ years experience in React, Next.js from Nepal",
  keywords: ["Hem Raj Joshi Portfolio", "Hem Raj | Full Stack Developer", "Hemu", "Hem Raj", "Hem Raj Portfolio", "Joshi Hem Raj", "Full Stack Developer", "Frontend Developer", "Developer Hem", "MERN Stack Developer", "Java Developer"],
  verification: {
    google: "abcgoogle-site-verification=zKpUmIyf8AwboGgZdsvmA8oHHKEWTjS5D0oiFaJG8_I123xyz",
  },
  authors: [{ name: "Hem Raj Joshi" }]
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${fontLead.variable} ${fontBase.variable} ${fontRowdies.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
