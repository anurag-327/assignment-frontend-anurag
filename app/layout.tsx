import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assignment-Anurag",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-gray-100`}>{children}</body>
    </html>
  );
}

// weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
