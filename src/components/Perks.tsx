import { PauseCircle, CheckCircle2 } from 'lucide-react';

export function Perks() {
  return (
    <section className="pb-24 px-6 md:px-12 bg-[#f4f5f6] relative z-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="border border-dashed border-gray-300 rounded-[2rem] p-10 md:p-12 flex flex-col gap-4">
           <div className="flex items-center gap-4 text-gray-900 mb-2">
             <PauseCircle className="w-8 h-8" strokeWidth={1.5} />
             <h3 className="text-3xl font-display font-medium tracking-tight">Pause anytime</h3>
           </div>
           <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-sm">
             Temporarily pause your subscription anytime, no sweat.
           </p>
        </div>

        <div className="border border-dashed border-gray-300 rounded-[2rem] p-10 md:p-12 flex flex-col gap-4">
           <div className="flex items-center gap-4 text-gray-900 mb-2">
             <CheckCircle2 className="w-8 h-8" strokeWidth={1.5} />
             <h3 className="text-3xl font-display font-medium tracking-tight">Try it for a week</h3>
           </div>
           <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-sm">
             Not loving it after a week? Get 75% back, no questions asked.
           </p>
        </div>
      </div>
    </section>
  );
}
