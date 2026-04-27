import { motion } from 'motion/react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6 px-6 md:px-12 pointer-events-none"
    >
      <div className="font-display font-bold text-3xl tracking-tighter text-gray-900 pointer-events-auto cursor-pointer uppercase">
        FANTASTIK.
      </div>
      
      <div className="hidden md:flex items-center gap-8 bg-white/70 backdrop-blur-md rounded-full px-8 py-3 border border-white shadow-sm pointer-events-auto">
        <a href="#services" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">Features</a>
        <a href="#portfolio" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">Templates</a>
        <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">Pricing</a>
        <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">Wall of Love</a>
      </div>

      <div className="flex items-center gap-4 pointer-events-auto">
        <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-800 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full border border-white shadow-sm">
          <span className="cursor-pointer hover:text-black">EN</span>
          <span className="opacity-30">/</span>
          <span className="cursor-pointer hover:text-black opacity-60">AR</span>
        </div>
        <button className="flex items-center gap-3 bg-white text-gray-900 border border-gray-100 shadow-sm px-6 py-3 rounded-full font-medium text-sm hover:scale-105 transition-all">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Become a Client
        </button>
      </div>
    </motion.nav>
  );
}
