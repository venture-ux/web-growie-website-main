import { motion } from 'motion/react';
import { ArrowDownRight, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center overflow-hidden bg-[#f4f5f6]">
      {/* Soft Mesh Gradient Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -40, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] w-96 h-96 bg-[#d4c5ff] rounded-full mix-blend-multiply filter blur-[100px] opacity-70"
        />
        <motion.div 
          animate={{ x: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-[10%] w-[500px] h-[500px] bg-[#ffd4e5] rounded-full mix-blend-multiply filter blur-[120px] opacity-60"
        />
        <motion.div 
          animate={{ y: [0, 50, 0], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5e4ff] rounded-full mix-blend-multiply filter blur-[100px] opacity-50"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full mt-10 md:mt-20">
        <motion.h1 
          className="font-display font-bold text-[13vw] md:text-[11vw] leading-[0.8] tracking-tighter text-gray-900 uppercase"
        >
          <div className="overflow-hidden pb-4">
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              WE AUTOMATE
            </motion.div>
          </div>
          <div className="overflow-hidden flex items-center gap-4 md:gap-6 pb-4">
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} className="flex items-center gap-4">
               <div className="w-16 h-16 md:w-[7vw] md:h-[7vw] rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                 <ArrowDownRight className="w-8 h-8 md:w-16 md:h-16 text-gray-900" strokeWidth={1.5} />
               </div>
               AGENCY-GRADE
            </motion.div>
          </div>
          <div className="overflow-hidden pb-4">
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
              GRAPHICS
            </motion.div>
          </div>
        </motion.h1>

        {/* Trust Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 inline-flex items-center gap-4 bg-white/80 backdrop-blur-md rounded-full p-2 pr-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white"
        >
          <div className="flex bg-gray-100 rounded-full px-3 py-1 items-center gap-1.5 border border-gray-200/50">
            <span className="font-bold text-gray-900 text-sm">4.9</span>
            <div className="flex text-yellow-400 gap-0.5">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
          </div>
          <div className="h-5 w-[1px] bg-gray-200" />
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-wider text-yellow-700 uppercase bg-yellow-50 px-2 py-0.5 rounded-md border border-yellow-100 hidden sm:block">Gold Verified</span>
            <span className="text-sm font-medium text-gray-500">Trusted by agencies & brands across Asia, <span className="text-gray-900 underline decoration-gray-300 underline-offset-4 cursor-pointer hover:text-black">40+ Reviews</span></span>
          </div>
        </motion.div>
      </div>

      {/* Floating abstract decorative element */}
      <motion.div 
         animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
         className="absolute right-[5%] bottom-[20%] w-48 h-48 md:w-72 md:h-72 rounded-[2rem] bg-gradient-to-br from-white/60 to-white/10 backdrop-blur-xl border border-white shadow-2xl -rotate-12 hidden lg:flex items-center justify-center pointer-events-none"
      >
        <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-tr from-[#d4c5ff]/50 to-transparent blur-xl animate-pulse" />
      </motion.div>
    </section>
  );
}
