import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const unstyleTextFont = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unstyle - CSS Initial Value Lookup",
  description: "Unstyle your CSS properties with Unstyle's search through more than 400 values.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${unstyleTextFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
