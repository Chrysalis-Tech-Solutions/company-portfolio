"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const PROJECT_CATEGORIES = [
  {
    title: "AI Driven Systems",
    gradient: "from-electric-blue to-soft-neon-pink",
    items: [
       {
          title: "HAPAG AI",
          category: "Web Platform",
          desc: "An AI-powered web platform designed to simplify meal planning and grocery preparation by generating personalized recipes, smart shopping lists, and meal schedules.",
          tags: ["Next.js", "AI API", "Node.js"],
          gradient: "from-electric-blue/10 to-transparent",
          borderHover: "hover:border-electric-blue/50"
       },
       {
          title: "AI PLMUN TUTOR",
          category: "Web Application",
          desc: "An AI-powered tutoring web application designed to assist students with learning and homework support through interactive question and answer sessions.",
          tags: ["OpenAI API", "Python", "React"],
          gradient: "from-soft-neon-pink/10 to-transparent",
          borderHover: "hover:border-soft-neon-pink/50"
       }
    ]
  },
  {
    title: "E-Commerce Web Platform",
    gradient: "from-neon-cyan to-electric-blue",
    items: [
       {
          title: "ONTAP CREATIVES",
          category: "E-Commerce Platform",
          desc: "A digital contact sharing platform that lets users create and manage NFC-enabled digital business cards and profiles, facilitating instant contact sharing.",
          tags: ["React", "NFC", "E-commerce"],
          gradient: "from-neon-cyan/10 to-transparent",
          borderHover: "hover:border-neon-cyan/50"
       }
    ]
  },

  {
    title: "Interactive Websites",
    gradient: "from-orange-500 to-red-600",
    items: [
       {
          title: "BURNBOX ADVERTISING",
          category: "Business Website",
          desc: "A creative printing and signage service provider website that helps businesses increase brand visibility through custom printing and visual marketing solutions.",
          tags: ["PHP", "JavaScript", "Custom CSS"],
          gradient: "from-orange-500/10 to-transparent",
          borderHover: "hover:border-orange-500/50"
       },
       {
          title: "THE GREAT WAR: APOCALYPTO",
          category: "Promotional Landing",
          desc: "A promotional landing page for a fictional MMORPG, showcasing characters, storyline, and game features while inviting visitors to register.",
          tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
          gradient: "from-red-600/10 to-transparent",
          borderHover: "hover:border-red-600/50"
       }
    ]
  }
];

export default function HomeContent() {
  const [badgeState, setBadgeState] = useState(0); // 0: Clients, 1: Projects
  const [categoryIndex, setCategoryIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  // Handle Badge Carousel (5s interval)
  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeState((prev) => (prev === 0 ? 1 : 0));
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
                   <source src="https://res.cloudinary.com/dlonwsopj/video/upload/v1769666886/homevideos_g1rvjw.mp4" type="video/mp4" />
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
            <h2 className="text-center text-3xl md:mt-0 mt-20 md:text-5xl font-bold font-heading bg-clip-text text-transparent bg-linear-to-br from-white via-white to-white/50 pb-8">
              What We Build
            </h2>
          {/* Dynamic Project Slider */}
          <div className="space-y-4 flex flex-col min-h-[600px] justify-between">
            <h3 className={`text-2xl text-center md:text-3xl max-w-2xl mx-auto font-bold uppercase tracking-wide bg-clip-text text-transparent bg-linear-to-r ${PROJECT_CATEGORIES[categoryIndex].gradient} transition-colors duration-500`}>
              {PROJECT_CATEGORIES[categoryIndex].title}
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 transition-all duration-500 ease-in-out">
               {PROJECT_CATEGORIES[categoryIndex].items.map((item, idx) => (
                 <div key={idx} className={`group relative bg-[#090909] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden ${item.borderHover} transition-colors duration-500 ${PROJECT_CATEGORIES[categoryIndex].items.length === 1 ? 'lg:col-span-2 lg:max-w-4xl lg:mx-auto w-full' : ''}`}>
                    <div className="absolute top-0 right-0 p-4 opacity-50 text-[10px] tracking-widest uppercase">{item.category}</div>
                     <h3 className="text-2xl font-bold text-white mb-4 md:mb-4">{item.title}</h3>
                     
                     <div className={`w-full ${PROJECT_CATEGORIES[categoryIndex].items.length === 1 ? 'aspect-[21/9]' : 'aspect-video'} bg-carbon-black rounded-lg mb-6 flex items-center justify-center relative overflow-hidden`}>
                         <div className={`absolute inset-0 bg-linear-to-br ${item.gradient}`}></div>
                         <div className="text-center z-10">
                            <div className="text-xs text-white/50 mb-1">Preview</div>
                            <div className="font-bold text-white">Coming Soon</div>
                         </div>
                     </div>

                     <p className="text-gray-400 text-sm leading-relaxed mb-4">
                       {item.desc}
                     </p>
                     <ul className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <li key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">{tag}</li>
                        ))}
                     </ul>
                 </div>
               ))}
            </div>


            {/* Slider Controls */}
            <div className="flex gap-4 items-center justify-center mt-8">
               <button 
                 onClick={() => setCategoryIndex(prev => (prev === 0 ? PROJECT_CATEGORIES.length - 1 : prev - 1))}
                 className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 text-sm text-white/70 hover:text-white transition-all uppercase tracking-wider"
               >
                 Previous
               </button>
               <div className="flex gap-2">
                  {PROJECT_CATEGORIES.map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === categoryIndex ? 'bg-electric-blue w-6' : 'bg-white/20'}`} />
                  ))}
               </div>
               <button 
                 onClick={() => setCategoryIndex(prev => (prev === PROJECT_CATEGORIES.length - 1 ? 0 : prev + 1))}
                 className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 text-sm text-white/70 hover:text-white transition-all uppercase tracking-wider"
               >
                 Next
               </button>
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

      {/* Section 5: How We Engage */}
      <section className="flex flex-col w-full mt-20 mb-10 transition-colors">
        <div className="flex flex-col w-full max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-5xl font-bold font-heading bg-clip-text text-transparent bg-linear-to-br from-white via-white to-white/50 mb-6">
            How We Engage
          </h2>
          <p className="text-center text-muted-gray text-sm md:text-base max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            We follow a streamlined, collaborative process to bring your vision to life — from the first conversation to long-term support.
          </p>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Step 01 — Discovery */}
            <div className="group relative flex flex-col p-7 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-white/10 transition-all duration-500">
             
             
              <h3 className="text-white font-bold text-base mb-10 font-heading">Discovery</h3>
              <p className="text-muted-gray text-sm leading-relaxed">We learn about your goals, audience, and requirements through an in-depth consultation.</p>
              <div className="hidden lg:block absolute top-1/2 -right-6 w-6 h-px bg-linear-to-r from-electric-blue/30 to-transparent"></div>
            </div>

            {/* Step 02 — Planning */}
            <div className="group relative flex flex-col p-7 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-white/10 transition-all duration-500">
            
              <h3 className="text-white font-bold text-base mb-10 font-heading">Planning</h3>
              <p className="text-muted-gray text-sm leading-relaxed">We define the scope, timeline, and deliverables — then provide a tailored quotation.</p>
              <div className="hidden lg:block absolute top-1/2 -right-6 w-6 h-px bg-linear-to-r from-neon-violet/30 to-transparent"></div>
            </div>

            {/* Step 03 — Development */}
            <div className="group relative flex flex-col p-7 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-white/10 transition-all duration-500">
            
              <h3 className="text-white font-bold text-base mb-10 font-heading">Development</h3>
              <p className="text-muted-gray text-sm leading-relaxed">We build iteratively with regular updates, ensuring transparency and quality at every stage.</p>
              <div className="hidden lg:block absolute top-1/2 -right-6 w-6 h-px bg-linear-to-r from-soft-neon-pink/30 to-transparent"></div>
            </div>

            {/* Step 04 — Launch & Support */}
            <div className="group relative flex flex-col p-7 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-white/10 transition-all duration-500">
              
              <h3 className="text-white font-bold text-base mb-10 font-heading">Launch & Support</h3>
              <p className="text-muted-gray text-sm leading-relaxed">We deploy your project and provide ongoing support to keep everything running smoothly.</p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
            {/* Top glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-electric-blue/50 to-transparent"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
              {/* Left — Message */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-white font-bold text-xl md:text-2xl font-heading">
                  Ready to start your project?
                </h3>
                <p className="text-muted-gray text-sm md:text-base leading-relaxed max-w-lg">
                  Every project is unique — that&apos;s why we offer <span className="text-transparent bg-clip-text bg-linear-to-r from-electric-blue to-neon-cyan font-semibold">custom pricing</span> tailored to your scope and goals. Tell us what you need and we&apos;ll craft a plan that fits.
                </p>
              </div>

              {/* Right — CTA Button */}
              <div className="shrink-0">
                <Link
                  href="/pricing"
                  className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-linear-to-r from-electric-blue to-soft-neon-pink text-white font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_40px_rgba(58,134,255,0.4)] transition-all duration-500 hover:scale-105 active:scale-95"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Inquire Now
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
