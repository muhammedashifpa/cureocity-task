import Image from "next/image";
import Navbar from "@/app/components/landing-page/Navbar";
import Button from "@/app/components/landing-page/Button";
import Container from "@/app/components/landing-page/Container";
import GradientText from "@/app/components/landing-page/GradientText";
import GlassCard from "@/app/components/landing-page/GlassCard";
import CircleCard from "@/app/components/landing-page/CircleCard";

export default function UITestPage() {
  return (
    <div className="min-h-screen bg-void-black text-white relative overflow-hidden font-sans selection:bg-blue-500/30">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Container as="main" className="relative z-10 flex flex-col items-center justify-start pt-[120px] md:pt-[182px] pb-20 text-center min-h-[0vh]">
        
        <GradientText as="h1" className="text-4xl sm:text-5xl md:text-[100px] font-neue-montreal font-normal mb-8 max-w-4xl mx-auto leading-[1.1]">
          Built-in with <br />
          the Science of you
        </GradientText>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          <Button variant="outline" fullWidth>
            Book a consultation slot
          </Button>
          <Button variant="outline" fullWidth>
            Get a visit
          </Button>
        </div>

        {/* Hero Visuals */}
        <div className="relative w-full max-w-[800px] mx-auto">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#2244FF] opacity-10 blur-[120px] rounded-full z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-void-black opacity-40 blur-[80px] rounded-full z-0" />
            
            {/* Main Image */}
            <div className="relative z-10 mask-image-gradient-b">
                <Image 
                    src="/image/hero_image_athlet.png"
                    alt="Hero Athlete"
                    width={1200}
                    height={1200}
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>

            {/* Floating Card: DNA (Left) */}
            <GlassCard className="absolute top-[20%] left-[-2%] md:left-[-10%] w-20 h-20 md:w-32 md:h-32 p-3 md:p-4 z-20 shadow-xl">
                 <Image 
                    src="/image/dna.svg"
                    alt="DNA Icon"
                    width={80}
                    height={80}
                    className="w-full h-auto"
                 />
            </GlassCard>

             {/* Floating Card: Workout (Right) */}
            <GlassCard className="absolute top-[15%] right-[-2%] md:right-[-10%] w-20 h-20 md:w-32 md:h-32 p-3 md:p-4 z-20 shadow-xl">
                 <Image 
                    src="/image/workout.svg"
                    alt="Workout Icon"
                    width={80}
                    height={80}
                    className="w-full h-auto"
                 />
            </GlassCard>

            {/* Bottom Glass Overlay */}
            <div className="absolute bottom-[2%] md:bottom-[5%] left-1/2 -translate-x-1/2 w-[95%] md:w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.07)_100%)] backdrop-blur-[16.928px] border border-[#FFFFFF21] rounded-[20px] p-3 sm:p-4 md:p-8 z-30">
                <p className="text-white text-center text-sm sm:text-base md:text-[27px] font-manrope font-medium leading-[1.3] tracking-[0]">
                    The world’s most comprehensive <br className="hidden md:block" />
                    and convenient healthcare system , all-in-one platform <br className="hidden md:block" />
                    for achieve our personal health.
                </p>
            </div>
        </div>


      </Container>

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
            <div className="absolute bottom-0 left-0 p-6 md:p-16 z-10 max-w-2xl text-left">
                <GradientText as="h2" gradient="staying-healthy" className="text-3xl md:text-[60px] font-neue-montreal font-normal mb-4 md:mb-6 leading-[1.1]">
                  Staying healthy <br/>
                  feel still impossible?
                </GradientText>
                <p className="text-[#C4C4C4] text-lg md:text-[27px] font-neue-montreal font-medium max-w-lg leading-relaxed">
                  Wearables, apps and advice bombard us daily, yet lifestyle disease is rising.
                </p>
            </div>
        </div>
      </section>

      {/* Basic Footer / Bottom Section */}
      <Container as="section" className="relative py-16 md:py-24 bg-void-black">
            {/* Circular Elements */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-[98px] mb-20 md:mb-32">
                {[
                    { title: "MENTAL HEALTH" },
                    { title: "DIET & NUTRITION" },
                    { title: "PHYSICAL FITNESS" },
                    { title: "MEDICAL CARE" }
                ].map((item, i) => (
                    <CircleCard key={i}>
                        <span className="text-xs sm:text-[18px] font-neo-sans font-medium text-white text-center leading-[1.3] tracking-[0.13em]">
                            {item.title}
                        </span>
                    </CircleCard>
                ))}
            </div>

            {/* Bottom Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start border-t border-white/10 pt-12 md:pt-16">
                <div className="text-left">
                     <h3 className="text-3xl md:text-[60px] font-normal text-white leading-[1.01] tracking-[0]">
                        How do you know <br/>
                        your complete health picture?
                     </h3>
                </div>
                <div className="space-y-6 md:space-y-8 text-[#868686] text-lg md:text-[27px] font-manrope font-medium leading-[1.3] tracking-[0] max-w-2xl text-left">
                    <p>
                        Your gym doesn't talk to your doctor.
                        Your doctor doesn't design your fitness plan.
                    </p>
                    <p>
                        You're left in the middle, trying to piece together generic advice, hoping for the best.
                    </p>
                </div>
            </div>
      </Container>
      
    </div>
  );
}
