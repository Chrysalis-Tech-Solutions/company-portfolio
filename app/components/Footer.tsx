"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Footer() {
  const [messageType, setMessageType] = useState("Inquiry");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inView, setInView] = useState(false);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const footerRef = useRef<HTMLElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    
    const messageText = messageRef.current?.innerText?.trim() || '';
    if (!messageText) newErrors.message = 'Message is required';
    
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
          firstName: 'Footer',
          lastName: 'Submission',
          phone: 'N/A',
          email,
          role: 'Website Visitor',
          otherRole: '',
          messageType,
          message: messageText,
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        setEmail('');
        if (messageRef.current) messageRef.current.innerHTML = '';
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        if (data.errors) {
          setErrors({ general: data.errors.join(', ') });
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
      <section ref={footerRef} className={`relative h-max z-10 w-full flex flex-col justify-between pt-10 bg-carbon-black border-t border-white/5 transition-all duration-1000 ease-out transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12">
          
          <div className="w-full col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: Pages */}
            <div className="flex flex-col gap-6">
              <h3 className="font-heading text-sm font-semibold text-muted-gray uppercase tracking-widest">
                Pages
              </h3>
              <nav className="flex flex-col gap-2 text-muted-gray text-sm font-body">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Projects", href: "/projects" },
                  { name: "Services", href: "/services" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:text-white transition-colors w-fit"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 2: Services */}
            <div className="flex flex-col gap-6">
              <h3 className="font-heading text-sm font-semibold text-muted-gray uppercase tracking-widest">
                Services
              </h3>
              <ul className="flex flex-col gap-2 text-muted-gray text-sm font-body">
                {[
                  { name: "Web Development", href: "/services?highlight=web_development" },
                  { name: "Mobile Application", href: "/services?highlight=mobile_apps" },
                  { name: "Hybrid Systems", href: "/services?highlight=hybrid_systems" },
                  { name: "AI Integrated Systems", href: "/services?highlight=ai_systems" },
                  { name: "Collaboration Platforms", href: "/services?highlight=collab_platforms" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:text-white transition-colors cursor-pointer w-fit"
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Form - Minimalist */}
          <div className="flex flex-col gap-6 col-span-1 md:col-span-2 lg:col-span-2 lg:pl-6 pt-8 md:pt-0">
            <h3 className="font-heading text-sm font-semibold text-muted-gray uppercase tracking-widest">
              Let's Connect
            </h3>

            <div className="flex flex-col gap-4">
              {/* Email Input */}
              <input 
                type="email"
                placeholder="EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full bg-transparent border-b border-white/10 text-sm px-0 py-3 text-white placeholder:text-muted-gray/30 focus:outline-none focus:border-electric-blue transition-colors ${
                  errors.email ? 'border-red-500/50' : ''
                }`}
              />
              
              {/* Type Dropdown */}
              <div className="relative z-20">
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full bg-transparent border-b text-sm px-0 py-3 text-white flex items-center justify-between cursor-pointer transition-colors ${isDropdownOpen ? 'border-electric-blue' : 'border-white/10 hover:border-white/30'}`}
                >
                  <span className={messageType === "Inquiry" ? "text-muted-gray/50" : "text-white"}>{messageType === "Inquiry" ? "SUBJECT" : messageType}</span>
                  <span className={`text-muted-gray text-[10px] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                </div>
                
                {/* Minimal Dropdown Menu */}
                <div className={`absolute top-full left-0 w-full mt-2 bg-deep-charcoal border border-white/10 rounded-sm shadow-2xl overflow-hidden transition-all duration-200 origin-top z-50 ${isDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                    {["Inquiry", "Feedback", "Concern", "Partnership"].map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setMessageType(option);
                          setIsDropdownOpen(false);
                        }}
                        className="px-4 py-3 text-xs uppercase tracking-wider cursor-pointer text-muted-gray hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {option}
                      </div>
                    ))}
                </div>
              </div>

              {/* Message Input */}
              <div
                ref={messageRef}
                contentEditable
                className={`w-full min-h-25 bg-transparent border-b border-white/10 px-0 py-3 text-sm text-white focus:outline-none focus:border-electric-blue transition-colors empty:before:content-[attr(data-placeholder)] empty:before:text-muted-gray/30 cursor-text ${
                  errors.message ? 'border-red-500/50' : ''
                }`}
                data-placeholder="YOUR MESSAGE"
                role="textbox"
                aria-multiline="true"
              />

              {/* Status */}
              {(errors.email || errors.message || submitStatus !== 'idle') && (
                <div className={`text-xs ${submitStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {submitStatus === 'success' ? 'Message sent.' : (errors.email || errors.message || errors.general)}
                </div>
              )}

              {/* Minimal Send Button */}
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="mt-2 w-fit px-0 py-2 text-sm font-medium uppercase tracking-widest text-white hover:text-electric-blue transition-colors disabled:opacity-50 flex items-center gap-2 group"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          <div className="w-full col-span-1 md:col-span-2 lg:col-span-5 flex flex-col md:flex-row justify-between items-center text-xs text-muted-gray gap-4 pt-8 border-t border-white/5 pb-8">
              <p>
                &copy; Chrysalis Tech — {new Date().getFullYear()}. All rights
                reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6 uppercase">
                <Link href="tel:+639104081839" className="hover:text-white transition-colors">
                  Phone
                </Link>
                <Link href="https://www.facebook.com/chrysalistechsolutions" className="hover:text-white transition-colors">
                  Facebook
                </Link>
                <Link href="mailto:chrysalistechsolutions@gmail.com" className="hover:text-white transition-colors">
                  Email
                </Link>
              </div>
            </div>
        </div>
        
        {/* Giant Text - Currently hidden/removed as per previous code reading showing it commented out 
            Actually it was in the code so let's keep it clean by removing it or keeping it as is 
            if it was commented out in the previous read.
            Wait, I need to clean up the 'mt-auto col-span-full' div that was nested inside the first column block which I removed/modified in the previous step.
            Ah, I see. In the previous replacement, I replaced the start of the section and the first block.
            The "mt-auto col-span-full" block was inside the first column div in the original code. 
            My new code for the first column div ended at line 125, but I didn't include the closing div for the first column div or the footer copyright section that was inside it.
            
            Let's check the structure again.
            Original:
            <div className="max-w-7xl ... grid ...">
               <div className="h-full w-full col-span-3 grid grid-cols-3">
                  <Col 1>
                  <Col 2>
                  <Col 3>
                  <div className="mt-auto col-span-full ..."> (Copyright & Socials) </div> 
               </div>
               <div className="... col-span-2 ..."> (Form) </div>
            </div>

            My replacement replaced from <div className="max-w-7xl ..."> down to <h3 ...>Send us a Message</h3>
            
            The first column div `class="w-full col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8"` 
            ends before `Column 4: Contact Form` starts.
            
            So the "Copyright & Socials" block that was inside the first column is now effectively GONE from the first column if I didn't include it.
            Wait, I did NOT include the `mt-auto col-span-full` block in the new first column div.
            
            So `Navbar` is done. `Footer` first part is done.
            Now I need to fix the bottom part of the footer (Copyright links) which are currently missing or misplaced.
            
            Previous code had:
            <div className="mt-auto col-span-full flex flex-col md:flex-row justify-between items-end text-xs text-muted-gray gap-4 pb-6">
              ...
            </div>
            Values were inside the first big column div.
            
            I want to move this OUT to be a full-width row at the bottom.
            
            So I need to target the end of the form block and append the footer bottom row there.
        */}
        
        {/* Bottom Footer - Re-adding the giant text if requested or just keeping it clean for responsiveness */}
      </section>
  );
}
