"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student");
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const [otherRole, setOtherRole] = useState("");

  const [messageType, setMessageType] = useState("Inquiry");
  const [isTypeLocked, setIsTypeLocked] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const searchParams = useSearchParams();
  const messageRef = useRef<HTMLDivElement>(null);

  const roles = [
    "Student",
    "Private Employee (Company)",
    "Public Employee (Gov't)",
    "Businessman",
    "Others",
  ];
  
  const types = ["Inquiry", "Concern", "Feedback", "Partnership", "Client"];

  // Click outside listener for dropdowns
  const roleRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle URL Params
    const subject = searchParams.get("subject");
    const tier = searchParams.get("tier");

    if (subject === "Client") {
      setMessageType("Client");
      setIsTypeLocked(true);
    }
    
    if (tier && messageRef.current) {
      if (messageRef.current.innerHTML === "") {
        messageRef.current.innerHTML = `Dear Chrysalis Team,<br><br>I am writing to express my interest in the <b>${tier} Plan</b> for my organization, <b>[Company Name]</b>.<br><br>We are looking to develop a <b>[Project Type, e.g., Web Application]</b> that aims to <b>[Brief Goal/Objective]</b>.<br><br>I would appreciate a discussion regarding the timeline, scope, and next steps.<br><br>Best regards,<br><b>[Your Name]</b>`;
      }
    }
  }, [searchParams]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (roleRef.current && !roleRef.current.contains(target)) {
        setIsRoleOpen(false);
      }
      if (typeRef.current && !typeRef.current.contains(target)) {
        setIsTypeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    if (role === 'Others' && !otherRole.trim()) newErrors.otherRole = 'Please specify your role';
    
    const messageText = messageRef.current?.innerText?.trim() || '';
    if (!messageText) newErrors.message = 'Message is required';
    
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const messageText = messageRef.current?.innerText || '';
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          role,
          otherRole,
          messageType,
          message: messageText,
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        // Reset form
        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');
        setRole('Student');
        setOtherRole('');
        setMessageType('Inquiry');
        if (messageRef.current) messageRef.current.innerHTML = '';
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        if (data.errors) {
          const errorObj: {[key: string]: string} = {};
          data.errors.forEach((err: string) => {
            errorObj.general = err;
          });
          setErrors(errorObj);
        }
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
      setErrors({ general: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen pt-24 pb-20 px-6 flex flex-col items-center justify-center text-white font-body selection:bg-neon-cyan selection:text-carbon-black bg-transparent">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold font-heading bg-clip-text text-transparent bg-linear-to-br from-white via-white to-white/50 pb-2">
            Lets Have a Chat 
          </h1>
          <p className="text-muted-gray text-lg md:text-xl max-w-2xl mx-auto font-light">
            Questions about our products/services, orders, or just want to say hello? We're here to help.
          </p>
        </div>

        {/* Form Container */}
        <div className="relative group w-full">
          {/* Gradient Glow */}
          <div className="absolute -inset-1 bg-linear-to-r from-neon-cyan via-electric-blue to-neon-violet rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-carbon-black p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* First Name */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-white/90">First name</label>
              <input 
                type="text" 
                placeholder="Jonathan"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`w-full bg-deep-charcoal border rounded-lg px-4 py-3 text-white placeholder:text-muted-gray/50 focus:outline-none focus:ring-1 transition-colors ${
                  errors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-electric-blue focus:ring-electric-blue'
                }`}
              />
              {errors.firstName && <span className="text-red-400 text-xs">{errors.firstName}</span>}
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-white/90">Last name</label>
              <input 
                type="text" 
                placeholder="James"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`w-full bg-deep-charcoal border rounded-lg px-4 py-3 text-white placeholder:text-muted-gray/50 focus:outline-none focus:ring-1 transition-colors ${
                  errors.lastName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-electric-blue focus:ring-electric-blue'
                }`}
              />
              {errors.lastName && <span className="text-red-400 text-xs">{errors.lastName}</span>}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-white/90">Phone number</label>
              <input 
                type="tel" 
                placeholder="+1 234 567 890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full bg-deep-charcoal border rounded-lg px-4 py-3 text-white placeholder:text-muted-gray/50 focus:outline-none focus:ring-1 transition-colors ${
                  errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-electric-blue focus:ring-electric-blue'
                }`}
              />
              {errors.phone && <span className="text-red-400 text-xs">{errors.phone}</span>}
            </div>

             {/* Role Dropdown */}
             <div className="flex w-full gap-3">
              <div className="w-full flex flex-col gap-3 relative z-30" ref={roleRef}>
                <label className="text-sm font-medium text-white/90">You are a...</label>
                <div 
                  onClick={() => setIsRoleOpen(!isRoleOpen)}
                  className={`w-full gap-2 bg-deep-charcoal border border-white/10 rounded-lg px-4 py-3 text-white flex items-center justify-between cursor-pointer transition-colors ${isRoleOpen ? 'border-electric-blue ring-1 ring-electric-blue' : 'hover:border-white/30'}`}
                >
                  <span>{role}</span>
                  <span className={`text-muted-gray text-xs transition-transform duration-300 ${isRoleOpen ? 'rotate-180 text-electric-blue' : ''}`}>▼</span>
                </div>

                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 w-full mt-2 bg-deep-charcoal border border-white/10 rounded-lg shadow-xl overflow-hidden transition-all duration-300 origin-top z-40 ${isRoleOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                    {roles.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setRole(option);
                          setIsRoleOpen(false);
                        }}
                        className={`px-4 py-3 text-sm cursor-pointer transition-colors ${
                          role === option
                            ? "bg-electric-blue/10 text-electric-blue"
                            : "text-muted-gray hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {option}
                      </div>
                    ))}
                </div>
              </div>
              {role === "Others" && (
                <div className="flex flex-col w-full gap-3 animate-fadeIn">
                  <label className="text-sm font-medium text-white/90">Specify</label>
                  <input 
                      type="text" 
                      placeholder="Specify your status"
                      value={otherRole}
                      onChange={(e) => setOtherRole(e.target.value)}
                      className={`w-full bg-deep-charcoal border rounded-lg px-4 py-3 text-white placeholder:text-muted-gray/50 focus:outline-none focus:ring-1 transition-colors ${
                        errors.otherRole ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-electric-blue focus:ring-electric-blue'
                      }`}
                  />
                  {errors.otherRole && <span className="text-red-400 text-xs">{errors.otherRole}</span>}
                  </div>
              )}
             </div>

            {/* Empty Div for Grid Alignment if Others is NOT selected on desktop, or simple conditional handling */}
            {/* If Others is selected, we need an input. If not, this space is empty or the next items flow up. 
                The grid flows row by row. 
                Lets place "Specify" in the next slot if needed.
            */}


            {/* Message Type (Subject) - Spans full width or half? Prompt said "Add another field before Message".
                In the grid, we are at 5 or 6 items. 
                If role != others: 5 items. Next item will be on right side.
                If role == others: 6 items. Next item(Subject) on left side new row.
                Let's make Subject and Message span full width for better layout.
             */}
            
            <div className={`col-span-1 md:col-span-2 flex flex-col gap-3 relative z-20`} ref={typeRef}>
              <label className="text-sm font-medium text-white/90">Subject</label>
              <div 
                onClick={() => !isTypeLocked && setIsTypeOpen(!isTypeOpen)}
                className={`w-full bg-deep-charcoal border border-white/10 rounded-lg px-4 py-3 text-white flex items-center justify-between cursor-pointer transition-colors ${
                  isTypeOpen ? 'border-electric-blue ring-1 ring-electric-blue' : isTypeLocked ? 'opacity-80 cursor-default' : 'hover:border-white/30'
                }`}
              >
                <span>{messageType}</span>
                {!isTypeLocked && (
                 <span className={`text-muted-gray text-xs transition-transform duration-300 ${isTypeOpen ? 'rotate-180 text-electric-blue' : ''}`}>▼</span>
                )}
              </div>

               {/* Dropdown Menu */}
               <div className={`absolute top-full left-0 w-full mt-2 bg-deep-charcoal border border-white/10 rounded-lg shadow-xl overflow-hidden transition-all duration-300 origin-top z-40 ${isTypeOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  {types.map((option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setMessageType(option);
                        setIsTypeOpen(false);
                      }}
                       className={`px-4 py-3 text-sm cursor-pointer transition-colors ${
                        messageType === option
                          ? "bg-electric-blue/10 text-electric-blue"
                          : "text-muted-gray hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {option}
                    </div>
                  ))}
              </div>
            </div>


            {/* Message */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-3">
              <label className="text-sm font-medium text-white/90">Message</label>
              <div 
                ref={messageRef}
                contentEditable={true}
                suppressContentEditableWarning={true}
                className={`w-full min-h-37.5 bg-deep-charcoal border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 transition-colors overflow-y-auto empty:before:content-[attr(data-placeholder)] empty:before:text-muted-gray/50 cursor-text ${
                  errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-electric-blue focus:ring-electric-blue'
                }`}
                data-placeholder="Hey i have some issues activating my account..."
                role="textbox"
                aria-multiline="true"
              />
              {errors.message && <span className="text-red-400 text-xs">{errors.message}</span>}
            </div>

            {/* Send Button */}
            <div className="col-span-1 md:col-span-2 mt-4">
                 {/* Status Messages */}
                 {submitStatus === 'success' && (
                   <div className="mb-4 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                     ✓ Message sent successfully! We'll get back to you soon.
                   </div>
                 )}
                 {submitStatus === 'error' && (
                   <div className="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                     {errors.general || 'Failed to send message. Please try again.'}
                   </div>
                 )}
                 
                 <button 
                   onClick={handleSubmit}
                   disabled={isSubmitting}
                   className="w-full relative group p-px rounded-full bg-linear-to-r from-electric-blue to-soft-neon-pink overflow-hidden transition-shadow duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                    <div className="relative w-full py-4 rounded-full bg-carbon-black flex items-center justify-center gap-3 transition-all duration-300 group-hover:bg-carbon-black/80">
                        {/* Butterfly Icon SVG */}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-6 h-6 group-hover:scale-110 transition-transform text-white rotate-180"
                        >
                          <path
                            d="M12 8C12 8 8 2.5 5 5C2 7.5 5 11 5 11C5 11 2 12 2 15C2 18 5 20 8 18C11 16.6 12 14 12 14"
                            stroke="url(#butterfly_gradient_btn)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 8C12 8 16 2.5 19 5C22 7.5 19 11 19 11C19 11 22 12 22 15C22 18 19 20 16 18C13 16.6 12 14 12 14"
                            stroke="url(#butterfly_gradient_btn)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 5V19"
                            stroke="url(#butterfly_gradient_btn)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="butterfly_gradient_btn"
                              x1="2"
                              y1="5"
                              x2="22"
                              y2="20"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#3A86FF" />
                              <stop offset="1" stopColor="#FF4ECD" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <span className="font-bold text-lg bg-clip-text text-transparent bg-linear-to-r from-electric-blue to-soft-neon-pink group-hover:opacity-90 transition-opacity">
                           {isSubmitting ? 'Sending...' : 'Send message'}
                        </span>
                    </div>
                 </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen w-full bg-carbon-black" />}>
      <ContactForm />
    </Suspense>
  );
}
