"use client";

import { useState } from "react";
import Link from "next/link";

type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  gradient: string;
  popular?: boolean;
};

const pricingTiers: PricingTier[] = [
  {
    name: "BASIC",
    price: "₱10,000 - ₱30,000",
    description:
      "Perfect for individuals and small businesses starting their digital journey.",
    gradient: "from-gray-400 to-gray-600",
    features: [
      "Custom UI design (modern, responsive layout)",
      "Mobile & desktop optimization",
      "Static frontend development",
      "Up to 5 pages",
      "Basic animations & transitions",
      "Contact form integration",
      "Social media links integration",
      "SEO-friendly structure (basic on-page SEO)",
      "Performance optimization (fast loading)",
      "Browser compatibility",
      "Basic accessibility compliance",
      "Hosting & domain connection support",
      "Deployment support",
      "Basic documentation",
      "1 revision cycle",
      "7-day post-launch support",
    ],
  },
  {
    name: "PREMIUM",
    price: "₱30,000 - ₱250,000",
    description:
      "Ideal for growing startups needing dynamic functionality and back-end integration.",
    gradient: "from-neon-cyan to-electric-blue",
    popular: true,
    features: [
      "UI/UX design system",
      "Frontend + Backend development",
      "Database integration",
      "Basic system architecture",
      "Authentication system (login/logout)",
      "Role-based access (basic roles)",
      "CRUD operations",
      "Admin dashboard",
      "Basic API development",
      "Email/SMS notification integration",
      "Data validation",
      "Basic analytics dashboard",
      "Cloud deployment setup",
      "Hosting configuration",
      "Security basics (auth, validation, access control)",
      "Mobile-responsive UI",
      "Basic documentation",
      "Testing & QA",
      "Staging environment",
      "Deployment support",
      "1-2 revision cycles",
      "30-day post-launch support",
    ],
  },
  {
    name: "PROFESSIONAL",
    price: "₱250,000 - ₱850,000",
    description:
      "Advanced solutions for businesses requiring scalable, element-rich digital ecosystems.",
    gradient: "from-electric-blue to-soft-neon-pink",
    features: [
      "System architecture design",
      "Modular system design",
      "Advanced UI/UX engineering",
      "Web + Mobile integration",
      "Multi-role user systems",
      "Complex databases",
      "Advanced API architecture",
      "Microservice-ready structure",
      "AI integration (pre-trained models / APIs)",
      "Intelligent automation features",
      "Real-time data processing",
      "Analytics dashboards",
      "Reporting systems",
      "Cloud infrastructure setup",
      "DevOps pipelines (CI/CD)",
      "Role-based access control (RBAC)",
      "Security architecture",
      "Data encryption",
      "System monitoring",
      "Backup systems",
      "Failover planning",
      "Integration with third-party systems",
      "Admin super-dashboard",
      "Documentation & training materials",
      "QA testing",
      "Performance testing",
      "Security testing",
      "Deployment automatio",
      "Multi-environment setup (dev/staging/prod)",
      "3–6 months support options",
    ],
  },
  {
    name: "ENTERPRISE",
    price: "LET'S DISCUSS IT",
    description:
      "Bespoke, mission-critical infrastructure for large-scale organizations.",
    gradient: "from-soft-neon-pink to-neon-violet",
    features: [
      "Enterprise system architecture",
      "Multi-system orchestration",
      "Interconnected platforms",
      "Data lake architecture",
      "AI/ML model development",
      "Custom NLP engines",
      "Model training pipelines",
      "MLOps infrastructure",
      "Blockchain network design",
      "Smart contract systems",
      "Distributed ledger architecture",
      "Identity systems",
      "Zero-trust security model",
      "Enterprise cybersecurity",
      "Compliance frameworks",
      "Governance models",
      "High-availability infrastructure",
      "Disaster recovery systems",
      "Redundancy architecture",
      "Load balancing",
      "Multi-cloud deployment",
      "Edge computing integration",
      "IoT integration",
      "Cross-platform systems",
      "API gateway systems",
      "Data governance",
      "Enterprise DevOps",
      "Inter-agency system integration",
      "AI governance & ethics framework",
      "System auditability",
      "Monitoring & observability platforms",
      "SOC integration",
      "Enterprise training programs",
      "Documentation frameworks",
      "Long-term support contracts",
      "Dedicated engineering teams",
      "SLA-based support",
      "System lifecycle management",
    ],
  },
];

export default function PricingPage() {
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  // Function to close modal
  const closeModal = () => setSelectedTier(null);

  return (
    <div className="min-h-screen w-full bg-carbon-black text-white pt-24 pb-20 overflow-x-hidden">
      {/* Background Gradient Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-125 h-125 bg-electric-blue/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-150 h-150 bg-soft-neon-pink/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Full Features Modal */}
      {selectedTier ? (
        <div className="fixed h-screen max-w-screen overflow-x-hidden inset-0 pt-20 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-[#090909] w-full lg:max-w-2xl max-h-[85vh] rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-fadeInUp">
            {/* Modal Header */}
            <div
              className={`p-5 lg:p-8 border-b border-white/10 bg-linear-to-r ${selectedTier.gradient} bg-opacity-10 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-carbon-black/80"></div>
              <div className="relative z-10 flex justify-between items-start">
                <div className="pb-20 lg:pb-0">
                  <h2
                    className={`text-3xl font-bold font-heading bg-clip-text text-transparent bg-linear-to-r ${selectedTier.gradient} mb-2`}
                  >
                    {selectedTier.name}
                  </h2>
                  <p className="text-white/80 font-medium">
                    {selectedTier.price}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-8 overflow-y-auto custom-scrollbar">
              <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-6">
                Full Inclusions List
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {selectedTier.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-linear-to-r ${selectedTier.gradient}`}
                    ></div>
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-white/10 bg-white/5 flex justify-end">
              <Link href="/contact" className="w-full sm:w-auto">
                <button
                  className={`w-full sm:w-auto px-8 py-3 rounded-lg text-sm font-bold bg-linear-to-r ${selectedTier.gradient} text-white hover:opacity-90 hover:shadow-lg transition-all transform active:scale-95`}
                >
                  Get Started with {selectedTier.name}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20 space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold font-heading bg-clip-text text-transparent bg-linear-to-br from-white via-white to-white/50 pb-2">
              Pricing Plans
            </h1>
            <p className="text-muted-gray text-lg md:text-xl max-w-2xl mx-auto font-light">
              Transparent pricing for projects of all sizes. Choose the plan
              that fits your vision and scale.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => {
              const isProfessional = tier.name === "PROFESSIONAL";
              const isEnterprise = tier.name === "ENTERPRISE";

              return (
                <div
                  key={index}
                  className={`relative flex flex-col p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 group hover:-translate-y-2 ${
                    isEnterprise
                      ? "border-soft-neon-pink/50 bg-linear-to-b from-[#1a0510] to-transparent shadow-[0_0_50px_rgba(255,78,205,0.15)] hover:shadow-[0_0_70px_rgba(255,78,205,0.3)] ring-1 ring-soft-neon-pink/20"
                      : isProfessional
                        ? "border-neon-violet/50 bg-linear-to-b from-[#0f0a1e] to-transparent shadow-[0_0_40px_rgba(123,97,255,0.1)] hover:shadow-[0_0_60px_rgba(123,97,255,0.2)]"
                        : tier.popular
                          ? "border-electric-blue/50 bg-linear-to-b from-electric-blue/10 to-transparent shadow-[0_0_30px_rgba(58,134,255,0.15)]"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
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

                  {/* Tier Name */}
                  <h3
                    className={`text-xl font-bold font-heading mb-2 tracking-wide uppercase ${isEnterprise ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "text-white/90"}`}
                  >
                    {tier.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <p
                      className={`text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r ${tier.gradient}`}
                    >
                      {tier.price}
                    </p>
                    {tier.price !== "LET'S DISCUSS IT" && (
                      <span className="text-xs text-muted-gray">
                        /project estimated
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm text-muted-gray mb-8 leading-relaxed min-h-15 ${tier.name === "ENTERPRISE" && "mt-14"}`}
                  >
                    {tier.description}
                  </p>

                  {/* CTA Button */}
                  <Link
                    href={{
                      pathname: "/contact",
                      query: { subject: "Client", tier: tier.name },
                    }}
                    className="mb-8 block w-full relative z-10"
                  >
                    <button
                      className={`w-full py-3 rounded-lg text-sm font-bold transition-all duration-300 border ${
                        isEnterprise
                          ? "bg-linear-to-r from-soft-neon-pink to-neon-violet text-white border-transparent hover:shadow-[0_0_20px_rgba(255,78,205,0.4)] hover:scale-105"
                          : isProfessional
                            ? "bg-neon-violet/20 text-white border-neon-violet/50 hover:bg-neon-violet/40 hover:shadow-[0_0_15px_rgba(123,97,255,0.3)]"
                            : tier.popular
                              ? "bg-electric-blue text-white border-electric-blue hover:bg-electric-blue/90 hover:shadow-[0_0_15px_rgba(58,134,255,0.4)]"
                              : "bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white/40"
                      }`}
                    >
                      Choose {tier.name}
                    </button>
                  </Link>

                  {/* Inclusions Head */}
                  <div className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">
                    Inclusions
                  </div>

                  {/* Features List (Top 5) */}
                  <ul className="space-y-4 mb-8 flex-1 relative z-10">
                    {tier.features.slice(0, 5).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-gray/90 group-hover:text-white/90 transition-colors"
                      >
                        <svg
                          className={`w-5 h-5 shrink-0 ${
                            isEnterprise
                              ? "text-soft-neon-pink drop-shadow-[0_0_5px_rgba(255,78,205,0.5)]"
                              : isProfessional
                                ? "text-neon-violet"
                                : tier.popular
                                  ? "text-electric-blue"
                                  : "text-white/50"
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* See More Button */}
                  <button
                    onClick={() => setSelectedTier(tier)}
                    className="w-full mt-auto py-2 text-xs font-medium text-white/50 hover:text-white transition-colors flex items-center justify-center gap-2 group/btn relative z-10"
                  >
                    See all inclusions
                    <svg
                      className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
