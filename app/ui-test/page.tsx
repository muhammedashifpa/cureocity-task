import Image from "next/image";
import Navbar from "@/app/components/Navbar";

export default function UITestPage() {
  return (
    <div className="min-h-screen bg-void-black text-white relative overflow-hidden font-sans selection:bg-blue-500/30">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-start pt-[120px] md:pt-[182px] pb-20 px-4 text-center min-h-[0vh]">
        
        <h1 className="text-4xl sm:text-5xl md:text-[100px] font-neue-montreal font-normal mb-8 max-w-4xl mx-auto leading-[1.1] text-transparent bg-clip-text bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(205,205,205,0.64)_100%)]">
          Built-in with <br />
          the Science of you
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <button className="w-full sm:w-auto px-4 py-2.5 md:px-[22px] md:py-[12px] rounded-[10px] md:rounded-[12px] border border-white/20 text-white hover:bg-white/10 transition-all text-base md:text-[23px] font-medium backdrop-blur-sm">
            Book a consultation slot
          </button>
          <button className="w-full sm:w-auto px-4 py-2.5 md:px-[22px] md:py-[12px] rounded-[10px] md:rounded-[12px] border border-white/20 text-white hover:bg-white/10 transition-all text-base md:text-[23px] font-medium backdrop-blur-sm">
            Get a visit
          </button>
        </div>

        {/* Hero Visuals */}
        <div className="relative w-full max-w-[800px] mx-auto">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-900/20 blur-[100px] rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-red-500/10 -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-red-500/5 -z-10" />

            {/* Main Image */}
            <div className="relative z-10">
                <Image 
                    src="/image/hero_image_athlet.png"
                    alt="Hero Athlete"
                    width={600}
                    height={800}
                    className="w-full h-auto mx-auto mask-image-gradient-b"
                    priority
                />
            </div>

            {/* Floating Card: DNA (Left) */}
            <div className="absolute top-[20%] left-[-2%] md:left-[-10%] w-20 h-20 md:w-32 md:h-32 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center p-3 md:p-4 z-20 shadow-xl">
                 <Image 
                    src="/image/dna.svg"
                    alt="DNA Icon"
                    width={80}
                    height={80}
                    className="w-full h-auto"
                 />
            </div>

             {/* Floating Card: Workout (Right) */}
            <div className="absolute top-[15%] right-[-2%] md:right-[-10%] w-20 h-20 md:w-32 md:h-32 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center p-3 md:p-4 z-20 shadow-xl">
                 <Image 
                    src="/image/workout.svg"
                    alt="Workout Icon"
                    width={80}
                    height={80}
                    className="w-full h-auto"
                 />
            </div>

            {/* Bottom Glass Overlay */}
            <div className="absolute bottom-[2%] md:bottom-[5%] left-1/2 -translate-x-1/2 w-[95%] md:w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.07)_100%)] backdrop-blur-[16.928px] border border-[#FFFFFF21] rounded-[20px] p-3 sm:p-4 md:p-8 z-30">
                <p className="text-white text-center text-sm sm:text-base md:text-[27px] font-manrope font-medium leading-[1.3] tracking-[0]">
                    The world’s most comprehensive <br className="hidden md:block" />
                    and convenient healthcare system , all-in-one platform <br className="hidden md:block" />
                    for achieve our personal health.
                </p>
            </div>
        </div>


      </main>

      {/* "Staying Healthy" Video Section */}
      <section className="relative w-full py-12 md:py-20 px-4 md:px-6">
        <div className="relative max-w-[1454px] mx-auto h-[500px] md:h-[800px] rounded-[30px] md:rounded-[40px] overflow-hidden">
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
            <div className="absolute bottom-0 left-0 p-6 md:p-16 z-10 max-w-2xl">
                <h2 className="text-3xl md:text-[60px] font-neue-montreal font-normal mb-4 md:mb-6 leading-[1.1] text-transparent bg-clip-text bg-[linear-gradient(180deg,#FFFFFF_0%,#999999_143.07%)]">
                  Staying healthy <br/>
                  feel still impossible?
                </h2>
                <p className="text-[#C4C4C4] text-lg md:text-[27px] font-neue-montreal font-medium max-w-lg leading-relaxed">
                  Wearables, apps and advice bombard us daily, yet lifestyle disease is rising.
                </p>
            </div>
        </div>
      </section>

      {/* Basic Footer / Bottom Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-6 bg-void-black">
        <div className="max-w-[1454px] mx-auto">
            
            {/* Circular Elements */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-[98px] mb-20 md:mb-32">
                {[
                    { title: "MENTAL HEALTH" },
                    { title: "DIET & NUTRITION" },
                    { title: "PHYSICAL FITNESS" },
                    { title: "MEDICAL CARE" }
                ].map((item, i) => (
                    <div key={i} className="w-full aspect-square rounded-full border border-[#FFFFFF26] flex items-center justify-center p-4 md:p-8 hover:scale-105 transition-transform duration-300 cursor-default bg-black/20 backdrop-blur-sm">
                        <span className="text-xs sm:text-[18px] font-neo-sans font-medium text-white text-center leading-[1.3] tracking-[0.13em]">
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>

            {/* Bottom Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start border-t border-white/10 pt-12 md:pt-16">
                <div>
                     <h3 className="text-3xl md:text-[60px] font-normal text-white leading-[1.01] tracking-[0]">
                        How do you know <br/>
                        your complete health picture?
                     </h3>
                </div>
                <div className="space-y-6 md:space-y-8 text-[#868686] text-lg md:text-[27px] font-manrope font-medium leading-[1.3] tracking-[0] max-w-2xl">
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
