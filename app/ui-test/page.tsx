import Image from "next/image";

export default function UITestPage() {
  return (
    <div className="min-h-screen bg-void-black text-white relative overflow-hidden font-sans selection:bg-blue-500/30">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-glass-edge backdrop-blur-[25.8px]">
        <div className="flex items-center justify-between px-6 py-6 max-w-[1454px] mx-auto">
          <div className="flex items-center gap-2">
             <Image 
              src="/logo.svg" 
              alt="Cureocity Logo" 
              width={180} 
              height={60} 
              className="w-[180px] h-auto"
              priority 
             />
          </div>

          <div className="hidden md:flex items-center gap-8 border border-white/10 rounded-full px-9 py-6 bg-black/50 backdrop-blur-md">
            {["Healthscape", "Cureocity App", "360 Assessment", "Flourish"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[18px] text-[#C2C2C2] hover:text-white transition-colors duration-200 font-normal"
              >
                {item}
              </a>
            ))}
          </div>

          <div>
            <button className="btn-assessment-bg text-white px-[32px] py-[20px] rounded-[12px] border border-glass-edge text-[18px] font-normal cursor-pointer hover:bg-white/10 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all">
              Get a Assessment
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-start pt-[182px] pb-20 px-4 text-center min-h-[0vh]">
        
        <h1 className="text-5xl md:text-[100px] font-neue-montreal font-normal mb-8 max-w-4xl mx-auto leading-[1.1] text-transparent bg-clip-text bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(205,205,205,0.64)_100%)]">
          Built-in with <br />
          the Science of you
        </h1>

        <div className="flex items-center gap-4 mb-16">
          <button className="px-[22px] py-[12px] rounded-[12px] border border-white/20 text-white hover:bg-white/10 transition-all text-[23px] font-medium backdrop-blur-sm">
            Book a consultation slot
          </button>
          <button className="px-[22px] py-[12px] rounded-[12px] border border-white/20 text-white hover:bg-white/10 transition-all text-[23px] font-medium backdrop-blur-sm">
            Get a visit
          </button>
        </div>

        {/* Central Visual with Anti-Gravity Animation */}
        <div className="relative w-full max-w-md aspect-square md:aspect-[4/3] flex items-center justify-center animate-anti-gravity mb-20">
           {/* Glow/Pulse Effect */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-900/20 blur-[100px] rounded-full animate-glow-pulse -z-10 pointer-events-none" />
           
           {/* Placeholder for Person Image - Using a gradient circle as base */}
           <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-b from-red-500/10 to-transparent border border-white/5 backdrop-blur-sm flex items-center justify-center overflow-visible">
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -left-12 w-16 h-16 border border-white/10 rounded-2xl flex items-center justify-center bg-black/60 backdrop-blur-md animate-[float_6s_ease-in-out_infinite_reverse]">
                <span className="text-red-500 text-2xl">🧬</span>
              </div>
              
              <div className="absolute top-10 -right-10 w-16 h-16 border border-white/10 rounded-2xl flex items-center justify-center bg-black/60 backdrop-blur-md animate-[float_7s_ease-in-out_infinite_1s]">
                 <span className="text-red-500 text-2xl">❤️</span>
              </div>

               <p className="text-white/40 text-xs text-center px-8 z-20">
                  <span className="block mb-2 text-white/60 font-semibold">[Hero Image Placeholder]</span>
                  The world's most comprehensive and convenient healthcare system.
               </p>
           </div>
           
           {/* Caption Overlay */}
           <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 text-center">
            <div className="text-white/70 text-xs border border-white/10 bg-black/40 backdrop-blur-md p-4 rounded-xl shadow-2xl">
              The world's most comprehensive and convenient healthcare system, all-in-one platform for achieve our personal health.
            </div>
          </div>
        </div>
      </main>

      {/* "Staying Healthy" Video Section */}
      <section className="relative w-full py-20 px-6">
        <div className="relative max-w-[1454px] mx-auto h-[600px] md:h-[800px] rounded-[40px] overflow-hidden">
            {/* Video Background */}
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="/video/section_2_video.mp4" type="video/mp4" />
            </video>
            
            {/* Dark Overlay for text readability if needed, though image implies clean video. Adding slight gradient at bottom just in case. */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 p-8 md:p-16 z-10 max-w-2xl">
                <h2 className="text-4xl md:text-[60px] font-neue-montreal font-normal mb-6 leading-[1.1] text-transparent bg-clip-text bg-[linear-gradient(180deg,#FFFFFF_0%,#999999_143.07%)]">
                  Staying healthy <br/>
                  feel still impossible?
                </h2>
                <p className="text-[#C4C4C4] text-[27px] font-neue-montreal font-medium max-w-lg leading-relaxed">
                  Wearables, apps and advice bombard us daily, yet lifestyle disease is rising.
                </p>
            </div>
        </div>
      </section>

      {/* Basic Footer / Bottom Section */}
      <section className="relative py-24 px-6 bg-void-black">
        <div className="max-w-[1454px] mx-auto">
            
            {/* Circular Elements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
                {[
                    { title: "MENTAL HEALTH", color: "border-white/10" },
                    { title: "DIET & NUTRITION", color: "border-white/10" },
                    { title: "PHYSICAL FITNESS", color: "border-white/10" },
                    { title: "MEDICAL CARE", color: "border-white/10" }
                ].map((item, i) => (
                    <div key={i} className={`aspect-square rounded-full border ${item.color} flex items-center justify-center p-8 group hover:border-white/30 transition-colors cursor-default`}>
                        <span className="text-[10px] md:text-xs tracking-[0.2em] text-white/70 text-center font-medium group-hover:text-white transition-colors">
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>

            {/* Bottom Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start border-t border-white/10 pt-16">
                <div>
                     <h3 className="text-3xl md:text-4xl font-light text-white leading-tight">
                        Disconnect in <br/>
                        the modern health is <br/>
                        holding you back
                     </h3>
                </div>
                <div className="space-y-8 text-white/50 text-sm leading-relaxed max-w-md">
                    <p>
                        Your gym doesn't talk to your doctor.
                        Your doctor doesn't design your fitness plan.
                    </p>
                    <p>
                        You're left in the middle, trying to piece together generic advice, hoping for the best.
                    </p>
                </div>
            </div>
        </div>
      </section>
      
    </div>
  );
}
