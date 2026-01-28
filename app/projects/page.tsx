"use client";

import { Project } from "@/types";
import { useState } from "react";

const projects: Project[] = [
  {
    id: 1,
    title: "HAPAG AI",
    category: "AI-POWERED WEB PLATFORM",
    overview: "HAPAG AI is an AI-powered web platform designed to simplify meal planning and grocery preparation by generating personalized recipes, smart shopping lists, and meal schedules. It helps users save time, make healthier food choices, and connect with local stores through an intelligent, user-friendly digital experience.",
    functions: ["AI RECIPE AND MEAL PLANNING", "SMART SHOPPING LISTS", "STORE RECOMMENDATIONS", "MEAL PLANNING CALENDAR", "CHAT INTERFACE", "DIETARY PREFERENCES", "STORE OWNER FEATURE"],
    techStack: ["Next.js", "AI API", "Node.js"],
    link: "https://hapagai2025.vercel.app/"
  },
  {
    id: 2,
    title: "ONTAP CREATIVES",
    category: "E-COMMERCE WEB PLATFORM",
    overview: "Ontap.ph is a digital contact sharing platform that lets users create and manage NFC-enabled digital business cards and profiles, making it easy to share contact information instantly via tap or web link without traditional paper cards.",
    functions: ["DIGITAL CONTACT SHARING", "NFC TECHNOLOGY INTEGRATION", "USER REGISTRATION AND DASHBOARD", "PROFILE CUSTOMIZATION", "ONLINE PURCHASING", "ORDER MONITORING", "ADMIN DASHBOARD"],
    techStack: ["React", "NFC", "E-commerce"],
    link: "https://ontap.ph"
  },
  {
    id: 3,
    title: "BURNBOX ADVERTISING",
    category: "BUSINESS WEBSITE",
    overview: "Burnbox Advertising (also referred to as Burnbox Printing) is a creative printing and signage service provider that helps businesses increase brand visibility through custom printing and visual marketing solutions.",
    functions: ["MAILING SYSTEM (SENDING AND RECEIVING)", "RESPONSIVE DISPLAY", "CROSS-BROWSER COMPATIBILITY", "CUSTOM UI/UX", "ADMIN DASHBOARD", "STAFF MANAGEMENT"],
    techStack: ["PHP", "JavaScript", "Custom CSS"],
    link: "https://burnboxadvertising.com"
  },
  {
    id: 4,
    title: "THE GREAT WAR: APOCALYPTO",
    category: "PROMOTIONAL LANDING WEBSITE",
    overview: "A promotional landing page for the fictional multiplayer online role-playing game The Great War: Apocalypto, showcasing characters, storyline, and game features while inviting visitors to register or become patrons for early access and exclusive content.",
    functions: ["Tiered Access / Subscription Info", "Early Registration / Patron Call-to-Action", "Highlight Game Features", "Story and World Introduction", "Showcase Game Characters"],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://mmorpg-landing-page.vercel.app"
  },
  {
    id: 5,
    title: "TENANT-LANDLORD COLLAB",
    category: "INTERCONNECTED WEB PLATFORM",
    overview: "This co-living web app system provides a complete digital solution for shared living management, connecting tenants and landlords through a single platform. The tenant portal allows residents to manage their leases, pay rent, submit maintenance requests, and a seamless and self-service living experience.",
    functions: ["Profile Management", "Lease Access", "Online Payments", "Maintenance Requests", "Community Updates", "Property Management", "Tenant Tracking", "Rent Monitoring", "Document Management"],
    techStack: ["MERN Stack", "Socket.io"],
    link: "https://coliving-for-tenant.vercel.app"
  },
  {
    id: 6,
    title: "AI PLMUN TUTOR",
    category: "AI-POWERED WEB PLATFORM",
    overview: "AI PLMUN Tutor is an AI-powered tutoring web application designed to assist students with learning and homework support through interactive question and answer sessions powered by intelligent language models and produce an effective learning materials for the subjects that the student fails to understand.",
    functions: ["AI CHAT TUTOR", "QUIZ GENERATION", "CUSTOM LEARNING MATERIAL GENERATION", "EDUCATIONAL SUPPORT", "HOMEWORK ASSISTANCE", "CONTEXTUAL LEARNING", "MULTI-ROLE ACCESSIBILITY", "INSTANT MESSAGING", "ANALYTICS DASHBOARD"],
    techStack: ["OpenAI API", "Python", "React"],
    link: "https://aiplmuntutor.vercel.app"
  },
  {
    id: 7,
    title: "COMING SOON",
    category: "Future Project",
    overview: "More innovative projects are currently in development. Stay tuned for future updates and releases.",
    functions: ["Innovation", "Development", "Future Tech"],
    techStack: ["Next.js", "AI"],
  },
  {
    id: 8,
    title: "COMING SOON",
    category: "Future Project",
    overview: "More innovative projects are currently in development. Stay tuned for future updates and releases.",
    functions: ["Innovation", "Development", "Future Tech"],
    techStack: ["Next.js", "AI"],
  },
];

export default function ProjectsPage() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [loadingVideos, setLoadingVideos] = useState<Record<number, boolean>>({});

  const handleVideoLoadStart = (id: number) => {
    setLoadingVideos(prev => ({ ...prev, [id]: true }));
  };

  const handleVideoLoaded = (id: number) => {
    setLoadingVideos(prev => ({ ...prev, [id]: false }));
  };

  const getVideoSrc = (id: number) => {
    switch (id) {
      case 1: return "/hapag-ai-video.mp4";
      case 2: return "/ontap-creatives-video.mp4";
      case 4: return "/mmorpg-video.mp4";
      case 6: return "/ai-plmun-tutor-video.mp4";
      default: return null;
    }
  };

  // Helper to determine what to render in a slot
  const getSlotContent = (index: number) => {
    // If no project is active, every slot shows its corresponding project thumbnail
    if (activeId === null) {
      return { type: "thumbnail", project: projects[index], colSpan: 1 };
    }

    const activeIndex = projects.findIndex((p) => p.id === activeId);
    const activeProject = projects[activeIndex];

    // Determine Logic Group
    // Group 1: Middle Cards (1, 2, 5, 6)
    // -> Video takes Middle (1-2 or 5-6). Info takes Sides (0/3 or 4/7).
    if ([1, 2, 5, 6].includes(activeIndex)) {
      // Row 1 Middle (1, 2)
      if (activeIndex === 1 || activeIndex === 2) {
         if (index === 1) return { type: "video", project: activeProject, colSpan: 2 };
         if (index === 2) return { type: "hidden", colSpan: 0 };
         if (index === 0) return { type: "overview", project: activeProject, colSpan: 1 };
         if (index === 3) return { type: "functions", project: activeProject, colSpan: 1 };
      }
      // Row 2 Middle (5, 6)
      if (activeIndex === 5 || activeIndex === 6) {
         if (index === 5) return { type: "video", project: activeProject, colSpan: 2 };
         if (index === 6) return { type: "hidden", colSpan: 0 };
         if (index === 4) return { type: "overview", project: activeProject, colSpan: 1 };
         if (index === 7) return { type: "functions", project: activeProject, colSpan: 1 };
      }
    }
    
    // Group 2: Corner Cards (0, 3, 4, 7)
    // -> Video takes Corner (0-1, 2-3, 4-5, 6-7). Info takes Vertical Neighbors.
    else {
      // Top Left (0) -> Video (0-1). Info Below (4, 5).
      if (activeIndex === 0) {
        if (index === 0) return { type: "video", project: activeProject, colSpan: 2 };
        if (index === 1) return { type: "hidden", colSpan: 0 };
        if (index === 2) return { type: "overview", project: activeProject, colSpan: 1 };
        if (index === 3) return { type: "functions", project: activeProject, colSpan: 1 };
      }
      // Top Right (3) -> Video (2-3). Info Below (6, 7).
      else if (activeIndex === 3) {
        if (index === 2) return { type: "video", project: activeProject, colSpan: 2 };
        if (index === 3) return { type: "hidden", colSpan: 0 };
        if (index === 1) return { type: "overview", project: activeProject, colSpan: 1 };
        if (index === 0) return { type: "functions", project: activeProject, colSpan: 1 };
      }
      // Bottom Left (4) -> Video (4-5). Info Above (0, 1).
      else if (activeIndex === 4) {
        if (index === 4) return { type: "video", project: activeProject, colSpan: 2 };
        if (index === 5) return { type: "hidden", colSpan: 0 };
        if (index === 6) return { type: "overview", project: activeProject, colSpan: 1 };
        if (index === 7) return { type: "functions", project: activeProject, colSpan: 1 };
      }
      // Bottom Right (7) -> Video (6-7). Info Above (2, 3).
      else if (activeIndex === 7) {
        if (index === 6) return { type: "video", project: activeProject, colSpan: 2 };
        if (index === 7) return { type: "hidden", colSpan: 0 };
        if (index === 5) return { type: "overview", project: activeProject, colSpan: 1 };
        if (index === 4) return { type: "functions", project: activeProject, colSpan: 1 };
      }
    }

    // Default: Show the original project for this slot (dimmed)
    // Note: Slots occupied by dynamic content are handled above.
    // This return is for slots NOT involved in the active view.
    return { type: "thumbnail", project: projects[index], colSpan: 1, dimmed: true };
  };

  return (
    <div className="min-h-screen w-full bg-carbon-black text-white pt-24 pb-20 overflow-x-hidden">
       {/* Background Gradient Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-125 h-125 bg-electric-blue/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-150 h-150 bg-soft-neon-pink/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold font-heading bg-clip-text text-transparent bg-linear-to-br from-white via-white to-white/50 pb-2">
            Our Projects
          </h1>
          <p className="text-muted-gray text-lg md:text-xl max-w-2xl mx-auto font-light">
            Explore our portfolio of innovative solutions and transformative digital experiences.
          </p>
        </div>

        {/* Projects Grid (Desktop) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((slotIndex) => {
            const content = getSlotContent(slotIndex);
            
            if (content.type === "hidden") return null;

            return (
              <div
                key={slotIndex}
                onClick={() => {
                  if (content.type === "thumbnail" && content.project) {
                    setActiveId(activeId === content.project.id ? null : content.project.id);
                  }
                }}
                className={`relative group h-75 rounded-3xl border transition-all duration-500 overflow-hidden 
                ${content.colSpan === 2 ? "lg:col-span-2 md:col-span-2" : "col-span-1"} 
                ${
                  content.type === "video"
                    ? "border-electric-blue shadow-[0_0_30px_rgba(58,134,255,0.3)] bg-black z-20 scale-[1.02]"
                    : content.type === "overview" || content.type === "functions"
                    ? "border-white/20 bg-white/5 backdrop-blur-md z-10 scale-[1.01]"
                    : content.dimmed
                    ? "border-white/5 bg-white/5 opacity-30 blur-[1px] grayscale cursor-default"
                    : "border-white/10 bg-black/40 hover:border-white/30 hover:bg-white/5 cursor-pointer"
                }`}
              >
                {/* RENDER CONTENT BASED ON TYPE */}
                
                {/* 1. THUMBNAIL STATE */}
                {content.type === "thumbnail" && content.project && (
                  <div className="w-full h-full flex flex-col justify-between p-6">
                    {/* Placeholder Video Thumb/Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50">
                       <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white fill-white ml-1" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                       </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                       <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white/50 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                       </div>
                    </div>

                    <div className="mt-auto z-10 relative">
                        <div className="text-xs font-bold text-electric-blue mb-1 tracking-widest uppercase">
                            {content.project.category}
                        </div>
                        <h3 className="font-heading font-bold text-xl uppercase tracking-wide">
                            {content.project.title}
                        </h3>
                    </div>
                  </div>
                )}

                {/* 2. VIDEO STATE */}
                {content.type === "video" && content.project && (
                  <div className="w-full h-full bg-carbon-black relative flex items-center justify-center animate-fadeIn">
                     {/* Close Button */}
                     <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveId(null);
                        }}
                        className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                     >
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                     </button>
                     
                     {getVideoSrc(content.project.id) ? (
                        <div className="w-full h-full relative group flex items-center justify-center">
                            {/* Loading Spinner */}
                            {(loadingVideos[content.project.id] ?? true) && (
                                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/80">
                                    <div className="w-10 h-10 border-2 border-electric-blue border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}
                            <video
                                className={`w-full h-full object-cover transition-opacity duration-500 ${(loadingVideos[content.project.id] ?? true) ? 'opacity-0' : 'opacity-100'}`}
                                src={getVideoSrc(content.project.id)!}
                                autoPlay
                                loop
                                muted
                                playsInline
                                draggable={false}
                                onLoadStart={() => handleVideoLoadStart(content.project.id)}
                                onLoadedData={() => handleVideoLoaded(content.project.id)}
                                onWaiting={() => handleVideoLoadStart(content.project.id)}
                                onPlaying={() => handleVideoLoaded(content.project.id)}
                            />
                            <div className="absolute inset-0 bg-linear-to-br from-electric-blue/10 to-transparent pointer-events-none mix-blend-overlay z-10"></div>
                        </div>
                     ) : (
                        /* Video Placeholder */
                        <div className="w-full h-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-br from-electric-blue/5 to-soft-neon-pink/5 z-0"></div>
                            
                            <div className="flex flex-col items-center justify-center gap-4 relative z-20 px-8 text-center">
                                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(58,134,255,0.2)]">
                                    <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Coming Soon</h3>
                                    <p className="text-sm text-gray-400">Media content for {content.project.title} is currently in production.</p>
                                </div>
                            </div>
                        </div>
                     )}
                  </div>
                )}

                {/* 3. OVERVIEW STATE */}
                {content.type === "overview" && content.project && (
                  <div className="w-full h-full p-8 flex flex-col animate-fadeInUp overflow-y-auto custom-scrollbar">
                      <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4 shrink-0">
                        Project Overview
                      </h4>
                      <p className="text-lg leading-relaxed text-white/90 font-light mb-4 text-justify">
                        {content.project.overview}
                      </p>
                      {/* 
                      <div className="mt-auto flex flex-wrap gap-2 shrink-0 pb-2">
                         {content.project.techStack.map((tech) => (
                             <span key={tech} className="text-xs px-2 py-1 rounded bg-white/10 text-white/70 border border-white/5">
                                 {tech}
                             </span>
                         ))}
                      </div> 
                      */}
                  </div>
                )}

                {/* 4. FUNCTIONS STATE */}
                {content.type === "functions" && content.project && (
                  <div className="w-full h-full p-8 flex flex-col animate-fadeInUp overflow-y-auto custom-scrollbar">
                       <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4 shrink-0">
                        Project Functions
                      </h4>
                      <ul className="space-y-3 pb-2">
                        {content.project.functions.map((func, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-soft-neon-pink shrink-0"></div>
                                <span>{func}</span>
                            </li>
                        ))}
                      </ul>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Projects Stack (Mobile) */}
        <div className="flex md:hidden flex-col gap-8">
           {projects.map((project) => {
             // Optional: Filter out placeholders if desired, but for now we render all.
             // Special styling for "Coming Soon" projects could be added here.
             const isComingSoon = project.title === "COMING SOON";
             
             if (isComingSoon) {
                 return (
                    <div key={project.id} className="relative w-full bg-[#090909] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-8 flex flex-col items-center justify-center text-center gap-4 min-h-75">
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                            <svg className="w-6 h-6 text-white/50" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                            </svg>
                        </div>
                        <h3 className="font-heading font-bold text-2xl uppercase tracking-wide text-white">Coming Soon</h3>
                        <p className="text-sm text-gray-400 max-w-xs">More innovative projects are currently in development.</p>
                    </div>
                 );
             }

             return (
             <div key={project.id} className="relative w-full bg-[#090909] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                 {/* 1. Header & Video Section */}
                 <div className="p-6 pb-2">
                     <div className="text-xs font-bold text-electric-blue mb-2 tracking-widest uppercase">{project.category}</div>
                     <h3 className="font-heading font-bold text-3xl uppercase tracking-wide text-white mb-6">{project.title}</h3>
                     
                     {/* Video Player or Placeholder */}
                     <div className="w-full aspect-video bg-carbon-black rounded-xl relative overflow-hidden flex items-center justify-center border border-white/5">
                        {getVideoSrc(project.id) ? (
                            <>
                                {/* Loading Spinner */}
                                {(loadingVideos[project.id] ?? true) && (
                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/80">
                                        <div className="w-8 h-8 border-2 border-electric-blue border-t-transparent rounded-full animate-spin"></div>
                                    </div>
                                )}
                                <video
                                    className={`w-full h-full object-cover transition-opacity duration-500 ${(loadingVideos[project.id] ?? true) ? 'opacity-0' : 'opacity-100'}`}
                                    src={getVideoSrc(project.id)!}
                                    controls
                                    muted
                                    loop
                                    playsInline
                                    draggable={false}
                                    onLoadStart={() => handleVideoLoadStart(project.id)}
                                    onLoadedData={() => handleVideoLoaded(project.id)}
                                    onWaiting={() => handleVideoLoadStart(project.id)}
                                    onPlaying={() => handleVideoLoaded(project.id)}
                                />
                            </>
                        ) : (
                            <>
                                <div className="absolute inset-0 bg-linear-to-br from-electric-blue/10 to-transparent"></div>
                                <div className="flex flex-col items-center justify-center gap-2 relative z-20">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(58,134,255,0.2)]">
                                        <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-xs text-white/50 font-bold tracking-wider">PREVIEW</span>
                                </div>
                            </>
                        )}
                     </div>
                 </div>

                 {/* 2. Overview Section */}
                 <div className="px-6 py-4">
                     <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Overview</h4>
                     <p className="text-sm text-gray-300 leading-relaxed text-justify">
                        {project.overview}
                     </p>
                 </div>

                 {/* 3. Functions Section */}
                 <div className="px-6 py-4 pb-8 bg-white/5 border-t border-white/5">
                     <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Key Functions</h4>
                     <ul className="space-y-2">
                        {project.functions.slice(0, 5).map((func, i) => (
                            <li key={i} className="flex items-start gap-3 text-xs text-gray-400">
                                <div className="w-1 h-1 rounded-full bg-soft-neon-pink mt-1.5 shrink-0"></div>
                                <span className="leading-snug">{func}</span>
                            </li>
                        ))}
                        {project.functions.length > 5 && (
                             <li className="text-[10px] text-white/30 italic pt-1">+ {project.functions.length - 5} more features</li>
                        )}
                      </ul>
                 </div>
             </div>
           )})}
        </div>
      </div>
    </div>
  );
}
