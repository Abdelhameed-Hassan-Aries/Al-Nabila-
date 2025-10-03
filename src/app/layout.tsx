import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cairo, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alresalah Group",
  description:
    "Crafting tomorrow's skyline with visionary developments across Egypt.",
  icons: {
    icon: "/alresalah_group_logo_preview.png",
    apple: "/alresalah_group_logo_preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${cairo.variable} antialiased app-shell`}
      >
        {children}
      </body>
    </html>
  );
}
