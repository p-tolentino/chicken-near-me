import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chicken Near Me",
  description:
    "No bones, all flavor - A brand new boneless chicken shop opened at Filinvest, Alabang, Muntinlupa City and soon coming Near You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[url(/streets.jpg)] bg-cover bg-no-repeat bg-center" />
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm backdrop-opacity-75" />
        </div>
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        {children}
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}
