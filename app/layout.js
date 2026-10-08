import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Next.js Warm-up",
  description: "My first Next.js app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable}
${geistMono.variable}`}>
      <body style={{ padding: 24 }}>
        <nav style={{ display: "flex", gap: 16, marginBottom: 24 }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
