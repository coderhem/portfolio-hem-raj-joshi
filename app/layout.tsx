import type { Metadata } from "next";
import Script from "next/script";
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
  title: "Hem Raj Joshi || Full Stack Developer",
  description: "Full Stack Developer from Nepal with 2 years of experience in React and Next.js, specializing in building modern, responsive web applications while actively expanding backend development expertise.",
  keywords: ["Hem Raj Joshi Portfolio", "Hem Raj | Full Stack Developer", "Hemu", "Hem Raj", "Hem Raj Portfolio", "Joshi Hem Raj", "Full Stack Developer", "Frontend Developer", "Developer Hem", "MERN Stack Developer", "Java Developer"],
  verification: {
    google: "abcgoogle-site-verification=zKpUmIyf8AwboGgZdsvmA8oHHKEWTjS5D0oiFaJG8_I123xyz",
  },
  authors: [{ name: "Hem Raj Joshi" }],
  metadataBase: new URL("https://joshihemraj.com.np/"),
  openGraph: {
    title: "Hem Raj Joshi | Portfolio",
    description: "Full Stack Developer from Nepal skilled in React, Next.js, and Java.",
    siteName: "Portfolio | Hem Raj Joshi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 360,
        alt: "Hem Raj Joshi Logo"
      }
    ],
  }
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${fontLead.variable} ${fontBase.variable} ${fontRowdies.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SFXQQGYXYC"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SFXQQGYXYC');
          `}
      </Script>
    </html>
  );
}
