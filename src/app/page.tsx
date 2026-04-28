"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Target, Home, Key, Phone, MapPin, User, Globe, Mail, ArrowRight, Loader2, Lock, Menu, X, Building, TrendingUp, ShieldCheck, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network latency for visual feedback
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Form Integration Point
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary-light selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="bg-white rounded-full p-1 shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:scale-105">
                  <Image
                    src="/halfLogo.png"
                    alt="DomiReach Logo Icon"
                    width={40}
                    height={40}
                    className="h-9 w-auto object-contain mix-blend-multiply contrast-125 brightness-110"
                    priority
                  />
                </div>
                <span className="font-extrabold text-2xl text-primary tracking-tight">DomiReach</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-slate-600 hover:text-primary-light font-medium transition-colors">Platform</Link>
              <Link href="#process" className="text-slate-600 hover:text-primary-light font-medium transition-colors">How it Works</Link>
              <Link href="#faq" className="text-slate-600 hover:text-primary-light font-medium transition-colors">FAQ</Link>
            </div>
            <div className="hidden md:flex items-center">
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-primary overflow-hidden shadow-md shadow-primary/20 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary-light rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="relative">Check Territory Availability</span>
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
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-xl absolute w-full left-0 origin-top"
            >
              <div className="px-4 py-6 space-y-4 flex flex-col bg-white">
                <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-primary bg-slate-50 rounded-xl transition-colors">Platform</Link>
                <Link href="#process" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-primary bg-slate-50 rounded-xl transition-colors">How it Works</Link>
                <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-primary bg-slate-50 rounded-xl transition-colors">FAQ</Link>
                <div className="pt-2">
                  <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center px-4 py-4 text-base font-bold text-white bg-[#ff6a00] hover:bg-[#e65f00] rounded-xl shadow-md transition-all">
                    Check Availability
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative bg-slate-50 overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          {/* Ambient Color Blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 w-96 h-96 bg-primary-light/20 rounded-full blur-[100px] pointer-events-none"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 w-96 h-96 bg-[#ff6a00]/20 rounded-full blur-[120px] pointer-events-none"
          ></motion.div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Left Column: Copy & CTA */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white backdrop-blur-sm text-primary-light text-sm font-bold mb-8 border border-primary/10 shadow-sm"
                >
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6a00] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6a00]"></span>
                  </span>
                  Data-Driven Real Estate Growth
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary tracking-tight leading-[1.1] max-w-2xl"
                >
                  Predictable <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-400">Buyer & Seller</span> <br />
                  <span className="relative inline-block mt-2">
                    Appointments.
                    <svg className="absolute -bottom-2 w-full h-3 text-[#ff6a00] -z-10 opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,50 Q50,100 100,50 L100,100 L0,100 Z" fill="currentColor" />
                    </svg>
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-6 text-xl text-slate-600 leading-relaxed font-medium max-w-xl"
                >
                  We build highly-targeted digital acquisition systems that generate exclusive, pre-vetted leads in your local market. No shared lists. No empty promises.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                  <Link
                    href="#contact"
                    className="group relative inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-primary overflow-hidden shadow-xl shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/30 w-full sm:w-auto whitespace-nowrap"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                    Claim Your Market
                    <ChevronRight className="ml-2 -mr-1 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex items-center justify-center px-5 py-4 bg-white rounded-xl border border-slate-200 shadow-sm w-full sm:w-auto whitespace-nowrap">
                    <MapPin className="w-5 h-5 text-[#ff6a00] mr-2 shrink-0" />
                    <span className="text-sm text-slate-700 font-bold">1 Agent Per Zip Code</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Dynamic Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 50 }}
                className="relative w-full mt-16 md:mt-12 lg:mt-0"
              >
                {/* Mockup Container */}
                <div className="relative bg-white/70 backdrop-blur-xl border border-white rounded-3xl p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] w-full max-w-lg mx-auto">
                  <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Live CRM Feed
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-1">Incoming Opportunities</p>
                    </div>
                    <div className="h-10 w-10 bg-primary/5 rounded-full flex items-center justify-center text-primary shadow-inner">
                      <Target className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Floating Notification Cards */}
                  <div className="space-y-4">
                    <motion.div 
                      animate={{ y: [0, -5, 0] }} 
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                      <div className="h-12 w-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 shrink-0">
                        <Home className="w-6 h-6" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-bold text-slate-900 text-sm truncate">Buyer Lead Captured</h4>
                        <p className="text-xs text-slate-500 truncate mt-0.5">Budget: $600k - $800k</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-md uppercase tracking-wider mb-1">Qualified</span>
                        <p className="text-xs text-slate-400 font-medium">Just now</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      animate={{ y: [0, -5, 0] }} 
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 relative overflow-hidden ml-4"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff6a00]"></div>
                      <div className="h-12 w-12 bg-orange-50 rounded-lg flex items-center justify-center text-[#ff6a00] shrink-0">
                        <Key className="w-6 h-6" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-bold text-slate-900 text-sm truncate">Listing Opportunity</h4>
                        <p className="text-xs text-slate-500 truncate mt-0.5">Timeline: 30-60 Days</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-block px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-md uppercase tracking-wider mb-1">High Intent</span>
                        <p className="text-xs text-slate-400 font-medium">12 mins ago</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      animate={{ y: [0, -5, 0] }} 
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                      <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-bold text-slate-900 text-sm truncate">Meeting Booked</h4>
                        <p className="text-xs text-slate-500 truncate mt-0.5">Automated Follow-up Success</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-md uppercase tracking-wider mb-1">Scheduled</span>
                        <p className="text-xs text-slate-400 font-medium">1 hr ago</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-4 -bottom-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 scale-90 sm:scale-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-tr from-primary to-primary-light rounded-full flex items-center justify-center text-white">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">Pipeline Growth</p>
                        <p className="text-[10px] text-green-600 font-bold mt-0.5 flex items-center gap-1">
                          + Increased Volume
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Marquee */}
        <section className="py-6 bg-primary border-y border-primary-light/20 overflow-hidden">
          <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 px-6">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center space-x-12">
                  <span className="text-white/80 font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00]" /> Exclusive Leads
                  </span>
                  <span className="text-white/80 font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00]" /> Real-Time Delivery
                  </span>
                  <span className="text-white/80 font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00]" /> Data-Driven Targeting
                  </span>
                  <span className="text-white/80 font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00]" /> No Shared Lists
                  </span>
                  <span className="text-white/80 font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00]" /> Transparent Reporting
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition / About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-extrabold text-primary tracking-tight sm:text-4xl leading-tight">
                  Stop relying on <span className="text-slate-400 line-through decoration-red-500/50">referrals</span> and <span className="text-slate-400 line-through decoration-red-500/50">shared portals</span>.
                </h2>
                <div className="mt-6 text-lg text-slate-600 leading-relaxed space-y-6">
                  <p>
                    Most real estate agents hit a ceiling because their pipeline is unpredictable. You pay for leads from big portals, only to find out they've been sold to 5 other agents in your area.
                  </p>
                  <p>
                    <strong>DomiReach builds your private acquisition channel.</strong> We utilize targeted digital advertising to find high-intent buyers and sellers in your specific area, capturing them before they ever reach the big aggregator sites.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                    <div className="bg-white p-2 rounded-xl text-primary shadow-sm border border-slate-100"><ShieldCheck className="w-6 h-6" /></div>
                    <div>
                      <span className="block font-bold text-slate-900 mb-1">100% Exclusive</span>
                      <span className="text-sm text-slate-500">Leads are generated for your brand only.</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                    <div className="bg-white p-2 rounded-xl text-primary shadow-sm border border-slate-100"><Target className="w-6 h-6" /></div>
                    <div>
                      <span className="block font-bold text-slate-900 mb-1">High Intent</span>
                      <span className="text-sm text-slate-500">Targeted based on active market behavior.</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="mt-12 lg:mt-0 relative"
              >
                {/* Decorative background for the image/graphic */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-[#ff6a00]/10 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                  <div className="p-8">
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-6">The DomiReach Difference</h3>
                    
                    <div className="space-y-6">
                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                          <X className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800">Traditional Portals</h4>
                          <p className="text-sm text-slate-500">Shared leads, high competition, race to the bottom.</p>
                        </div>
                      </div>
                      
                      <div className="w-px h-8 bg-slate-200 ml-6"></div>

                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500 shrink-0">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800">DomiReach System</h4>
                          <p className="text-sm text-slate-500">Exclusive leads, branded to you, captured at peak intent.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 border-t border-slate-100 p-6">
                    <p className="text-sm text-center font-semibold text-slate-600">
                      We focus on the marketing so you can focus on closing.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[#ff6a00] font-bold tracking-widest uppercase text-sm mb-3 flex items-center justify-center gap-2">
                <span className="w-8 h-px bg-[#ff6a00]"></span>
                Our Methodology
                <span className="w-8 h-px bg-[#ff6a00]"></span>
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
                A Transparent Engine for Growth
              </p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10"
            >
              {/* Step 1 */}
              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative group">
                <div className="absolute top-0 right-0 p-6 text-6xl font-black text-slate-50/80 group-hover:text-primary/5 transition-colors pointer-events-none">01</div>
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary border border-primary/10">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Campaigns</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  We design and deploy custom ad campaigns across social platforms, targeting demographics and behaviors that indicate a high likelihood of moving.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative group md:-translate-y-4">
                <div className="absolute top-0 right-0 p-6 text-6xl font-black text-slate-50/80 group-hover:text-primary/5 transition-colors pointer-events-none">02</div>
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary border border-primary/10">
                  <User className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Lead Capture</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Prospects are directed to optimized landing pages where they provide their contact details, timeline, and property preferences in exchange for value.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative group">
                <div className="absolute top-0 right-0 p-6 text-6xl font-black text-slate-50/80 group-hover:text-primary/5 transition-colors pointer-events-none">03</div>
                <div className="w-14 h-14 bg-[#ff6a00]/10 rounded-2xl flex items-center justify-center mb-6 text-[#ff6a00] border border-[#ff6a00]/20">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Routing</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  The moment a lead is captured, their data is instantly routed directly to your CRM or email. You are the only agent who receives this information.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-slate-600">Everything you need to know about partnering with us.</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Are the leads really exclusive?",
                  a: "Yes. Unlike large real estate portals that sell the same lead to multiple agents, any lead generated through our campaigns is sent only to you. They see your branding, your face, and your information."
                },
                {
                  q: "How many zip codes can I claim?",
                  a: "We operate on a strict territory exclusivity model. Usually, an agent will claim 1-3 zip codes. Once a zip code is claimed, we will not work with another agent in that specific territory."
                },
                {
                  q: "Do you guarantee results?",
                  a: "We guarantee the delivery of a set number of leads or appointments based on your specific market and budget. We focus on building a predictable system, not making unrealistic promises."
                },
                {
                  q: "How long does it take to get started?",
                  a: "Once we finalize our partnership, it typically takes 5-7 business days to build out your custom funnels, set up the ad campaigns, and integrate the lead routing with your systems."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-primary/30"
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-bold text-slate-900 text-left pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-24 relative overflow-hidden bg-[#0A2540]">
          {/* Subtle Dot Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px]"></div>

          {/* Decorative Animated Glows */}
          <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-primary-light/20 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[60vh] h-[60vh] bg-[#ff6a00]/10 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                  Check Territory <span className="text-[#ff6a00]">Availability</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                  We only partner with one agent per area. Enter your details below to see if your market is still open.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md mx-auto bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] p-8 relative z-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-[#ff6a00]"></div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-5"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 text-left">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-slate-400" />
                        </div>
                        <input type="text" id="fullName" placeholder="Jane Doe" className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ff6a00]/50 focus:border-[#ff6a00] focus:bg-white transition-all outline-none text-slate-800 placeholder-slate-400 font-medium" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 text-left">Target Zip Code(s)</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-slate-400" />
                        </div>
                        <input type="text" id="zipCode" placeholder="e.g. 90210, 90211" className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ff6a00]/50 focus:border-[#ff6a00] focus:bg-white transition-all outline-none text-slate-800 placeholder-slate-400 font-medium" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 text-left">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-slate-400" />
                        </div>
                        <input type="email" id="email" placeholder="jane@brokerage.com" className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ff6a00]/50 focus:border-[#ff6a00] focus:bg-white transition-all outline-none text-slate-800 placeholder-slate-400 font-medium" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 text-left">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-slate-400" />
                        </div>
                        <input type="tel" id="phone" placeholder="(555) 123-4567" className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ff6a00]/50 focus:border-[#ff6a00] focus:bg-white transition-all outline-none text-slate-800 placeholder-slate-400 font-medium" required />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full flex items-center justify-center py-4 px-6 bg-[#ff6a00] hover:bg-[#e65f00] text-white font-bold text-lg rounded-xl shadow-[0_4px_14px_0_rgba(255,106,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,106,0,0.23)] transition-all mt-8 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed border-none"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Checking Area...
                          </>
                        ) : (
                          <>
                            Check Availability
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-4 flex items-center justify-center gap-1.5 font-medium">
                      <Lock className="w-3 h-3" />
                      Your information is secure and confidential.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 border-8 border-green-50/50">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Request Received!</h3>
                    <p className="text-slate-600 leading-relaxed text-sm mb-8">
                      We're checking our database for your area. We will contact you shortly to confirm availability.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-slate-500 font-bold hover:text-slate-800 transition-colors flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 w-full justify-center text-sm"
                    >
                      Check another area
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#041120] pt-16 pb-8 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="bg-white rounded-full p-1 border border-white/20">
                  <Image
                    src="/halfLogo.png"
                    alt="DomiReach Logo Icon"
                    width={32}
                    height={32}
                    className="h-7 w-auto object-contain mix-blend-multiply contrast-125 brightness-110"
                  />
                </div>
                <span className="font-extrabold text-xl text-white tracking-tight">DomiReach</span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Building predictable acquisition channels for growth-minded real estate professionals.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-5 tracking-wider uppercase text-xs">Platform</h4>
              <ul className="space-y-3">
                <li><Link href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">Why Us</Link></li>
                <li><Link href="#process" className="text-slate-400 hover:text-white transition-colors text-sm">Methodology</Link></li>
                <li><Link href="#faq" className="text-slate-400 hover:text-white transition-colors text-sm">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-5 tracking-wider uppercase text-xs">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary-light shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm">hello@domireach.com</span>
                </li>
              </ul>
            </div>
            
            <div>
               <h4 className="text-white font-bold mb-5 tracking-wider uppercase text-xs">Action</h4>
               <Link href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-bold rounded-lg transition-all w-full text-center">
                  Check Area Availability
               </Link>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} DomiReach. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-xs">
              <Link href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Marquee Keyframes for Tailwind */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}
