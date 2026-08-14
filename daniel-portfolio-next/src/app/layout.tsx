import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Siro | Software Developer",
  description: "Daniel Siro's scroll-driven developer portfolio built with a strict Swiss typographic grid.",
  openGraph: {
    title: "Daniel Siro | Software Developer",
    description: "Daniel Siro's scroll-driven developer portfolio built with a strict Swiss typographic grid.",
    url: "https://danielsiro.com",
    siteName: "Daniel Siro Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Siro | Software Developer",
    description: "Daniel Siro's scroll-driven developer portfolio built with a strict Swiss typographic grid.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center w-full">
        <Providers>
          <div className="w-full max-w-[720px] px-6 sm:px-8 md:px-12 flex flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
