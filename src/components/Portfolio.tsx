import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_IMAGES } from '../data/images';

export function Portfolio() {
  const portfolios = PORTFOLIO_IMAGES;

  return (
    <section className="py-32 px-6 md:px-12 bg-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
           <div className="max-w-md">
             <span className="text-sm font-medium text-gray-500 mb-6 block font-mono">02 — Generated Automations</span>
             <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
               Production-ready graphics, rendered in milliseconds. Agency quality at scale.
             </p>
           </div>
           
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-gray-800 max-w-xl leading-[1.1] tracking-tight">
             Transform cookie-cutter into custom at scale
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {portfolios.map((item, i) => (
             <motion.div 
               key={i} 
               whileHover={{ y: -8 }}
               className={`group relative rounded-[2.5rem] overflow-hidden bg-gray-100 ${item.span} ${item.height} border border-gray-200/50 flex flex-col justify-end p-6`}
             >
               <div className="absolute inset-0 w-full h-full">
                 <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
               </div>
               {/* Label */}
               <div className="relative z-10 flex justify-between items-center bg-white/90 backdrop-blur-md rounded-full pl-6 pr-2 py-2 w-full max-w-sm mt-auto shadow-sm border border-white/50">
                 <span className="text-sm font-bold text-gray-800 tracking-tight">{item.title}</span>
                 <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                   <ArrowUpRight className="w-4 h-4 text-gray-600" />
                 </button>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
