"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Target, Wrench, Zap, Phone, ThermometerSnowflake, User, Globe, Mail, ArrowRight, Loader2, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
            <div className="flex items-center">
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 shadow-sm transition-all hover:shadow-md"
              >
                Get Leads Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden pt-20 pb-28">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-primary-light text-sm font-semibold mb-8 border border-primary-light/20"
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
              className="text-5xl md:text-7xl font-extrabold text-primary tracking-tight max-w-4xl leading-[1.1]"
            >
              We Generate Exclusive, <br className="hidden md:block"/>
              <span className="text-primary-light relative">
                Quote-Ready HVAC Leads
                <svg className="absolute -bottom-2 w-full h-3 text-accent -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,50 Q50,100 100,50 L100,100 L0,100 Z" fill="currentColor"/>
                </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              Keep your techs dispatched and trucks rolling. No shared leads. No heavy lifting required. You close deals, we bring them.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                href="#contact" 
                className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-primary-light hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              >
                Claim Your Area Today
                <ChevronRight className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-sm text-slate-500 font-medium">Limited exact-match territories available.</span>
            </motion.div>
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
                    <Wrench className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">System Blueprint</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We analyze your local US market and create high-converting ad assets tailored specifically to AC replacements, heating systems, and high-margin services.
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
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Launch & Target</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We deploy precision advertising campaigns across premium social and search networks, targeting homeowners directly when they need you most.
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
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Dispatch & Profit</h3>
                  <p className="text-slate-600 leading-relaxed">
                    You receive piping hot, pre-qualified, and quote-ready leads directly to your CRM or phone. All you have to do is answer and dispatch.
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
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <Link href="/">
                <Image 
                  src="/thermaReach-logo.png" 
                  alt="ThermaReach Logo" 
                  width={200} 
                  height={50} 
                  className="h-8 w-auto object-contain" 
                />
              </Link>
            </div>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} ThermaReach. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
