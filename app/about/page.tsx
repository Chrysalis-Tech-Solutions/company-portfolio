import Image from "next/image";
import { title } from "process";

export default function AboutPage() {
  return (
    <div className="w-full text-white pt-24 pb-20">
      {/* Section 1: Hero / Introduction */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-8">
            <p className="text-sm text-muted-gray max-w-sm leading-relaxed">
              Innovation is not just about technology — it's about the people, the purpose, and the progress we create together.
            </p>
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold font-heading leading-none tracking-tight">
                ABOUT
                <span className="flex items-center gap-6 text-transparent bg-clip-text bg-linear-to-r from-electric-blue to-soft-neon-pink">
                  <div className="w-24 h-px bg-white/20"></div>
                  CHRYSALIS
                </span>
              </h1>
              
            </div>
            <p className="ml-auto text-right text-sm text-muted-gray max-w-sm leading-relaxed">
              Focused on building future-ready digital systems and intelligent platforms that drive transformation for the evolving digital world.
            </p>
          </div>

          {/* 3-Frame Masked Image */}
          <div className="relative h-125 w-full group">
            {/* Single Background Image with CSS Mask for "See Through" Effect */}
            <div 
              className="absolute inset-0 bg-[url('/about-us-intro-img.jpg')] bg-cover bg-fixed bg-center transition-all duration-700 ease-in-out"
              style={{
                maskImage: 'linear-gradient(black, black), linear-gradient(black, black), linear-gradient(black, black)',
                WebkitMaskImage: 'linear-gradient(black, black), linear-gradient(black, black), linear-gradient(black, black)',
                maskSize: '32.5% 100%, 32.5% 90%, 32.5% 100%',
                WebkitMaskSize: '32.5% 100%, 32.5% 90%, 32.5% 100%',
                maskPosition: '0 center, 50% center, 100% center',
                WebkitMaskPosition: '0 center, 50% center, 100% center',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat'
              }}
            >
               {/* Gradient overlay inside the masked areas */}
               <div className="absolute inset-0 bg-linear-to-br from-electric-blue/30 via-neon-violet/20 to-soft-neon-pink/30 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>

            {/* Frame Borders Overlay */}
            <div className="absolute inset-0 w-full h-full flex justify-between items-center pointer-events-none">
                <div className="w-[32.5%] h-full border border-white/10 rounded-lg"></div>
                <div className="w-[32.5%] h-[90%] border border-white/10 rounded-lg"></div>
                <div className="w-[32.5%] h-full border border-white/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 mb-32 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
          {/* Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-4xl font-heading uppercase text-white">Mission</h3>
              <div className="h-px flex-1 bg-linear-to-r from-electric-blue/50 to-transparent shadow-[0_0_8px_rgba(58,134,255,0.4)]"></div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-neon-cyan via-electric-blue to-neon-violet rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-8 rounded-2xl bg-[#090909] border border-white/5 hover:border-electric-blue/30 transition-colors">
                <p className="text-lg text-muted-gray leading-relaxed">
                  To design and deliver intelligent, future-ready digital solutions that empower organizations, cities, and communities to grow, adapt, and thrive in a rapidly evolving world through innovation, collaboration, and transformative technology.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-6 md:mt-24">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-4xl font-heading uppercase text-white">Vision</h3>
              <div className="h-px flex-1 bg-linear-to-r from-soft-neon-pink/50 to-transparent shadow-[0_0_10px_rgba(255,78,205,0.4)]"></div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-soft-neon-pink to-neon-violet rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-8 rounded-2xl bg-[#090909] border border-white/5 hover:border-soft-neon-pink/30 transition-colors">
                <p className="text-lg text-muted-gray leading-relaxed">
                  To become a leading technology company that drives digital transformation across industries by building adaptive systems, smart platforms, and intelligent infrastructure that shape a smarter, safer, and more connected future.
                </p>
              </div>
            </div>
          </div>

          {/* Central Decorative Line (Vertical on Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
        </div>
      </section>

      {/* Section 4: Core Values */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h3 className="text-4xl font-heading uppercase text-white">OUR CORE VALUES</h3>
          <div className="h-px flex-1 bg-linear-to-r from-electric-blue via-soft-neon-pink to-transparent shadow-[0_0_6px_rgba(58,134,255,0.3)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Transformation", 
              desc: "We believe technology should create meaningful change. We build systems that evolve, adapt, and transform the way organizations and communities operate.",
              icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3A86FF"/><stop offset="100%" stopColor="#FF4ECD"/></linearGradient></defs><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.636 5.636l2.122 2.122m8.484 8.484l2.122 2.122M5.636 18.364l2.122-2.122m8.484-8.484l2.122-2.122"/><circle cx="12" cy="12" r="4"/></svg>
            },
            { 
              title: "Innovation", 
              desc: "We continuously explore new ideas, technologies, and approaches to create forward-thinking solutions that solve real-world problems.",
              icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="url(#grad2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3A86FF"/><stop offset="100%" stopColor="#FF4ECD"/></linearGradient></defs><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
            },
            { 
              title: "Integrity", 
              desc: "We operate with honesty, transparency, and accountability in every partnership, project, and decision we make.",
              icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="url(#grad3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3A86FF"/><stop offset="100%" stopColor="#FF4ECD"/></linearGradient></defs><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            },
            { 
              title: "Collaboration", 
              desc: "We grow through partnership — with our clients, communities, and teams — because the best solutions are built together.",
              icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="url(#grad4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3A86FF"/><stop offset="100%" stopColor="#FF4ECD"/></linearGradient></defs><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            },
            { 
              title: "Excellence", 
              desc: "We commit to the highest standards of quality, performance, and reliability in everything we design and deliver.",
              icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="url(#grad5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3A86FF"/><stop offset="100%" stopColor="#FF4ECD"/></linearGradient></defs><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
            },
            { 
              title: "Future-Readiness", 
              desc: "We build for tomorrow, creating systems that are scalable, resilient, and prepared for constant technological change.",
              icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="url(#grad6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3A86FF"/><stop offset="100%" stopColor="#FF4ECD"/></linearGradient></defs><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            },
          ].map((value, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-deep-charcoal border border-white/5 hover:bg-white/5 hover:border-electric-blue/50 transition-all duration-300">
              <div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold font-heading mb-4 text-electric-blue group-hover:text-soft-neon-pink transition-colors">
                {value.title}
              </h4>
              <p className="text-sm text-muted-gray leading-relaxed group-hover:text-white transition-colors">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
