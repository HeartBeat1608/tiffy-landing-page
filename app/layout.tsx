import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Tiffy | Best tiffins in your area",
  description: "Find the best tiffins and homemade meals in your area.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
