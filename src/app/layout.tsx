import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/ScrollUp";
import ScrollAnimations from "@/components/ScrollAnimations";

const bodyFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raylight - Responsive Lamp Website",
  description: "Unique lighting products for your home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <Navbar />
          <div className="page-content">
            <main className="main">{children}</main>
          </div>
          <Footer />
          <ScrollUp />
          <ScrollAnimations />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
