import { SVGProps } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CASES_IMAGES } from '../data/images';

export function LatestCases() {
  const cases = CASES_IMAGES;

  return (
    <section className="bg-[#111111] py-32 px-6 md:px-12 relative overflow-hidden text-white z-20 font-sans">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 -left-64 w-[500px] h-[500px] border-[40px] border-[#1a1a1a] rounded-full opacity-50" />
      <div className="absolute top-[400px] -left-64 w-[500px] h-[500px] border-[40px] border-[#1a1a1a] rounded-full opacity-50" />
      <div className="absolute top-[800px] -left-64 w-[500px] h-[500px] border-[40px] border-[#1a1a1a] rounded-full opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
           <div>
             <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4 block">Case Studies</span>
             <h2 className="text-5xl md:text-7xl font-display font-medium leading-[0.9] tracking-tight">
               Recent<br/>Automations
             </h2>
           </div>
           
           <div className="w-full md:w-auto relative border-b border-gray-700 pb-2 flex items-center">
             <input type="text" placeholder="Search cases..." className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-full md:w-64 pr-8" />
             <ArrowUpRightIcon className="w-4 h-4 text-gray-500 absolute right-0" />
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cases.map((c, i) => (
             <motion.div 
               key={i} 
               whileHover={{ y: -8 }}
               className="group cursor-pointer"
             >
               <div className="rounded-[2rem] overflow-hidden aspect-[4/3] bg-gray-800 mb-6 border border-gray-800 group-hover:border-gray-600 transition-colors">
                 <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
               </div>
               <h3 className="text-xl font-bold mb-4 leading-snug">{c.title}</h3>
               <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                 {c.desc}
               </p>
             </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800">
           <div className="flex items-center gap-6">
             <button className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
               <ArrowLeft className="w-5 h-5" />
             </button>
             <div className="h-1 w-12 bg-gray-800 overflow-hidden relative">
               <div className="absolute left-0 top-0 h-full w-1/3 bg-white" />
             </div>
             <button className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
               <ArrowRight className="w-5 h-5" />
             </button>
           </div>
           
           <button className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors border border-white/10">
             View All Cases
           </button>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
