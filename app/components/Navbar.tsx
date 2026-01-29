"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 25);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 py-3 cubic-bezier(0.16, 1, 0.3, 1) ${
          isScrolled || isMobileMenuOpen
            ? "bg-carbon-black/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] translate-y-0"
            : "bg-transparent translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50 pointer-events-auto" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/companylogo.png"
              alt="Chrysalis Logo"
              width={32}
              height={32}
              className="aspect-square w-14 object-center object-cover "
            />
            <h1 className="hidden lg:block font-heading font-semibold tracking-widest text-lg">CHRYSALIS</h1>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-8 text-muted-gray text-sm tracking-wide font-body uppercase font-light">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Projects", href: "/projects" },
              { name: "Services", href: "/services" },
              { name: "Pricing", href: "/pricing" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group transition-colors font-body hover:text-white"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-electric-blue to-soft-neon-pink transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
             {/* Build with Us Button (Desktop) */}
            <Link
              href="/contact"
              className="relative hidden lg:block group p-px rounded-2xl bg-linear-to-r from-electric-blue to-soft-neon-pink overflow-hidden"
            >
              <div className="relative px-6 py-2 rounded-2xl bg-carbon-black flex items-center gap-2 transition-all duration-300 group-hover:bg-carbon-black/80">
                <span className="font-bold text-sm bg-clip-text text-transparent bg-linear-to-r from-electric-blue to-soft-neon-pink group-hover:opacity-90 transition-opacity">
                  Build with Us
                </span>
            </div>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            >
               <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
               <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
               <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        <div 
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`} 
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Drawer */}
        <div className={`fixed top-0 right-0 h-dvh w-[80%] max-w-100 bg-carbon-black/95 backdrop-blur-2xl border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-50 transform transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1) lg:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
             
             {/* Drawer Header with Close Button */}
             <div className="flex items-center justify-between p-6 border-b border-white/5">
                <span className="font-heading font-medium tracking-widest text-sm text-muted-gray">MENU</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-electric-blue transition-colors">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
             </div>

             <nav className="flex flex-col px-6 mt-8 overflow-y-auto grow">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Projects", href: "/projects" },
                  { name: "Services", href: "/services" },
                  { name: "Pricing", href: "/pricing" },
                ].map((item, i) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`group flex items-center justify-between py-5 border-b border-white/5 text-xl font-light tracking-wider hover:text-electric-blue transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    style={{ transitionDelay: `${100 + (i * 50)}ms` }}
                  >
                    <span>{item.name}</span>
                    <svg className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
            </nav>
            
            <div className={`p-6 mt-auto mb-8 transition-all duration-700 delay-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative group p-px rounded-full bg-linear-to-r from-electric-blue to-soft-neon-pink overflow-hidden block w-full"
                >
                  <div className="relative px-8 py-4 rounded-full bg-carbon-black flex items-center justify-center gap-2 transition-all group-hover:bg-carbon-black/80">
                    <span className="font-bold bg-clip-text text-transparent bg-linear-to-r from-electric-blue to-soft-neon-pink text-lg">
                      Build with Us
                    </span>
                  </div>
                </Link>
            </div>
        </div>
      </header>
  );
}
