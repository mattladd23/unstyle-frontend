import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const unstyleTextFont = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unstyle - Your CSS Initial Value Lookup",
  description: "Rapidly find CSS initial values with Unstyle's search through more than 400 properties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${unstyleTextFont.className} bg-gray-50 dark:bg-gray-950 antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
