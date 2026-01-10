export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-900 dark:via-blue-950 dark:to-slate-900 py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-12 w-32 h-32 border-2 border-blue-300 rounded-lg p-4">
          <div className="w-full h-2 bg-blue-300 rounded mb-2"></div>
          <div className="w-3/4 h-2 bg-blue-300 rounded mb-2"></div>
          <div className="w-full h-2 bg-blue-300 rounded"></div>
        </div>

        <div className="absolute top-32 left-1/4 w-24 h-24 border-2 border-blue-300 rounded-full flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-blue-300 rounded-full"></div>
        </div>

        <div className="absolute top-12 right-16 w-40 h-28 border-2 border-blue-300 rounded-lg p-3">
          <div className="flex gap-2 mb-2">
            <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
          </div>
          <div className="w-full h-16 border-2 border-blue-300 rounded relative">
            <svg className="absolute bottom-0 left-0 w-full h-12" viewBox="0 0 100 50" preserveAspectRatio="none">
              <polyline points="0,40 20,30 40,35 60,20 80,25 100,15" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-300"/>
            </svg>
          </div>
        </div>

        <div className="absolute bottom-20 left-16 w-36 h-40 border-2 border-blue-300 rounded-lg p-3">
          <div className="w-12 h-12 border-2 border-blue-300 rounded-full mb-3 mx-auto"></div>
          <div className="space-y-2">
            <div className="w-full h-2 bg-blue-300 rounded"></div>
            <div className="w-3/4 h-2 bg-blue-300 rounded mx-auto"></div>
            <div className="w-full h-2 bg-blue-300 rounded"></div>
          </div>
        </div>

        <div className="absolute bottom-32 left-1/3 w-32 h-24 border-2 border-blue-300 rounded-lg p-3">
          <div className="flex items-end justify-between h-full gap-1">
            <div className="w-4 h-8 bg-blue-300 rounded-t"></div>
            <div className="w-4 h-12 bg-blue-300 rounded-t"></div>
            <div className="w-4 h-16 bg-blue-300 rounded-t"></div>
            <div className="w-4 h-10 bg-blue-300 rounded-t"></div>
          </div>
        </div>

        <div className="absolute top-1/2 right-1/4 w-28 h-28 border-2 border-blue-300 rounded-lg p-2 flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="w-8 h-8 border-2 border-blue-300 rounded"></div>
            <div className="flex-1 space-y-1">
              <div className="w-full h-1.5 bg-blue-300 rounded"></div>
              <div className="w-2/3 h-1.5 bg-blue-300 rounded"></div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 border-2 border-blue-300 rounded"></div>
            <div className="flex-1 space-y-1">
              <div className="w-full h-1.5 bg-blue-300 rounded"></div>
              <div className="w-2/3 h-1.5 bg-blue-300 rounded"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 right-20 w-20 h-20 border-2 border-blue-300 rounded-full flex items-center justify-center">
          <span className="text-4xl text-blue-300">$</span>
        </div>

        <div className="absolute top-1/3 left-1/2 w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 border-t-2 border-r-2 border-blue-300 rounded-full"></div>
        </div>

        <div className=" bottom-1/4 right-1/3 w-24 h-20 relative">
          <div className="absolute inset-0 border-2 border-blue-300 rounded-lg"></div>
          <div className="absolute bottom-0 left-2 w-4 h-12 bg-blue-300 rounded-t"></div>
          <div className="absolute bottom-0 left-8 w-4 h-16 bg-blue-300 rounded-t"></div>
          <div className="absolute bottom-0 left-14 w-4 h-8 bg-blue-300 rounded-t"></div>
        </div>

        <div className="absolute top-20 left-1/3 w-12 h-12 border-2 border-blue-300 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-blue-300 rounded"></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6 tracking-tight">
          Ready to Grow Your Business?
        </h2>
        <p className="text-sm md:text-sm text-blue-100 dark:text-blue-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Book a free strategy session. We'll analyze your business, discuss your goals,<br></br> and
show you exactly how we can help. No commitment required.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg py-4 px-10 rounded-xl shadow-2xl hover:shadow-blue-900/50 transition-all duration-300 hover:scale-105"
        >
          Book Your Free Consultation
        </a>
      </div>
    </section>
  );
}
