"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Target, Wrench, Zap, Phone, ThermometerSnowflake, User, Globe, Mail, ArrowRight, Loader2, Lock, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network latency for visual feedback
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Form Integration Point (e.g., Web3Forms endpoint)
    // For now we simulate success and show the Thank You UI.
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <div className="bg-white rounded-full">
                  <Image 
                    src="/halfLogo.png" 
                    alt="ThermaReach Logo Icon" 
                    width={40} 
                    height={40} 
                    className="h-10 w-auto object-contain mix-blend-multiply contrast-125 brightness-110" 
                    priority 
                  />
                </div>
                <span className="font-extrabold text-2xl text-primary tracking-tight">ThermaReach</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-slate-600 hover:text-primary-light font-medium transition-colors">About</Link>
              <Link href="#process" className="text-slate-600 hover:text-primary-light font-medium transition-colors">Process</Link>
              <Link href="#guarantee" className="text-slate-600 hover:text-primary-light font-medium transition-colors">Guarantee</Link>
            </div>
            <div className="hidden md:flex items-center">
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 shadow-sm transition-all hover:shadow-md whitespace-nowrap"
              >
                Get Leads Now
              </Link>
            </div>
            
            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-primary transition-colors p-2 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-primary/10 overflow-hidden shadow-xl absolute w-full left-0 origin-top"
            >
              <div className="px-4 py-6 space-y-4 flex flex-col bg-white">
                <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-primary bg-slate-50/50 hover:bg-slate-50 rounded-xl transition-colors">About</Link>
                <Link href="#process" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-primary bg-slate-50/50 hover:bg-slate-50 rounded-xl transition-colors">Process</Link>
                <Link href="#guarantee" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-primary bg-slate-50/50 hover:bg-slate-50 rounded-xl transition-colors">Guarantee</Link>
                <div className="pt-2">
                  <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center px-4 py-4 text-base font-bold text-white bg-[#ff6a00] hover:bg-[#e65f00] rounded-xl shadow-md transition-all">
                    Get Leads Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
          {/* Dynamic Light Background Image & Overlays */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.15]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-slate-50"></div>
          
          {/* Subtle Ambient Color Blobs */}
          <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-primary-light/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-[#ff6a00]/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Left Column: Copy & CTA */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-primary-light text-sm font-bold mb-8 border border-slate-200 shadow-sm"
                >
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light"></span>
                  </span>
                  Effortless Business Growth for US HVAC Contractors
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary tracking-tight leading-[1.15] max-w-2xl"
                >
                  We Can Get You <br className="hidden lg:block"/>
                  <span className="text-primary-light">20 Booked Jobs</span> <br/>
                  <span className="relative inline-block mt-3">
                    In 90 Days.
                    <svg className="absolute -bottom-2 w-full h-4 text-[#ff6a00] -z-10 opacity-70" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,50 Q50,100 100,50 L100,100 L0,100 Z" fill="currentColor"/>
                    </svg>
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-6 text-xl text-slate-600 leading-relaxed font-medium max-w-xl"
                >
                  Keep your techs dispatched and trucks rolling. No shared leads. No heavy lifting required. You close deals, we bring them.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                  <Link 
                    href="#contact" 
                    className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-primary hover:bg-primary-light shadow-lg shadow-primary/20 hover:shadow-xl transition-all w-full sm:w-auto whitespace-nowrap"
                  >
                    Claim Your Area Today
                    <ChevronRight className="ml-2 -mr-1 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex items-center justify-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm w-full sm:w-auto whitespace-nowrap">
                    <Lock className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                    <span className="text-sm text-slate-500 font-medium">Limited exact-match territories.</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Dynamic Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full mt-16 md:mt-12 lg:mt-0"
              >
                {/* Mockup Container */}
                <div className="relative bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] p-6 shadow-2xl w-full max-w-lg mx-auto">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">Dispatch Calendar</h3>
                      <p className="text-xs text-slate-500 font-medium mt-1">Next 24 Hours</p>
                    </div>
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-sm">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* Floating Notification Cards */}
                  <div className="space-y-4">
                    {/* Card 1 */}
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 transform transition-all hover:scale-[1.02] hover:shadow-md cursor-pointer">
                      <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary-light shrink-0">
                        <ThermometerSnowflake className="w-6 h-6" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-bold text-slate-900 text-sm truncate">Full AC Replacement</h4>
                        <p className="text-xs text-slate-500 truncate mt-0.5">123 Oak St, Dallas, TX</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-wider mb-1">Confirmed</span>
                        <p className="text-xs text-slate-400 font-medium">8:00 AM</p>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 transform transition-all hover:scale-[1.02] hover:shadow-md cursor-pointer ml-4 relative">
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#ff6a00] rounded-r-md"></div>
                      <div className="h-12 w-12 bg-orange-50 rounded-lg flex items-center justify-center text-[#ff6a00] shrink-0">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-bold text-slate-900 text-sm truncate">Emergency Furnace Repair</h4>
                        <p className="text-xs text-slate-500 truncate mt-0.5">450 Pine Ave, Dallas, TX</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-block px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full uppercase tracking-wider mb-1">High Value</span>
                        <p className="text-xs text-slate-400 font-medium">11:30 AM</p>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 transform transition-all hover:scale-[1.02] hover:shadow-md cursor-pointer">
                      <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary-light shrink-0">
                        <ThermometerSnowflake className="w-6 h-6" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-bold text-slate-900 text-sm truncate">System Diagnostic</h4>
                        <p className="text-xs text-slate-500 truncate mt-0.5">88 Maple Rd, Dallas, TX</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-wider mb-1">Confirmed</span>
                        <p className="text-xs text-slate-400 font-medium">2:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -right-2 sm:-right-8 -bottom-6 sm:-bottom-8 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce cursor-default scale-90 sm:scale-100 origin-bottom-right" style={{ animationDuration: '3s' }}>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <User className="w-10 h-10 text-primary bg-slate-50 rounded-full p-2" />
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">New Lead!</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">Ready for dispatch</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-primary tracking-tight sm:text-4xl">
                  Built exclusively for the <span className="text-primary-light">HVAC Industry.</span>
                </h2>
                <div className="mt-6 text-lg text-slate-600 leading-relaxed space-y-6">
                  <p>
                    ThermaReach is a specialized growth partner for HVAC companies across the United States. We deliver top-tier, exclusive leads through strategic digital campaigns tailored specifically for your local service area.
                  </p>
                  <p>
                    We filter out the tire-kickers so you can focus on what you do best: closing high-ticket installs, repairing comfort systems, and scaling your business profitably.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                    <div className="bg-accent p-2 rounded-lg text-primary-light"><CheckCircle2 className="w-5 h-5"/></div>
                    <span className="font-semibold text-slate-800">Exclusive Leads</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                    <div className="bg-accent p-2 rounded-lg text-primary-light"><CheckCircle2 className="w-5 h-5"/></div>
                    <span className="font-semibold text-slate-800">Pre-Qualified</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 lg:mt-0 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-accent to-white rounded-3xl transform rotate-3 scale-105"></div>
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 p-8 flex flex-col items-center text-center">
                 <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                   <Target className="w-10 h-10 text-primary-light" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-2">Laser-Targeted Precision</h3>
                 <p className="text-slate-600">Our proprietary ad systems target homeowners who are actively displaying intent for HVAC replacements or urgent repairs in your exact zip codes.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services / Niches Section */}
        <section id="services" className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-primary-light font-semibold tracking-wide uppercase text-sm mb-2">Specialized HVAC Leads</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
                High-Ticket Focus. Zero Fluff.
              </p>
              <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
                We generate leads specifically for the most profitable sectors of your business so your crews spend time on jobs that actually matter.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'AC Replacements', desc: 'Full system changeouts and new installations.' },
                { title: 'Furnace Installs', desc: 'High-efficiency heating system upgrades.' },
                { title: 'Ductless Mini-Splits', desc: 'Targeting modern zoning system buyers.' },
                { title: 'Commercial Service', desc: 'Predictable high-margin contract leads.' },
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary-light mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-primary-light font-semibold tracking-wide uppercase text-sm mb-2">How It Works</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
                A Predictable Engine for Growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow group"
              >
                <div className="absolute -top-6 -left-6 text-8xl font-black text-slate-200/50 group-hover:text-accent transition-colors">1</div>
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6 border border-slate-100 text-primary-light">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Targeted Meta Ads</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We run highly sophisticated and localized Meta (Facebook & Instagram) ad campaigns designed specifically to capture homeowners actively seeking immediate HVAC services.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow group"
              >
                <div className="absolute -top-6 -left-6 text-8xl font-black text-slate-200/50 group-hover:text-accent transition-colors">2</div>
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6 border border-slate-100 text-primary-light">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">AI Caller Qualification</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Within seconds of a lead opting in, our trained AI Caller contacts them. It pre-qualifies their specific HVAC need, filters out tire-kickers, and ensures they are ready to buy.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow group"
              >
                <div className="absolute -top-6 -left-6 text-8xl font-black text-slate-200/50 group-hover:text-accent transition-colors">3</div>
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6 border border-slate-100 text-primary-light">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Booked Jobs directly</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Once fully qualified, the appointment is seamlessly injected directly into your dispatch calendar. You skip the chase entirely and just send your techs out to do the work.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results / ROI Section */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595183888350-09a250eb4d02?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.1]"></div>
              <div className="relative px-6 py-16 sm:px-12 lg:px-16 lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    <span className="block">Ready to scale your HVAC operations?</span>
                    <span className="block text-accent">Join our network of elite contractors.</span>
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-300">
                    On average, our partners see a 300% ROI within their first 60 days. We bypass generic marketing and tap directly into homeowner intent.
                  </p>

                </div>
                <div className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-10">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-amber-400 flex gap-1">
                        {[1,2,3,4,5].map(i => <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                      </div>
                    </div>
                    <p className="text-white text-lg font-medium italic leading-relaxed">
                      "ThermaReach transformed our offseason. We were usually scrambling to keep trucks busy, but their system brought in a steady stream of boiler replacement jobs that completely filled our calendar."
                    </p>
                    <p className="mt-4 text-accent font-semibold">— Dave R., Apex Heating & Cooling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee / CTA Form Section */}
        <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0A2540] to-[#041120]">
          {/* Subtle Dot Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
          
          {/* Decorative Animated Glows */}
          <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-primary-light/30 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4 animate-[pulse_6s_ease-in-out_infinite] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[60vh] h-[60vh] bg-[#ff6a00]/15 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#041120] to-transparent pointer-events-none opacity-80"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                  Get 15 Quote-Ready HVAC Leads<br className="hidden sm:block"/>
                </h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#ff6a00] mb-8">
                  Within 30 Days, or You Don't Pay
                </h3>
                <p className="text-xl text-slate-300">
                  No complex retainers. No shared leads. Just a straightforward partnership.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md mx-auto bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] p-8 border border-white/10 relative z-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#ff6a00]"></div>
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-5" 
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 text-left">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-slate-400" />
                        </div>
                        <input type="text" id="fullName" placeholder="John Doe" className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ff6a00]/50 focus:border-[#ff6a00] transition-all outline-none text-slate-800 placeholder-slate-400 shadow-sm font-medium" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 text-left">Website URL</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Globe className="h-5 w-5 text-slate-400" />
                        </div>
                        <input type="url" id="website" placeholder="https://yourcompany.com" className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ff6a00]/50 focus:border-[#ff6a00] transition-all outline-none text-slate-800 placeholder-slate-400 shadow-sm font-medium" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 text-left">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-slate-400" />
                        </div>
                        <input type="email" id="email" placeholder="john@example.com" className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ff6a00]/50 focus:border-[#ff6a00] transition-all outline-none text-slate-800 placeholder-slate-400 shadow-sm font-medium" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 text-left">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-slate-400" />
                        </div>
                        <input type="tel" id="phone" placeholder="(555) 123-4567" className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ff6a00]/50 focus:border-[#ff6a00] transition-all outline-none text-slate-800 placeholder-slate-400 shadow-sm font-medium" required />
                      </div>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="group relative w-full flex items-center justify-center py-4 px-6 bg-[#ff6a00] hover:bg-[#e65f00] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-[#ff6a00]/25 transition-all mt-6 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed border-none"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing Request...
                          </>
                        ) : (
                          <>
                            Get Exclusive Leads
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-1 font-medium">
                      <Lock className="w-3 h-3" />
                      Your information is secure and strictly confidential.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Request Received!</h3>
                    <p className="text-slate-600 leading-relaxed max-w-[250px] mx-auto text-base mb-8">
                      We'll be in touch within 24 hours to discuss your territory availability.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[#ff6a00] font-bold hover:text-[#e65f00] transition-colors flex items-center gap-2 px-4 py-3 bg-orange-50 rounded-xl border border-orange-200 hover:bg-orange-100 w-full justify-center shadow-sm"
                    >
                      Submit another area
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#041120] pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 px-4">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <Image 
                  src="/thermaReach-logo.png" 
                  alt="ThermaReach Logo" 
                  width={200} 
                  height={50} 
                  className="h-10 w-auto object-contain brightness-0 invert" 
                />
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                The premier growth engine for high-ticket HVAC contractors across the United States. We specialize in turning ad spend into guaranteed booked jobs.
              </p>
              <div className="flex items-center gap-2 text-[#ff6a00] font-medium text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Accepting new partners globally
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</Link></li>
                <li><Link href="/offer" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2">Our Offer <span className="bg-[#ff6a00]/20 text-[#ff6a00] text-[10px] uppercase px-2 py-0.5 rounded-full font-bold">New</span></Link></li>
                <li><Link href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                <li><Link href="#process" className="text-slate-400 hover:text-white transition-colors text-sm">How It Works</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Services</h4>
              <ul className="space-y-4">
                <li className="text-slate-400 text-sm">Targeted Meta Ads</li>
                <li className="text-slate-400 text-sm">AI Lead Qualification</li>
                <li className="text-slate-400 text-sm">Direct Calendar Booking</li>
                <li className="text-slate-400 text-sm">Growth Consulting</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Get In Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary-light shrink-0" />
                  <span className="text-slate-400 text-sm">hello@thermareach.com</span>
                </li>
                <li className="flex items-start gap-3 mt-4">
                  <div className="flex-grow">
                    <p className="text-slate-300 text-sm font-medium mb-3">Ready to scale your HVAC business?</p>
                    <Link href="#contact" className="inline-block bg-white text-primary font-bold text-xs uppercase tracking-wide px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors">
                      Book a Strategy Call
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 px-4 text-center md:text-left">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} ThermaReach Agency. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-slate-500 hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
