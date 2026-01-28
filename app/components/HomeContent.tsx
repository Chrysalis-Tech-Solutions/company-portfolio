"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const PRICING_TIERS = [
  {
      name: "BASIC",
      price: "₱10,000 - ₱30,000",
      desc: "Perfect for individuals and small businesses starting their digital journey.",
      features: ["Custom UI design", "Mobile & desktop optimization", "Static frontend development", "Up to 5 pages"],
      border: "border-white/10",
      shadow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
      gradient: "from-gray-400 to-gray-600"
  },
  {
      name: "PREMIUM",
      price: "₱30,000 - ₱250,000",
      desc: "Ideal for growing startups needing dynamic functionality and back-end integration.",
      features: ["UI/UX design system", "Frontend + Backend development", "Database integration", "Admin dashboard"],
      border: "border-electric-blue/50",
      shadow: "shadow-[0_0_30px_rgba(58,134,255,0.15)] hover:shadow-[0_0_50px_rgba(58,134,255,0.3)]",
      popular: true,
      gradient: "from-neon-cyan to-electric-blue"
  },
  {
      name: "PROFESSIONAL",
      price: "₱250,000 - ₱850,000",
      desc: "Advanced solutions for businesses requiring scalable, element-rich digital ecosystems.",
      features: ["System architecture design", "Advanced UI/UX engineering", "Web + Mobile integration", "AI integration"],
      border: "border-neon-violet/50",
      shadow: "shadow-[0_0_40px_rgba(123,97,255,0.1)] hover:shadow-[0_0_60px_rgba(123,97,255,0.2)]",
      gradient: "from-electric-blue to-soft-neon-pink"
  },
  {
      name: "ENTERPRISE",
      price: "LET'S DISCUSS IT",
      desc: "Bespoke, mission-critical infrastructure for large-scale organizations.",
      features: ["Enterprise system architecture", "Multi-system orchestration", "Data lake architecture", "AI/ML model development"],
     border: "border-soft-neon-pink/50",
      shadow: "shadow-[0_0_50px_rgba(255,78,205,0.15)] hover:shadow-[0_0_70px_rgba(255,78,205,0.3)]",
      gradient: "from-soft-neon-pink to-neon-violet"
  }
];

export default function HomeContent() {
  const [badgeState, setBadgeState] = useState(0); // 0: Clients, 1: Projects
  const [pricingIndex, setPricingIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  // Handle Badge Carousel (5s interval)
  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeState((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle Pricing Carousel (5s interval)
  useEffect(() => {
    const interval = setInterval(() => {
      setPricingIndex((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="relative w-full font-body text-pure-white selection:bg-neon-cyan selection:text-carbon-black bg-transparent"
    >
      {/* Hero Section */}
      <section className="relative z-10 h-auto w-full flex flex-col items-center justify-center snap-start snap-always px-4 pt-20">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Badge Content (Fixed Container, Animated Text)
          <div className="mb-8 inline-flex items-center justify-center min-w-[300px] h-[50px] rounded-full bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden">
             <div className="relative w-full h-full"> 
               <div
                  className={`absolute inset-0 flex items-center justify-center gap-3 px-5 transition-all duration-700 ease-in-out transform ${
                    badgeState === 0
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
               >
                   <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-6 h-6 rounded-full border border-carbon-black bg-linear-to-br from-gray-400 to-gray-600"></div>
                      ))}
                   </div>
                   <span className="text-sm font-bold text-white">101 Clients</span>
                   <span className="text-[10px] text-muted-gray uppercase tracking-wider">who believes us</span>
               </div>
               <div
                  className={`absolute inset-0 flex items-center justify-center gap-3 px-5 transition-all duration-700 ease-in-out transform ${
                    badgeState === 1
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
               >
                   <div className="w-6 h-6 flex items-center justify-center rounded-full bg-neon-cyan/20 text-neon-cyan font-bold text-xs">+79</div>
                   <span className="text-sm font-bold text-white">Solutions</span>
                    <span className="text-[10px] text-muted-gray uppercase tracking-wider">that matters</span>
               </div>
             </div>
          </div> */}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-white/70 max-w-5xl">
            Transforming Vision into <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-electric-blue to-soft-neon-pink">
              Future-Ready Solutions
            </span>
          </h1>

          <p className="max-w-3xl text-lg md:text-xl text-muted-gray leading-relaxed font-body">
            We design and build intelligent digital systems that evolve with
            your goals, scale with your growth, and adapt to the future.
          </p>
          {/* 
          <Link
            href="#dashboard"
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
             Get to Know Us
             <div className="w-8 h-8 flex items-center justify-center animate-float mt-2 text-white/50">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
               </svg>
             </div>
          </Link> */}
        </div>
      </section>

      {/* Dashboard / Content Section */}
      <section
        id="dashboard"
        className="relative z-10 lg:min-h-screen w-full flex items-center justify-center px-4 py-10 transition-colors duration-500"
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Dashboard Preview Mockup (Same as before but wrapped in section for snap) */}
          <div className="w-full relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-neon-cyan via-electric-blue to-neon-violet rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-[#090909] border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl overflow-hidden text-left">
              {/* Dashboard Header */}
              <div className="flex items-center justify-center mb-5">
                {/* Laptop Camera Array */}
                <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-black border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                  {/* IR / Ambient Sensor */}
                  <div className="w-1.5 h-1.5 rounded-full bg-white/5 shadow-inner"></div>

                  {/* Main Lens */}
                  <div className="w-4 h-4 rounded-full bg-[#050505] ring-1 ring-white/10 flex items-center justify-center relative shadow-[inset_0_1px_3px_rgba(255,255,255,0.1)]">
                    <div className="w-2 h-2 rounded-full bg-[#020204] relative overflow-hidden ring-1 ring-black">
                      {/* Lens Reflection */}
                      <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-linear-to-b from-blue-500/10 to-transparent"></div>
                      <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-white/10 blur-[1px] rounded-full"></div>
                    </div>
                  </div>

                  {/* Status LED */}
                  <div className="w-0.5 h-0.5 rounded-full bg-green-500 shadow-[0_0_4px_rgba(34,197,94,0.8)]"></div>
                </div>
              </div>

              {/* Dashboard Content Placeholder - Laptop Screen */}
              <div className="w-full aspect-auto bg-black relative overflow-hidden rounded-lg border border-white/5 mx-auto flex items-center justify-center">
                 {/* Loading Spinner */}
                 {isVideoLoading && (
                   <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/80">
                     <div className="w-8 h-8 border-2 border-electric-blue border-t-transparent rounded-full animate-spin"></div>
                   </div>
                 )}
                 <video
                   className={`w-full h-full object-contain transition-opacity duration-500 ${isVideoLoading ? 'opacity-0' : 'opacity-100'}`}
                   autoPlay
                   muted
                   loop
                   playsInline
                   draggable={false}
                   onLoadedData={() => setIsVideoLoading(false)}
                   onWaiting={() => setIsVideoLoading(true)}
                   onPlaying={() => setIsVideoLoading(false)}
                 >
                   <source src="/main-video.mp4" type="video/mp4" />
                 </video>
                  {/* Screen Glare/Reflection */}
                 <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none z-10"></div>
              </div>
            </div>
          </div>

          {/* Footer Trust Logos
          <div className="mt-20 opacity-50 text-sm text-center mb-20">
            <p className="mb-6">Trusted by 10,000+ teams at companies like</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale">
              <div className="font-bold text-xl font-heading">BRAND</div>
              <div className="font-bold text-xl font-heading">LOGO</div>
              <div className="font-bold text-xl font-heading">IPSUM</div>
              <div className="font-bold text-xl font-heading">CORP</div>
              <div className="font-bold text-xl font-heading">TECH</div>
            </div>
          </div> */}
        </div>
      </section>
      
      {/* Section 2: Narrative / History */}
      <section className="w-full h-[50vh] lg:h-screen flex flex-col items-center justify-center mx-auto px-6 text-center transition-colors">  
        <h2 className="text-3xl md:text-5xl font-heading font-light leading-snug">
          WE ARE PIONEERING CREATIVE, ADAPTIVE, <br />
          AND{" "}
          <span className="font-bold bg-clip-text text-transparent bg-linear-to-r from-electric-blue to-soft-neon-pink">FUTURE-PROOF</span> DIGITAL SYSTEMS <br /> FOR A{" "}
          <span className="font-bold bg-clip-text text-transparent bg-linear-to-r from-soft-neon-pink to-electric-blue">TRANSFORMING WORLD</span>
        </h2>
      </section>

      {/* Section 3: Featured Projects */}
      <section className="flex flex-col w-full gap-5 transition-colors">
        <div className="flex flex-col w-full gap-5">
            <h2 className="text-center text-3xl md:text-5xl font-bold font-heading bg-clip-text text-transparent bg-linear-to-br from-white via-white to-white/50 pb-8">
              What We Build
            </h2>
          <div className="space-y-4 flex flex-col">
            <h3 className="text-2xl md:text-3xl max-w-2xl mx-auto font-bold uppercase tracking-wide bg-clip-text text-transparent bg-linear-to-r from-electric-blue to-soft-neon-pink">
              AI Driven Systems
            </h3>
            {/* AI Driven Systems */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
               {/* HAPAG AI */}
               <div className="group relative bg-[#090909] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden hover:border-electric-blue/50 transition-colors duration-500">
                  <div className="absolute top-0 right-0 p-4 opacity-50 text-[10px] tracking-widest uppercase">Web Platform</div>
                   <h3 className="text-2xl font-bold text-white mb-4">HAPAG AI</h3>
                   <div className="w-full aspect-video bg-carbon-black rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-linear-to-br from-electric-blue/10 to-transparent"></div>
                       <div className="text-center z-10">
                          <div className="text-xs text-white/50 mb-1">Preview</div>
                          <div className="font-bold text-white">Coming Soon</div>
                       </div>
                   </div>
                   <p className="text-gray-400 text-sm leading-relaxed mb-4">
                     An AI-powered web platform designed to simplify meal planning and grocery preparation by generating personalized recipes, smart shopping lists, and meal schedules.
                   </p>
                   <ul className="flex flex-wrap gap-2">
                      {["Next.js", "AI API", "Node.js"].map(tag => (
                        <li key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">{tag}</li>
                      ))}
                   </ul>
               </div>

               {/* AI PLMUN TUTOR */}
               <div className="group relative bg-[#090909] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden hover:border-soft-neon-pink/50 transition-colors duration-500">
                  <div className="absolute top-0 right-0 p-4 opacity-50 text-[10px] tracking-widest uppercase">Web Application</div>
                   <h3 className="text-2xl font-bold text-white mb-4">AI PLMUN TUTOR</h3>
                   <div className="w-full aspect-video bg-carbon-black rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-linear-to-br from-soft-neon-pink/10 to-transparent"></div>
                        <div className="text-center z-10">
                          <div className="text-xs text-white/50 mb-1">Preview</div>
                          <div className="font-bold text-white">Coming Soon</div>
                       </div>
                   </div>
                   <p className="text-gray-400 text-sm leading-relaxed mb-4">
                     An AI-powered tutoring web application designed to assist students with learning and homework support through interactive question and answer sessions.
                   </p>
                   <ul className="flex flex-wrap gap-2">
                       {["OpenAI API", "Python", "React"].map(tag => (
                        <li key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">{tag}</li>
                      ))}
                   </ul>
               </div>
            </div>
          </div>
          <div className="space-y-4 flex flex-col mt-20">
            <h3 className="text-2xl md:text-3xl max-w-2xl mx-auto font-bold uppercase tracking-wide bg-clip-text text-transparent bg-linear-to-r from-neon-cyan to-electric-blue">
              E-Commerce Web Platform
            </h3>
            {/* E-Commerce */}
            <div className="w-full px-4">
                <div className="group relative bg-[#090909] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden hover:border-neon-cyan/50 transition-colors duration-500 max-w-4xl mx-auto">
                   <div className="absolute top-0 right-0 p-4 opacity-50 text-[10px] tracking-widest uppercase">E-Commerce Platform</div>
                   <h3 className="text-2xl font-bold text-white mb-4">ONTAP CREATIVES</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="w-full aspect-video bg-carbon-black rounded-lg flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-linear-to-br from-neon-cyan/10 to-transparent"></div>
                           <div className="text-center z-10">
                            <div className="text-xs text-white/50 mb-1">Preview</div>
                            <div className="font-bold text-white">Coming Soon</div>
                         </div>
                      </div>
                      <div className="flex flex-col justify-center">
                         <p className="text-gray-400 text-sm leading-relaxed mb-6">
                           A digital contact sharing platform that lets users create and manage NFC-enabled digital business cards and profiles, facilitating instant contact sharing.
                         </p>
                          <ul className="flex flex-wrap gap-2">
                             {["React", "NFC", "E-commerce"].map(tag => (
                                <li key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">{tag}</li>
                              ))}
                           </ul>
                      </div>
                   </div>
               </div>
            </div>
          </div>
          <div className="space-y-4 flex flex-col mt-20">
            <h3 className="text-2xl md:text-3xl max-w-2xl mx-auto font-bold uppercase tracking-wide bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-red-600">
              Interactive Websites
            </h3>
            {/* Interactive Websites */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                {/* BURNBOX */}
               <div className="group relative bg-[#090909] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden hover:border-orange-500/50 transition-colors duration-500">
                  <div className="absolute top-0 right-0 p-4 opacity-50 text-[10px] tracking-widest uppercase">Business Website</div>
                   <h3 className="text-2xl font-bold text-white mb-4">BURNBOX ADVERTISING</h3>
                   <div className="w-full aspect-video bg-carbon-black rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-transparent"></div>
                        <div className="text-center z-10">
                          <div className="text-xs text-white/50 mb-1">Preview</div>
                          <div className="font-bold text-white">Coming Soon</div>
                       </div>
                   </div>
                   <p className="text-gray-400 text-sm leading-relaxed mb-4">
                     A creative printing and signage service provider website that helps businesses increase brand visibility through custom printing and visual marketing solutions.
                   </p>
                   <ul className="flex flex-wrap gap-2">
                       {["PHP", "JavaScript", "Custom CSS"].map(tag => (
                        <li key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">{tag}</li>
                      ))}
                   </ul>
               </div>

                {/* THE GREAT WAR */}
               <div className="group relative bg-[#090909] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden hover:border-red-600/50 transition-colors duration-500">
                  <div className="absolute top-0 right-0 p-4 opacity-50 text-[10px] tracking-widest uppercase">Promotional Landing</div>
                   <h3 className="text-2xl font-bold text-white mb-4">THE GREAT WAR: APOCALYPTO</h3>
                   <div className="w-full aspect-video bg-carbon-black rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-linear-to-br from-red-600/10 to-transparent"></div>
                        <div className="text-center z-10">
                          <div className="text-xs text-white/50 mb-1">Preview</div>
                          <div className="font-bold text-white">Coming Soon</div>
                       </div>
                   </div>
                   <p className="text-gray-400 text-sm leading-relaxed mb-4">
                     A promotional landing page for a fictional MMORPG, showcasing characters, storyline, and game features while inviting visitors to register.
                   </p>
                   <ul className="flex flex-wrap gap-2">
                       {["Next.js", "Tailwind CSS", "Framer Motion"].map(tag => (
                        <li key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">{tag}</li>
                      ))}
                   </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Best Services */}
      <section className="flex flex-col w-full gap-5 mt-32 transition-colors">
        <div className="flex flex-col w-full gap-5">
          <h2 className="text-center text-3xl md:text-5xl font-bold font-heading bg-clip-text text-transparent bg-linear-to-br from-white via-white to-white/50 pb-2">
              What We Offer
            </h2>
          <div className="flex flex-col gap-5">
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
               {/* Hybrid Systems */}
               <div className="group relative h-78 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:bg-white/10 hover:border-electric-blue/30 transition-all duration-500">
                  <div className="absolute -inset-0.5 bg-linear-to-br from-electric-blue/0 to-soft-neon-pink/0 group-hover:from-electric-blue/20 group-hover:to-soft-neon-pink/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                   <div className="relative h-full w-full p-8 flex flex-col justify-between z-10">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-sm font-light text-white/60 group-hover:border-electric-blue group-hover:text-white transition-colors duration-300">01</div>
                      <div className="mt-auto">
                        <h3 className="font-heading font-bold text-xl uppercase tracking-wide mb-3 text-white group-hover:text-electric-blue transition-colors">Hybrid Systems</h3>
                        <p className="text-muted-gray text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4 group-hover:border-soft-neon-pink transition-colors">
                            Seamlessly integrated web and mobile ecosystems for unified business operations.
                        </p>
                        <div className="flex flex-wrap gap-2">
                             {["Real-time Sync", "Unified Database", "Cross-Platform"].map((sub, i) => (
                                <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/5 text-white/50 group-hover:bg-electric-blue/10 group-hover:text-electric-blue group-hover:border-electric-blue/20 transition-all">{sub}</span>
                             ))}
                        </div>
                      </div>
                   </div>
               </div>

                {/* AI Integrated Systems */}
                <div className="group relative h-78 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:bg-white/10 hover:border-electric-blue/30 transition-all duration-500">
                   <div className="absolute -inset-0.5 bg-linear-to-br from-electric-blue/0 to-soft-neon-pink/0 group-hover:from-electric-blue/20 group-hover:to-soft-neon-pink/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                   <div className="relative h-full w-full p-8 flex flex-col justify-between z-10">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-sm font-light text-white/60 group-hover:border-electric-blue group-hover:text-white transition-colors duration-300">02</div>
                      <div className="mt-auto">
                        <h3 className="font-heading font-bold text-xl uppercase tracking-wide mb-3 text-white group-hover:text-electric-blue transition-colors">AI Integrated Systems</h3>
                        <p className="text-muted-gray text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4 group-hover:border-soft-neon-pink transition-colors">
                            Intelligent automation and predictive analytics to drive smarter decision making.
                        </p>
                         <div className="flex flex-wrap gap-2">
                             {["Machine Learning", "Chatbots", "NLP"].map((sub, i) => (
                                <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/5 text-white/50 group-hover:bg-electric-blue/10 group-hover:text-electric-blue group-hover:border-electric-blue/20 transition-all">{sub}</span>
                             ))}
                        </div>
                      </div>
                   </div>
               </div>

                {/* Collaboration Platforms */}
                <div className="group relative h-78 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:bg-white/10 hover:border-electric-blue/30 transition-all duration-500">
                   <div className="absolute -inset-0.5 bg-linear-to-br from-electric-blue/0 to-soft-neon-pink/0 group-hover:from-electric-blue/20 group-hover:to-soft-neon-pink/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                   <div className="relative h-full w-full p-8 flex flex-col justify-between z-10">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-sm font-light text-white/60 group-hover:border-electric-blue group-hover:text-white transition-colors duration-300">03</div>
                      <div className="mt-auto">
                        <h3 className="font-heading font-bold text-xl uppercase tracking-wide mb-3 text-white group-hover:text-electric-blue transition-colors">Collaboration Platforms</h3>
                        <p className="text-muted-gray text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4 group-hover:border-soft-neon-pink transition-colors">
                            Custom tools designed to streamline team communication and project workflows.
                        </p>
                         <div className="flex flex-wrap gap-2">
                             {["Team Dashboards", "File Sharing", "Messaging"].map((sub, i) => (
                                <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/5 text-white/50 group-hover:bg-electric-blue/10 group-hover:text-electric-blue group-hover:border-electric-blue/20 transition-all">{sub}</span>
                             ))}
                        </div>
                      </div>
                   </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Pricing Plans Slider*/}
      <section className="flex flex-col w-full mt-20 transition-colors">
        <div className="flex flex-col w-full">
          <h2 className="text-center text-3xl md:text-5xl font-bold font-heading bg-clip-text text-transparent bg-linear-to-br from-white via-white to-white/50">
              How We Engage
            </h2>
          {/* Pricing Slider (Mobile/Tablet) & Grid (Desktop) */}
            <div className="relative w-full px-4 py-10 flex flex-col gap-5">
              {/* Dots - Visible only on Mobile/Tablet */}
              <div className="w-full flex gap-3 items-center justify-center lg:hidden">
                {Array.from({ length: 4 }).map((_, index) => (
                  <button 
                      key={index}
                      onClick={() => setPricingIndex(index)} 
                      className={`h-0.5 rounded-full transition-all duration-300 ${pricingIndex === index ? "w-7 bg-electric-blue" : "w-5 bg-gray-600 hover:bg-gray-400"}`}
                  />
                ))}
              </div>

              {/* Slider Container - Mobile/Tablet (< lg) */}
              <div className="w-full overflow-hidden lg:hidden">
              <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ transform: `translateX(-${pricingIndex * 100}%)` }}>
                  {PRICING_TIERS.map((tier, i) => {
                    const isProfessional = tier.name === "PROFESSIONAL";
                    const isEnterprise = tier.name === "ENTERPRISE";
                    
                    return (
                      <div key={i} className="w-full shrink-0 flex justify-center px-4">
                          {/* Card Content */}
                          <div className={`relative w-full max-w-md flex flex-col p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                                isEnterprise
                                  ? "border-soft-neon-pink/50 bg-linear-to-b from-[#1a0510] to-transparent shadow-[0_0_50px_rgba(255,78,205,0.15)] ring-1 ring-soft-neon-pink/20"
                                  : isProfessional
                                  ? "border-neon-violet/50 bg-linear-to-b from-[#0f0a1e] to-transparent shadow-[0_0_40px_rgba(123,97,255,0.1)]"
                                  : tier.popular
                                  ? "border-electric-blue/50 bg-linear-to-b from-electric-blue/10 to-transparent shadow-[0_0_30px_rgba(58,134,255,0.15)]"
                                  : "border-white/10 bg-white/5"
                              }`}>
                              {isEnterprise && (
                                <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-soft-neon-pink/5 to-transparent pointer-events-none"></div>
                              )}
                              
                              {tier.popular && (
                                <div className="absolute top-3 right-3 -translate-x-1/2 bg-linear-to-r from-electric-blue to-neon-cyan text-carbon-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg z-20">
                                  Most Popular
                                </div>
                              )}
                              {isEnterprise && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-soft-neon-pink to-neon-violet text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(255,78,205,0.5)] z-20">
                                  Best Value
                                </div>
                              )}
                              <h3 className="text-xl font-heading font-bold text-white mb-2">{tier.name}</h3>
                              <div className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r ${tier.gradient} mb-4`}>
                                  {tier.price}
                              </div>
                              <p className="text-muted-gray text-sm mb-6 min-h-10">{tier.desc}</p>
                              <ul className="space-y-3 mb-8">
                                  {tier.features.map((feat, j) => (
                                      <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                                          <div className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0"></div>
                                          {feat}
                                      </li>
                                  ))}
                              </ul>
                              <Link 
                                  href={{ pathname: "/contact", query: { subject: "Client", tier: tier.name } }}
                                  className="mt-auto w-full py-3 rounded-lg border border-white/20 hover:bg-white hover:text-carbon-black hover:border-transparent transition-all duration-300 text-center text-sm font-bold uppercase tracking-wider"
                              >
                                  Get Started
                              </Link>
                          </div>
                      </div>
                  )})}
              </div>
              </div>

              {/* Grid Container - Desktop (>= lg) */}
              <div className="hidden lg:grid grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
                  {PRICING_TIERS.map((tier, i) => {
                    const isProfessional = tier.name === "PROFESSIONAL";
                    const isEnterprise = tier.name === "ENTERPRISE";
                    
                    return (
                      <div key={i} className="w-full h-full flex justify-center">
                          {/* Card Content (Same structure, height aligned) */}
                          <div className={`relative w-full flex flex-col p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-2 ${
                                isEnterprise
                                  ? "border-soft-neon-pink/50 bg-linear-to-b from-[#1a0510] to-transparent shadow-[0_0_50px_rgba(255,78,205,0.15)] hover:shadow-[0_0_70px_rgba(255,78,205,0.3)] ring-1 ring-soft-neon-pink/20"
                                  : isProfessional
                                  ? "border-neon-violet/50 bg-linear-to-b from-[#0f0a1e] to-transparent shadow-[0_0_40px_rgba(123,97,255,0.1)] hover:shadow-[0_0_60px_rgba(123,97,255,0.2)]"
                                  : tier.popular
                                  ? "border-electric-blue/50 bg-linear-to-b from-electric-blue/10 to-transparent shadow-[0_0_30px_rgba(58,134,255,0.15)]"
                                  : "border-white/10 bg-white/5 hover:border-white/20"
                              }`}>
                              {isEnterprise && (
                                <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-soft-neon-pink/5 to-transparent pointer-events-none"></div>
                              )}
                              
                              {tier.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-electric-blue to-neon-cyan text-carbon-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg z-20">
                                  Most Popular
                                </div>
                              )}
                              {isEnterprise && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-soft-neon-pink to-neon-violet text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(255,78,205,0.5)] z-20">
                                  Best Value
                                </div>
                              )}
                              <h3 className="text-xl font-heading font-bold text-white mb-2">{tier.name}</h3>
                              <div className={`text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r ${tier.gradient} mb-4 wrap-break-word`}>
                                  {tier.price}
                              </div>
                              <p className="text-muted-gray text-xs mb-6 min-h-15">{tier.desc}</p>
                              <ul className="space-y-3 mb-8 grow">
                                  {tier.features.map((feat, j) => (
                                      <li key={j} className="flex items-start gap-3 text-xs text-gray-300">
                                          <div className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0 mt-1"></div>
                                          {feat}
                                      </li>
                                  ))}
                              </ul>
                              <Link 
                                  href={{ pathname: "/contact", query: { subject: "Client", tier: tier.name } }}
                                  className="mt-auto w-full py-3 rounded-lg border border-white/20 hover:bg-white hover:text-carbon-black hover:border-transparent transition-all duration-300 text-center text-xs font-bold uppercase tracking-wider"
                              >
                                  Get Started
                              </Link>
                          </div>
                      </div>
                  )})}
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
