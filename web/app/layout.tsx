import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import TopNav from "./components/TopNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hiran | Web Developer",
  description: "Hiran - Full-stack Web Developer and Game Developer Portfolio showcasing projects and skills.",
  openGraph: {
    title: "Hiran | Developer Portfolio",
    description: "Full-stack Web Developer and Game Developer Portfolio showcasing projects and skills.",
    url: "https://hiran-portfolio.vercel.app", 
    siteName: "Hiran Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiran | Developer Portfolio",
    description: "Full-stack Web Developer and Game Developer Portfolio showcasing projects and skills.",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TopNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
