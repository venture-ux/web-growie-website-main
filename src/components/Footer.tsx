import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <>
      <section className="py-32 px-6 md:px-12 bg-white relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
          <div className="flex flex-col justify-between max-w-xs">
            <div>
              <span className="text-sm font-medium text-gray-400 mb-6 block font-mono">04 — What Our Clients Say</span>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                We supply clients across the entire globe with improved network connections.
              </p>
            </div>

            <div className="flex gap-4 mt-12 md:mt-24">
              {/* Badges/Awards placeholder */}
              <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center">
                <span className="text-[10px] font-bold">Clutch</span>
              </div>
              <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center">
                <span className="text-[10px] font-bold">Awf</span>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-4xl">
            <div className="relative">
              <span className="absolute -left-12 -top-8 text-7xl font-serif text-gray-900 leading-none">"</span>
              <p className="text-2xl md:text-4xl font-display font-medium text-gray-900 leading-[1.3] tracking-tight mb-12">
                FANTASTIK has completely revolutionized our content pipeline. We used to spend days on carousels and posters, now everything is generated at an agency-standard quality instantly. They excel in programmatic graphics and big-picture scale.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 pt-8 mt-8">
              <div className="flex items-center gap-4">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23e5e7eb'/%3E%3Ccircle cx='50' cy='38' r='18' fill='%239ca3af'/%3E%3Cellipse cx='50' cy='90' rx='28' ry='22' fill='%239ca3af'/%3E%3C/svg%3E" alt="Sarah K." className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-base font-bold text-gray-900">Sarah K.</h4>
                  <p className="text-sm text-gray-500">Head of Growth</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#e4e6ea] pt-24 pb-12 px-6 md:px-12 rounded-t-[3rem] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
             <div className="font-display font-bold text-xl tracking-tight text-gray-900 flex items-center gap-2 mb-8 uppercase">
               <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"><path d="M12 2L2 22h20L12 2z" fill="black"/></svg>
               FANTASTIK
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-gray-300 pb-20 mb-10">
            {/* CTA */}
            <div className="col-span-1 md:col-span-5">
               <h2 className="text-5xl md:text-7xl font-display font-medium text-gray-900 leading-[0.9] tracking-tight mb-6">
                 We would love to hear<br/>from you.
               </h2>
               <p className="text-gray-600 mb-8 max-w-sm text-sm">
                 Feel free to reach out if you want to collaborate with us, or simply have a chat.
               </p>
               <button className="flex items-center gap-3 bg-white text-gray-900 border border-gray-200 shadow-sm px-6 py-3 rounded-full font-medium text-sm hover:scale-105 transition-all mb-12">
                 <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                 Become a Client <ArrowUpRight className="w-4 h-4 ml-2" />
               </button>

               <div>
                 <p className="text-sm font-bold text-gray-900 mb-1">Don't like the forms? Drop us a line via email.</p>
                 <a href="mailto:hello@fantastik.io" className="text-sm font-bold text-gray-900 underline decoration-gray-400 underline-offset-4 hover:decoration-gray-900">hello@fantastik.io</a>
               </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block col-span-3"></div>

            {/* Links */}
            <div className="col-span-1 md:col-span-4 grid grid-cols-3 gap-8">

               <div>
                 <h5 className="font-bold text-xs uppercase tracking-wider mb-6 text-gray-900">Contact Us</h5>
                 <div className="space-y-6">
                   <div>
                     <p className="text-sm text-gray-500 mb-1">Our Email</p>
                     <p className="text-sm font-medium text-gray-900 underline decoration-gray-400 underline-offset-4">hello@fantastik.io</p>
                   </div>
                   <div>
                     <p className="text-sm text-gray-500 leading-relaxed">San Francisco, CA 2<br/>Embarcadero Center, 8<br/>floor, 94111</p>
                   </div>
                 </div>
               </div>

               <div>
                 <h5 className="font-bold text-xs uppercase tracking-wider mb-6 text-gray-900">Follow Us</h5>
                 <ul className="space-y-3">
                   {['dribbble', 'linkedin', 'clutch', 'instagram', 'behance'].map(link => (
                     <li key={link}>
                       <a href="#" className="text-sm text-gray-500 hover:text-gray-900 capitalize flex items-center gap-1 group">
                         {link} <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                       </a>
                     </li>
                   ))}
                 </ul>
               </div>

               <div>
                 <h5 className="font-bold text-xs uppercase tracking-wider mb-6 text-gray-900">Services</h5>
                 <ul className="space-y-3">
                   {['Carousel Automation', 'E-commerce Posters', 'API Access', 'Dynamic Templates', 'Pricing', 'Blog', 'Wall of Love'].map(link => (
                     <li key={link}>
                       <a href="#" className="text-sm text-gray-500 hover:text-gray-900">{link}</a>
                     </li>
                   ))}
                 </ul>
               </div>

            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
             <p>© FANTASTIK 2026. All rights reserved. • <a href="#" className="hover:text-gray-900 underline decoration-gray-300 pointer-events-auto">Privacy Policy</a></p>
             <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-gray-900 flex items-center gap-1 mt-4 md:mt-0">
               Back to the top <ArrowUpRight className="w-3 h-3" />
             </button>
          </div>
        </div>
      </footer>
    </>
  );
}
