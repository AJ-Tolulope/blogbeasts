// "use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./index.css";
import { ReduxProvider } from "./redux/provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blog Beasts",
  description: "For bloggers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} app `}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
