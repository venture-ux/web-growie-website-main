import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-[#f4f5f6] relative z-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-6 text-gray-800">Pricing</p>
          <h2 className="text-4xl md:text-[5vw] leading-[0.9] font-display font-medium text-gray-900 tracking-tight">
            One subscription,<br/>
            <span className="font-serif italic font-normal tracking-normal -mt-2 inline-block">endless possibilities</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
           {/* Left Card */}
           <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-10 md:p-14 relative overflow-hidden min-h-[500px] flex flex-col justify-end shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              {/* Vibrant abstract card representation */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [-12, -14, -12] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 md:-left-4 w-96 h-56 rounded-[2rem] bg-gradient-to-tr from-green-600 via-pink-500 to-blue-600 shadow-2xl border border-white/20 p-6 text-white transform -rotate-12 flex flex-col justify-between overflow-hidden"
              >
                {/* Abstract graphical elements inside to mimic designjoy logo block */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500 rounded-full blur-xl" />
                <div className="absolute bottom-0 -left-10 w-48 h-48 bg-yellow-400 rounded-full mix-blend-overlay" />
                <div className="relative z-10 flex justify-between">
                   <div className="w-16 h-16 rounded-full border-4 border-white flex justify-center items-center backdrop-blur-sm bg-black/10">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                   </div>
                </div>
                <div className="relative z-10 font-mono text-xs tracking-widest uppercase opacity-90 mt-auto font-bold mix-blend-overlay">FANTASTIK Club</div>
              </motion.div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  Start today
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-medium leading-[1.1] tracking-tight">
                  Join<br/>FANTASTIK
                </h3>
              </div>
           </div>

           {/* Right Card */}
           <div className="bg-[#080808] rounded-[2rem] md:rounded-[3rem] p-10 md:p-12 relative overflow-hidden text-white min-h-[500px] flex flex-col shadow-xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 relative z-10">
                 <h3 className="text-2xl md:text-3xl font-display font-medium">Monthly Club</h3>
                 <span className="text-[10px] font-bold tracking-widest uppercase border border-gray-700 px-3 py-1.5 rounded-sm text-gray-400">
                   Pause or cancel anytime
                 </span>
              </div>

              <div className="border-b border-dashed border-gray-700 mb-8 w-full block relative z-10"></div>

              <div className="mb-6 relative z-10">
                <span className="inline-block bg-[#1f0b14] text-[#ff1e83] border border-[#ff1e83]/30 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                  Most Popular — Save $1,000/mo
                </span>
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl md:text-6xl font-display font-medium tracking-tight">$4,995<span className="text-xl text-gray-300 font-medium tracking-normal ml-1">/month</span></span>
                  <span className="text-2xl md:text-3xl text-gray-600 font-medium line-through decoration-gray-600 tracking-tight">$5,995</span>
                </div>
              </div>

              <div className="bg-[#1f1f1f] rounded-2xl p-6 md:p-8 relative mb-8 border border-gray-700/50 shadow-inner z-10">
                 <span className="absolute -top-3 left-6 bg-[#333] border border-gray-600 text-gray-300 text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-md">
                   Included
                 </span>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-[13px] md:text-sm font-medium text-gray-200 mt-2">
                   <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> Unlimited generations</li>
                   <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> Agency-grade templates</li>
                   <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> Avg. 2 second delivery</li>
                   <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> Up to 5 API keys</li>
                   <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> Unlimited brands</li>
                   <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> Pause or cancel anytime</li>
                   <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> E-commerce & Ads Access</li>
                 </ul>
              </div>

              <div className="mt-auto z-10">
                <button className="flex items-center gap-4 bg-[#1f1f1f] hover:bg-[#2a2a2a] border border-gray-700 rounded-2xl p-[6px] pr-6 transition-colors group">
                  <div className="bg-[#ff6a00] p-3 md:p-4 rounded-xl flex items-center justify-center text-black shadow-sm">
                     <ArrowRight strokeWidth={2.5} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="font-semibold text-sm">Get started today</span>
                </button>
              </div>

              {/* Huge bottom right orange smiley */}
              <div className="absolute -bottom-16 -right-16 md:-bottom-20 md:-right-20 w-56 h-56 md:w-64 md:h-64 bg-[#ff9900] rounded-full flex items-center justify-center transform rotate-[-15deg]">
                 <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90 ml-4 mb-4">
                   <path d="M6 14s2 3 6 3 6-3 6-3" />
                   <line x1="8" y1="9" x2="8.01" y2="9" />
                   <line x1="16" y1="9" x2="16.01" y2="9" />
                 </svg>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
