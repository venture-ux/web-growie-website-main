import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function DarkShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const images = [
    "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1600100780283-e289c09bfd4e?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1507238692062-5a042c8b04d1?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
  ];

  return (
    <section ref={containerRef} className="bg-[#0a0a0a] min-h-screen pt-32 pb-40 px-6 md:px-12 relative overflow-hidden -mt-10 z-10 rounded-t-[3rem]">
      
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-white/5 blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col items-center md:flex-row md:items-end justify-between gap-12">
          <h2 className="text-6xl md:text-[8vw] leading-[0.85] font-display font-bold text-white uppercase tracking-tighter text-center md:text-left w-full md:w-auto">
            {'{SMART}'}<br/>
            <span className="opacity-60 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-200">AUTOMATION</span>
          </h2>
          
          <div className="max-w-xs flex flex-col items-center md:items-end text-center md:text-right gap-6">
             <div className="flex gap-1 text-gray-500">
               <span className="text-xl">★</span>
               <span className="text-xl">★</span>
             </div>
             <p className="text-gray-400 text-sm font-medium leading-relaxed">
               Scaling your graphic production is a science. We take it (a) seriously and (b) automatically.
             </p>
             <div className="flex flex-wrap justify-center md:justify-end gap-3 w-full">
               <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-sm transition-all border border-white/10">View Templates</button>
               <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all">Start Automating</button>
             </div>
          </div>
        </div>

        {/* Parallax Image Grid */}
        <div className="relative h-[800px] md:h-[1100px] max-w-5xl mx-auto mt-16 md:mt-32" style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
             
             {/* Column 1 */}
             <motion.div style={{ y: y1 }} className="flex flex-col gap-6 md:gap-8 pt-10">
               {[images[0], images[1]].map((src, i) => (
                 <div key={i} className="rounded-[2rem] overflow-hidden bg-gray-800 border border-white/10 hover:border-white/30 transition-colors duration-500 group relative aspect-[3/4]">
                   <img src={src} alt="App UI" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                 </div>
               ))}
             </motion.div>

             {/* Column 2 - Shifted up */}
             <motion.div style={{ y: y2 }} className="flex flex-col gap-6 md:gap-8 -mt-20 md:-mt-40">
               {[images[2], images[3], images[4]].map((src, i) => (
                 <div key={i} className="rounded-[2rem] overflow-hidden bg-gray-800 border border-white/10 hover:border-white/30 transition-colors duration-500 group relative aspect-[3/4]">
                   <img src={src} alt="App UI" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                 </div>
               ))}
             </motion.div>

             {/* Column 3 - Shifted down */}
             <motion.div style={{ y: y3 }} className="flex flex-col gap-6 md:gap-8 mt-10 md:mt-20">
               {[images[5], images[6]].map((src, i) => (
                 <div key={i} className="rounded-[2rem] overflow-hidden bg-gray-800 border border-white/10 hover:border-white/30 transition-colors duration-500 group relative aspect-[3/4]">
                   <img src={src} alt="App UI" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                 </div>
               ))}
             </motion.div>

           </div>
        </div>
      </div>
    </section>
  );
}
