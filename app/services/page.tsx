"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function ServicesContent() {
  const searchParams = useSearchParams();
  const highlight = searchParams.get('highlight');

  useEffect(() => {
    if (highlight) {
      const element = document.getElementById(highlight);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('highlight-glow');
          setTimeout(() => element.classList.remove('highlight-glow'), 2000);
        }, 500); // Delay for page transition
      }
    }
  }, [highlight]);

  return (
    <div className="min-h-screen w-full bg-carbon-black text-white pt-24 pb-20 overflow-x-hidden">
       <style jsx global>{`
        @keyframes glowPulse {
          0% { box-shadow: 0 0 0 0 rgba(58, 134, 255, 0); border-color: rgba(255,255,255,0.1); }
          50% { box-shadow: 0 0 40px 0 rgba(58, 134, 255, 0.4); border-color: rgba(58, 134, 255, 0.8); }
          100% { box-shadow: 0 0 0 0 rgba(58, 134, 255, 0); border-color: rgba(255,255,255,0.1); }
        }
        .highlight-glow {
          animation: glowPulse 2s ease-in-out forwards;
        }
      `}</style>
       {/* Background Gradient Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-125 h-125 bg-electric-blue/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-150 h-150 bg-soft-neon-pink/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold font-heading bg-clip-text text-transparent bg-linear-to-br from-white via-white to-white/50 pb-2">
            Our Services
          </h1>
          <p className="text-muted-gray text-lg md:text-xl max-w-2xl mx-auto font-light">
            Comprehensive digital solutions designed to help your business grow and adapt.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.slug}
              className="group relative h-100 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:bg-white/10 hover:border-electric-blue/30 transition-all duration-500"
            >
              {/* Hover Gradient Bloom */}
              <div className="absolute -inset-0.5 bg-linear-to-br from-electric-blue/0 to-soft-neon-pink/0 group-hover:from-electric-blue/20 group-hover:to-soft-neon-pink/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
              
              <div className="relative h-full w-full p-8 flex flex-col justify-between z-10">
                {/* Number Badge */}
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-sm font-light text-white/60 group-hover:border-electric-blue group-hover:text-white transition-colors duration-300">
                  {service.id}
                </div>

                {/* Sub-services Tags (Visible at top right or floating? Let's keep them bottom or make them float) */}
                {/* Actually, user said "below" the description. But fitting all that at the bottom might be tight.
                    Let's utilize the empty space in the middle for a cool staggered list or just keep it simple below.
                */}
                
                <div className="mt-auto">
                  <h3 className="font-heading font-bold text-2xl uppercase tracking-wide mb-3 text-white group-hover:text-electric-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-gray text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4 group-hover:border-soft-neon-pink transition-colors">
                    {service.description}
                  </p>
                  
                  {/* Sub-services Pills */}
                  <div className="flex flex-wrap gap-2">
                    {service.subServices.map((sub, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/5 text-white/50 group-hover:bg-electric-blue/10 group-hover:text-electric-blue group-hover:border-electric-blue/20 transition-all"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    id: "01",
    slug: "web_development",
    title: "Web Development",
    description: "Robust digital platforms and CMS solutions tailored to scale with your business needs.",
    subServices: ["Websites", "Web Platforms", "CMS", "E-commerce", "Landing Pages"]
  },
  {
    id: "02",
    slug: "mobile_apps",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile experiences that engage users on any device.",
    subServices: ["iOS", "Android", "React Native", "UI/UX Design", "App Store Optimization"]
  },
  {
    id: "03",
    slug: "hybrid_systems",
    title: "Hybrid Systems",
    description: "Seamlessly integrated web and mobile ecosystems for unified business operations.",
    subServices: ["Real-time Sync", "Unified Database", "Cross-Platform", "Admin Dashboards"]
  },
  {
    id: "04",
    slug: "ai_systems",
    title: "AI Integrated Systems",
    description: "Intelligent automation and predictive analytics to drive smarter decision making.",
    subServices: ["Machine Learning", "Chatbots", "NLP", "Predictive Analytics", "Automation"]
  },
  {
    id: "05",
    slug: "collab_platforms",
    title: "Collaboration Platforms",
    description: "Custom tools designed to streamline team communication and project workflows.",
    subServices: ["Team Dashboards", "File Sharing", "Messaging", "Project Management", "Workflows"]
  }
];

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen w-full bg-carbon-black" />}>
      <ServicesContent />
    </Suspense>
  );
}
