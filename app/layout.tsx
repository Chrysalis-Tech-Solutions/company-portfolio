import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chrysalis Tech",
  description: "Transforming Vision into Future-Ready Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${inter.variable} antialiased font-body bg-carbon-black/50`}
      >
        {/* Video Background (Fixed) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#000000]/75 backdrop-blur-[2px]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-linear-to-b from-neon-violet/20 via-electric-blue/10 to-transparent rounded-full blur-3xl opacity-40"></div>
        </div>

        <Navbar />
        
        <main className="relative z-10 w-full min-h-screen">
            {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
