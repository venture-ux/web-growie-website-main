import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white rounded-t-[3rem] relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
           <div>
             <span className="text-sm font-medium text-gray-500 mb-6 block font-mono">01 — Graphic Automations</span>
             <h2 className="text-3xl md:text-5xl font-sans font-medium text-gray-800 max-w-3xl leading-tight">
               Programmatic e-commerce posters and carousel automations — <span className="text-gray-400">agency quality, machine speed.</span>
             </h2>
           </div>
           
           <div className="hidden md:flex flex-col gap-2">
             {/* Small abstract indicators */}
             <div className="flex justify-end gap-2 text-gray-900">
               <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors"><ArrowUpRight className="w-5 h-5"/></div>
             </div>
           </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="group relative bg-[#fff4df] rounded-[2.5rem] p-10 h-[550px] overflow-hidden flex flex-col justify-between"
          >
            <div>
              <h3 className="text-4xl font-display font-bold text-orange-950 mb-4 leading-[1.1] uppercase tracking-tight">Carousel<br/>Automations</h3>
            </div>
            
            <div className="relative z-10 space-y-8">
               <p className="text-orange-950/70 font-medium text-sm leading-relaxed max-w-[280px]">
                 Generate high-converting, multi-slide carousels instantly from simple text prompts or URLs. Retain agency quality automatically.
               </p>
               <div className="flex flex-wrap gap-2">
                 {['LinkedIn', 'Instagram', 'Figma Sync', 'Bulk AI'].map(tag => (
                   <span key={tag} className="text-xs font-semibold bg-white/60 backdrop-blur-md px-4 py-2.5 rounded-full text-orange-950 border border-orange-200/50 hover:bg-white transition-colors cursor-pointer">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ffd89e] rounded-full blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="group relative bg-[#ffb9a1] rounded-[2.5rem] p-10 h-[550px] overflow-hidden flex flex-col justify-between"
          >
            {/* Background texture simulation visually similar to prompt */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-red-900/10 mix-blend-multiply" />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-400 rounded-full blur-[60px] opacity-40 mix-blend-color-burn" />
            
            <div className="relative z-10">
              <h3 className="text-4xl font-display font-bold text-white mb-4 leading-[1.1] uppercase tracking-tight drop-shadow-sm">E-commerce<br/>Posters</h3>
            </div>
            
            <div className="relative z-10 space-y-8">
               <p className="text-white/90 font-medium text-sm leading-relaxed max-w-[280px]">
                 Create agency-standard promotional posters and product highlights with dynamic templates scaling to thousands of SKUs.
               </p>
               <div className="flex flex-wrap gap-2">
                 {['Shopify', 'Amazon', 'Social Ads'].map(tag => (
                   <span key={tag} className="text-xs font-semibold bg-white/20 backdrop-blur-md px-4 py-2.5 rounded-full text-white border border-white/30 hover:bg-white/30 transition-colors cursor-pointer">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="group relative bg-[#7c8fdb] rounded-[2.5rem] p-10 h-[550px] overflow-hidden flex flex-col justify-between text-white"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
              <pre className="p-8 text-[10px] font-mono text-white transform rotate-12 scale-150 origin-top-left font-bold opacity-50">
                {`import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}`}
              </pre>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-display font-bold mb-4 leading-[1.1] uppercase tracking-tight">Production<br/>Scale API</h3>
            </div>
            
            <div className="relative z-10 space-y-8">
               <p className="text-blue-50 font-medium text-sm leading-relaxed max-w-[280px]">
                 Seamlessly integrate our graphics engine with your existing marketing stack via our API. Render assets in milliseconds.
               </p>
               <div className="flex flex-wrap gap-2">
                 {['REST API', 'Webhooks', 'Zapier', 'Make'].map(tag => (
                   <span key={tag} className="text-xs font-semibold bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full text-white border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
