"use client";

import { useState, useRef } from "react";

export default function PricingPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [isProjectTypeOpen, setIsProjectTypeOpen] = useState(false);

  const [timeline, setTimeline] = useState("");
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const companyTypes = [
    "Student",
    "Private Employee (Company)",
    "Public Employee (Gov't)",
    "Businessman",
    "Others",
  ];

  const projectTypes = [
    "Business Website",
    "E-Commerce Platform",
    "Web Application",
    "Mobile Application",
    "AI-Powered System",
    "Custom Software",
    "Other",
  ];

  const timelines = [
    "Less than 1 month",
    "1 – 3 months",
    "3 – 6 months",
    "6 – 12 months",
    "Flexible / Not sure",
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email format";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    if (!projectType) newErrors.projectType = "Please select a project type";
    const messageText = messageRef.current?.innerText?.trim() || "";
    if (!messageText) newErrors.message = "Please describe your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const messageText = messageRef.current?.innerText || "";

      // Build a structured message for the email API
      const structuredMessage = [
        `[INQUIRY FROM PRICING PAGE]`,
        ``,
        `Project Type: ${projectType}`,
  
        `Timeline: ${timeline || "Not specified"}`,
        `Select a role: ${company || "Not specified"}`,
        ``,
        `Project Details:`,
        messageText,
      ].join("\n");

      // Split fullName into first/last for the existing API
      const nameParts = fullName.trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "-";

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          role: "Client",
          otherRole: "",
          messageType: "Client",
          message: structuredMessage,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFullName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setProjectType("");
        setTimeline("");
        if (messageRef.current) messageRef.current.innerHTML = "";
        setTimeout(() => setSubmitStatus("idle"), 6000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
      setErrors({ general: "Failed to send. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reusable custom dropdown component
  const Dropdown = ({
    label,
    value,
    isOpen,
    setIsOpen,
    options,
    onSelect,
    placeholder,
    error,
  }: {
    label: string;
    value: string;
    isOpen: boolean;
    setIsOpen: (v: boolean) => void;
    options: string[];
    onSelect: (v: string) => void;
    placeholder: string;
    error?: string;
  }) => (
    <div className="flex flex-col gap-2 relative">
      <label className="text-sm font-medium text-white/90">{label}</label>
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`w-full bg-deep-charcoal border rounded-lg px-4 py-3 text-left flex items-center justify-between transition-colors ${
          error
            ? "border-red-500"
            : isOpen
              ? "border-electric-blue ring-1 ring-electric-blue"
              : "border-white/10 hover:border-white/20"
        }`}
      >
        <span className={value ? "text-white" : "text-muted-gray/50"}>{value || placeholder}</span>
        <svg
          className={`w-4 h-4 text-muted-gray transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-deep-charcoal border border-white/10 rounded-lg overflow-hidden z-50 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onSelect(opt);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                value === opt
                  ? "bg-electric-blue/20 text-electric-blue"
                  : "text-white/80 hover:bg-white/5 hover:text-white"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
      {error && <span className="text-red-400 text-xs">{error}</span>}
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-carbon-black text-white pt-24 pb-20 overflow-x-hidden">
      {/* Background Gradient Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-125 h-125 bg-electric-blue/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-150 h-150 bg-soft-neon-pink/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[50%] left-[60%] w-100 h-100 bg-neon-violet/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold font-heading bg-clip-text text-transparent bg-linear-to-br from-white via-white to-white/50 pb-2">
            Let&apos;s Discuss
          </h1>
          <p className="text-muted-gray text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We understand that every client has unique needs, which is why our pricing is tailored according to your specific requirements and project scope. Tell us about your project and we&apos;ll provide a personalized quotation.
          </p>
        </div>

        {/* Form Card */}
        <div className="relative group w-full">
          {/* Gradient Glow */}
          <div className="absolute -inset-1 bg-linear-to-r from-electric-blue via-neon-violet to-soft-neon-pink rounded-3xl blur opacity-20 group-hover:opacity-35 transition duration-1000"></div>

          <div className="relative bg-carbon-black p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm">

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="mb-8 p-5 rounded-xl bg-aurora-green/10 border border-aurora-green/30 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-aurora-green/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-aurora-green font-bold text-sm">Inquiry Sent Successfully!</p>
                  <p className="text-aurora-green/70 text-xs mt-1">We&apos;ll review your project details and get back to you within 24–48 hours.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="mb-8 p-5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-red-400 font-bold text-sm">Something went wrong</p>
                  <p className="text-red-400/70 text-xs mt-1">{errors.general || "Please try again later."}</p>
                </div>
              </div>
            )}

            {/* Section Label */}
            <div className="flex items-center gap-3 mb-8">
            
              <h2 className="text-sm font-bold text-white/50 uppercase tracking-widest">Your Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/90">Full Name <span className="text-soft-neon-pink"></span></label>
                <input
                  type="text"
                  placeholder="Jonathan James"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full bg-deep-charcoal border rounded-lg px-4 py-3 text-white placeholder:text-muted-gray/50 focus:outline-none focus:ring-1 transition-colors ${
                    errors.fullName ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-white/10 focus:border-electric-blue focus:ring-electric-blue"
                  }`}
                />
                {errors.fullName && <span className="text-red-400 text-xs">{errors.fullName}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/90">Email Address <span className="text-soft-neon-pink"></span></label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-deep-charcoal border rounded-lg px-4 py-3 text-white placeholder:text-muted-gray/50 focus:outline-none focus:ring-1 transition-colors ${
                    errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-white/10 focus:border-electric-blue focus:ring-electric-blue"
                  }`}
                />
                {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/90">Phone Number <span className="text-soft-neon-pink"></span></label>
                <input
                  type="tel"
                  placeholder="0917 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full bg-deep-charcoal border rounded-lg px-4 py-3 text-white placeholder:text-muted-gray/50 focus:outline-none focus:ring-1 transition-colors ${
                    errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-white/10 focus:border-electric-blue focus:ring-electric-blue"
                  }`}
                />
                {errors.phone && <span className="text-red-400 text-xs">{errors.phone}</span>}
              </div>

              {/* Company / Role */}
              <Dropdown
                label="Select role"
                value={company}
                isOpen={isCompanyOpen}
                setIsOpen={(v) => {
                  setIsCompanyOpen(v);
                  setIsProjectTypeOpen(false);
                  setIsTimelineOpen(false);
                }}
                options={companyTypes}
                onSelect={setCompany}
                placeholder="Choose your role"
              />
            </div>

            {/* Divider + Section Label */}
            <div className="border-t border-white/5 pt-10 mb-8">
              <div className="flex items-center gap-3 mb-8">
                
                <h2 className="text-sm font-bold text-white/50 uppercase tracking-widest">Project Details</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Project Type */}
              <Dropdown
                label="Project Type"
                value={projectType}
                isOpen={isProjectTypeOpen}
                setIsOpen={(v) => {
                  setIsProjectTypeOpen(v);
                  setIsCompanyOpen(false);
                  setIsTimelineOpen(false);
                }}
                options={projectTypes}
                onSelect={setProjectType}
                placeholder="Select type"
                error={errors.projectType}
              />

              {/* Timeline */}
              <Dropdown
                label="Expected Timeline"
                value={timeline}
                isOpen={isTimelineOpen}
                setIsOpen={(v) => {
                  setIsTimelineOpen(v);
                  setIsProjectTypeOpen(false);
                  setIsCompanyOpen(false);
                }}
                options={timelines}
                onSelect={setTimeline}
                placeholder="Select timeline"
              />
            </div>

            {/* Message / Project Description */}
            <div className="flex flex-col gap-2 mb-10">
              <label className="text-sm font-medium text-white/90">
                Tell us about your project
              </label>
              <div
                ref={messageRef}
                contentEditable
                data-placeholder="Describe your project goals, features you need, target audience, or any specific requirements..."
                className={`w-full min-h-40 bg-deep-charcoal border rounded-lg px-4 py-3 text-white text-sm leading-relaxed focus:outline-none focus:ring-1 transition-colors empty:before:content-[attr(data-placeholder)] empty:before:text-muted-gray/50 ${
                  errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-white/10 focus:border-electric-blue focus:ring-electric-blue"
                }`}
              />
              {errors.message && <span className="text-red-400 text-xs">{errors.message}</span>}
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="group relative w-full md:w-auto px-12 py-4 rounded-xl bg-linear-to-r from-electric-blue to-soft-neon-pink text-white font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_40px_rgba(58,134,255,0.4)] transition-all duration-500 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  Send Inquiry
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
