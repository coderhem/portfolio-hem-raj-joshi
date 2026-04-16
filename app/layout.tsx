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
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${fontLead.variable} ${fontBase.variable} ${fontRowdies.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
