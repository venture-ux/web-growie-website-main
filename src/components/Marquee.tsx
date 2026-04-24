export function Marquee() {
  const logos = [
    "Uber", "Oracle", "Intel", "New Balance", "State Farm", "Upside", "GoFundMe", "Nutanix"
  ];

  return (
    <div className="py-10 bg-[#f4f5f6] relative z-10 overflow-hidden">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-marquee w-max">
          {logos.map((logo, i) => (
            <li key={i} className="text-2xl md:text-3xl font-display font-medium text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors duration-300 cursor-default shrink-0">
              {logo}
            </li>
          ))}
        </ul>
        {/* Duplicate list for seamless loop */}
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-marquee w-max aria-hidden:true">
          {logos.map((logo, i) => (
            <li key={`dup-${i}`} className="text-2xl md:text-3xl font-display font-medium text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors duration-300 cursor-default shrink-0">
              {logo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
