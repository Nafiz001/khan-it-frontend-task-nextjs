import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="space-y-8 relative z-10">
          <div className="relative">
            <h1 className="text-5xl lg:text-[4rem] font-extrabold leading-[1.1] text-gray-900 dark:text-white tracking-tight">
              Digital Marketing Agency in{" "}
              <span className="relative inline-block">
                Bangladesh
                <svg className="absolute -top-6 -right-8 w-12 h-12 text-orange-500 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </h1>
          </div>
          <p className="text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
            Khan IT (led by SEO expert Md Faruk Khan) helps businesses get 150% more leads and 2.5x higher conversions through integrated digital marketing and web design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a className="bg-primary hover:bg-primary-hover text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-primary/30 text-center" href="#">
              Book Your Free Consultation
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 relative">
          <div className="space-y-5 mt-8">
            <div className="bg-purple-50 dark:bg-card-purple-dark/40 rounded-3xl p-6 shadow-soft hover:-translate-y-1 transition-transform duration-300 border border-purple-100 dark:border-purple-800">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-white dark:bg-purple-900 rounded-full flex items-center justify-center shadow-sm text-2xl">
                  🚀
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white">200%</h3>
                <span className="material-symbols-rounded text-green-500 text-3xl font-bold">arrow_upward</span>
              </div>
              <p className="font-bold text-gray-800 dark:text-gray-200">More Conversions</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Than Industry Average</p>
            </div>
            <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-soft hover:shadow-lg transition-all cursor-pointer">
              <Image
                alt="Case Study Thumbnail"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMp4a0WnCsStJ5-1NX_hSMXJvZEN8QVD-SYu8NQSDiUmYUnq_N8ZTvMm16mifhquR4DRRUKSeqTEqB0sBECLr8YSYKJpCw2mdbYptQW6WU-kLzIaMvCXmeRtfKz8M_tGLTvBbePoR3E1Bp11lKQ_NQImJtvmnOy9zC9dnQlmv75p09ul1QRImv7qKtWm4trh0C6LGK-3ESDCrPzBMxMVWt7pGpXhycaQ-s1IZrzYakl-1PcMl2OZcglcx2gltNO5G0a2o4UsxtCOA"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-rounded text-white text-3xl ml-1">play_arrow</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-xs font-medium uppercase tracking-wider">Case Study</span>
                  </div>
                  <p className="text-sm font-semibold">Watch Case Study</p>
                </div>
                <span className="text-xs opacity-80 bg-black/30 px-2 py-1 rounded">2:45 min</span>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="bg-blue-50 dark:bg-card-blue-dark/40 rounded-3xl p-6 shadow-soft hover:-translate-y-1 transition-transform duration-300 border border-blue-100 dark:border-blue-800 h-fit">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Our Track Record</h3>
              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl flex items-center gap-3 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center">
                    <span className="material-symbols-rounded text-[20px]">groups</span>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 dark:text-white leading-tight">500+</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Clients</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl flex items-center gap-3 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center">
                    <span className="material-symbols-rounded text-[20px]">ads_click</span>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 dark:text-white leading-tight">98%</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Success</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl flex items-center gap-3 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center">
                    <span className="material-symbols-rounded text-[20px]">bolt</span>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 dark:text-white leading-tight">24h</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 dark:bg-card-orange-dark/40 rounded-3xl p-6 shadow-soft hover:-translate-y-1 transition-transform duration-300 border border-orange-100 dark:border-orange-900 relative">
              <div className="absolute top-6 right-6 text-orange-400 opacity-50">
                <span className="material-symbols-rounded text-4xl">format_quote</span>
              </div>
              <div className="mb-4">
                <div className="text-[#0056D2] font-black italic text-xl tracking-tighter flex flex-col leading-none">
                  <span className="text-2xl">W</span>
                  <span className="text-sm tracking-widest ml-1 -mt-1">WALTON</span>
                </div>
              </div>
              <div className="flex gap-1 mb-3 text-orange-500">
                <span className="material-symbols-rounded text-[18px]">star</span>
                <span className="material-symbols-rounded text-[18px]">star</span>
                <span className="material-symbols-rounded text-[18px]">star</span>
                <span className="material-symbols-rounded text-[18px]">star</span>
                <span className="material-symbols-rounded text-[18px]">star</span>
              </div>
              <p className="font-medium text-gray-800 dark:text-gray-200 text-sm leading-relaxed relative z-10">
                "Their marketing strategies are simply outstanding"
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
