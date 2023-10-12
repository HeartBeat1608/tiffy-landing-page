import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Tiffy | Best tiffins in your area",
  description: "Find the best tiffins and homemade meals in your area.",
  twitter: {
    images: ["/assets/logo.png"],
    card: "summary_large_image",
    title: "Tiffy | Best tiffins in your area",
    description: "Find the best tiffins and homemade meals in your area.",
  },
  openGraph: {
    images: ["/assets/logo.png"],
    title: "Tiffy | Best tiffins in your area",
    description: "Find the best tiffins and homemade meals in your area.",
    url: "https://tiffy.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11366018773"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());

            gtag("config", "AW-11366018773");
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
