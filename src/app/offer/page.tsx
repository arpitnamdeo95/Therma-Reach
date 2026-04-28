import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, BarChart3, Clock, ShieldCheck, Mail } from "lucide-react";

export default function OfferPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Minimal Navigation for High Conversion */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-white rounded-full">
                <Image 
                  src="/halfLogo.png" 
                  alt="DomiReach Logo Icon" 
                  width={40} 
                  height={40} 
                  className="h-10 w-auto object-contain mix-blend-multiply contrast-125 brightness-110" 
                  priority 
                />
              </div>
              <span className="font-extrabold text-2xl text-primary tracking-tight">DomiReach</span>
            </Link>
            <Link href="/" className="text-sm font-medium text-slate-500 hover:text-primary">Back to Home</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <section className="py-20 lg:py-32 overflow-hidden bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-primary-light text-sm font-bold mb-8 uppercase tracking-wide">
              🔥 The DomiReach Guarantee
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tight mb-8 leading-tight">
              We Will Get You <span className="text-[#ff6a00]">20 Qualified Buyers</span> In 90 Days.
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              We've engineered a predictable growth machine for US real estate agents that bypasses shared lead providers and window shoppers.
            </p>
            
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl mb-16 text-left">
              <h2 className="text-2xl font-bold text-primary mb-6">Here is exactly what you get:</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg mt-1 text-green-600"><CheckCircle2 className="w-6 h-6"/></div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">High-Value Focus</h3>
                    <p className="text-slate-600 mt-1">We optimize campaigns exclusively for pre-approved luxury buyers, motivated sellers, and high-margin transactions. No low-intent tire-kickers.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg mt-1 text-green-600"><CheckCircle2 className="w-6 h-6"/></div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Total Exclusivity</h3>
                    <p className="text-slate-600 mt-1">Your leads are never sold to competing agents or brokerages. Once they enter your funnel, they are yours and yours alone.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg mt-1 text-green-600"><CheckCircle2 className="w-6 h-6"/></div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Pre-Qualified Appointments</h3>
                    <p className="text-slate-600 mt-1">Our AI calling system verifies the client's timeline, budget, and urgency before injecting the consultation straight into your calendar.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                <BarChart3 className="w-10 h-10 text-primary-light mx-auto mb-4" />
                <h4 className="font-bold text-slate-900">Risk-Free Scale</h4>
                <p className="text-sm text-slate-600 mt-2">Zero retainer risks. We are purely incentivized by your growth and closed transactions.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                <ShieldCheck className="w-10 h-10 text-[#ff6a00] mx-auto mb-4" />
                <h4 className="font-bold text-slate-900">Ironclad Guarantee</h4>
                <p className="text-sm text-slate-600 mt-2">If we don't deliver 20 qualified appointments in 90 days, we refund our fee.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                <Clock className="w-10 h-10 text-primary-light mx-auto mb-4" />
                <h4 className="font-bold text-slate-900">Rapid Launch</h4>
                <p className="text-sm text-slate-600 mt-2">Your system goes live and starts generating scheduled showings within 7 days.</p>
              </div>
            </div>

            <Link href="/#contact" className="inline-flex items-center justify-center px-10 py-5 bg-[#ff6a00] hover:bg-[#e65f00] text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-[#ff6a00]/25 transition-all w-full md:w-auto mx-auto group">
              Apply For Your Territory
              <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-center text-sm text-slate-500 mt-4">We strictly partner with ONE top agent per major territory.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#041120] pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 px-4">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="bg-white rounded-full p-1 border-2 border-white">
                  <Image 
                    src="/halfLogo.png" 
                    alt="DomiReach Logo Icon" 
                    width={40} 
                    height={40} 
                    className="h-8 w-auto object-contain mix-blend-multiply contrast-125 brightness-110" 
                  />
                </div>
                <span className="font-extrabold text-2xl text-white tracking-tight">DomiReach</span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                The premier growth engine for high-performing real estate agents across the United States. We specialize in turning ad spend into guaranteed qualified buyers and sellers.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</Link></li>
                <li><Link href="/offer" className="text-slate-400 hover:text-white transition-colors text-sm">Our Offer</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Get In Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary-light shrink-0" />
                  <span className="text-slate-400 text-sm">hello@domireach.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 px-4 text-center md:text-left">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} DomiReach Agency. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
