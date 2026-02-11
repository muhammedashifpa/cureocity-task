"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/app/store/useAuthStore";
import Button from "@/app/components/landing-page/Button";
import Container from "@/app/components/landing-page/Container";
import GradientText from "@/app/components/landing-page/GradientText";
import GlassCard from "@/app/components/landing-page/GlassCard";
import CircleCard from "@/app/components/landing-page/CircleCard";

const METRICS = [
  { title: "Mental Health", value: "85%", status: "Optimal", color: "text-blue-400" },
  { title: "Diet & Nutrition", value: "72%", status: "Good", color: "text-emerald-400" },
  { title: "Physical Fitness", value: "94%", status: "Excellent", color: "text-purple-400" },
  { title: "Medical Care", value: "100%", status: "Up to date", color: "text-amber-400" },
];

export default function DashboardPage() {
  const router = useRouter();
  const { token, user, logout, role, _hasHydrated } = useAuthStore();

  // Route protection
  useEffect(() => {
    if (_hasHydrated && !token) {
      router.push("/login");
    }
  }, [_hasHydrated, token, router]);

  // Fetch current user data (verification/refresh)
  const { isLoading } = useQuery({
    queryKey: ["authMe"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Session expired");
      return res.json();
    },
    enabled: !!token && _hasHydrated,
    retry: 1,
  });

  if (!_hasHydrated) {
    return (
      <div className="min-h-screen bg-void-black flex items-center justify-center">
         <div className="w-8 h-8 border-2 border-[#FB404A] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!token) return null;

  return (
    <div className="min-h-screen bg-void-black text-white selection:bg-[#FB404A]/30 font-sans">
      
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <Container className="flex items-center justify-between py-4">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Cureocity Logo"
              width={140}
              height={40}
              className="w-[120px] h-auto"
            />
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-sm text-nav-link font-manrope">
              <span>Status:</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Syncing
              </span>
            </div>
            <div className="flex items-center gap-4">
               {user && (
                 <div className="hidden sm:block text-right">
                    <p className="text-xs font-medium text-white">{user.firstName} {user.lastName}</p>
                    <p className="text-[10px] text-nav-link uppercase tracking-wider">{role}</p>
                 </div>
               )}
               <button 
                 onClick={logout}
                 className="w-10 h-10 rounded-full border border-white/10 overflow-hidden bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group cursor-pointer"
                 title="Logout"
               >
                 {user?.image ? (
                   <Image src={user.image} alt="Avatar" width={40} height={40} className="w-full h-full object-cover" />
                 ) : (
                   <span className="text-xs font-medium">LO</span>
                 )}
               </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <p className="text-nav-link text-lg font-manrope">
                Good Morning, {user?.firstName || "User"} 
                {role === "admin" && <span className="ml-2 px-2 py-0.5 bg-[#FB404A]/20 text-[#FB404A] text-xs rounded-full border border-[#FB404A]/30">ADMIN MODE</span>}
              </p>
              <GradientText as="h1" className="text-4xl md:text-5xl font-neue-montreal font-normal">
                {role === "admin" ? "System Health Overview" : "Your Health Overview"}
              </GradientText>
            </div>
            <div className="flex gap-4">
                <Button variant="outline" className="px-6 py-3 text-base h-fit border-white/10 bg-white/5">
                  {role === "admin" ? "Export Data" : "Generate 360 Report"}
                </Button>
            </div>
          </div>

          {isLoading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-32 bg-white/5 rounded-2xl animate-pulse border border-white/10" />
                ))}
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {METRICS.map((metric, i) => (
                <GlassCard key={i} className="p-6 items-start justify-start flex flex-col group cursor-default">
                  <span className="text-[#868686] text-sm font-manrope mb-4 uppercase tracking-widest">
                    {role === "admin" ? `Avg. ${metric.title}` : metric.title}
                  </span>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className={`text-4xl font-neue-montreal ${metric.color}`}>{metric.value}</span>
                    <span className="text-xs text-[#868686] font-manrope">Score</span>
                  </div>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-manrope text-nav-link">
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                    {metric.status}
                  </div>
                </GlassCard>
              ))}
            </div>
          )}

          {/* Detailed Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Healthscape Insights */}
            <GlassCard className="lg:col-span-2 p-8 flex flex-col items-start min-h-[400px]">
              <div className="flex items-center justify-between w-full mb-8">
                <h2 className="text-2xl font-neue-montreal">
                  {role === "admin" ? "Global System Trends" : "Healthscape Insights"}
                </h2>
                <span className="text-xs text-[#868686] font-manrope uppercase tracking-widest">Last 7 Days</span>
              </div>
              
              <div className="flex-1 w-full flex items-end gap-3 px-2">
                {[40, 65, 45, 90, 60, 85, 75].map((h, i) => (
                  <div key={i} className="flex-1 group relative">
                    <div 
                      className="w-full bg-white/5 rounded-t-lg transition-all duration-500 group-hover:bg-[#FB404A]/40"
                      style={{ height: `${h}%` }}
                    />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-manrope text-[#FB404A]">
                      {h}%
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between w-full mt-6 text-[#868686] text-xs font-manrope">
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
                <span>SUN</span>
              </div>
            </GlassCard>

            {/* Quick Actions / Status */}
            <div className="space-y-8">
              <GlassCard className="p-8 flex flex-col items-center text-center">
                 <div className="w-24 h-24 mb-6 relative">
                    <div className="absolute inset-0 rounded-full border-4 border-white/5" />
                    <div className="absolute inset-0 rounded-full border-4 border-[#FB404A]-400 border-t-transparent -rotate-45" style={{ borderColor: '#FB404A' }} />
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                       <span className="text-xl font-neue-montreal">72%</span>
                       <span className="text-[8px] font-manrope text-[#868686] uppercase">
                          {role === "admin" ? "Uptime" : "Hydration"}
                       </span>
                    </div>
                 </div>
                 <h3 className="text-lg font-neue-montreal mb-2">
                    {role === "admin" ? "Platform Integrity" : "Staying Healthy"}
                 </h3>
                 <p className="text-xs text-[#868686] font-manrope mb-6">
                    {role === "admin" 
                      ? "All systems reporting optimal parameters across nodes." 
                      : "You've reached 72% of your daily water intake goal."}
                 </p>
                 <Button variant="outline" className="w-full py-2.5 text-sm border-white/10">
                    {role === "admin" ? "View Logs" : "Log Water"}
                 </Button>
              </GlassCard>

              <div className="grid grid-cols-2 gap-4">
                 <CircleCard className="aspect-square p-4 border-white/5 bg-white/5 group hover:bg-white/10 transition-all cursor-pointer">
                    <div className="flex flex-col items-center text-center gap-2">
                       <span className="text-lg font-neue-montreal">DNA</span>
                       <span className="text-[10px] text-[#868686] font-manrope uppercase">Portal</span>
                    </div>
                 </CircleCard>
                 <CircleCard className="aspect-square p-4 border-white/5 bg-white/5 group hover:bg-white/10 transition-all cursor-pointer">
                    <div className="flex flex-col items-center text-center gap-2">
                       <span className="text-lg font-neue-montreal">Chat</span>
                       <span className="text-[10px] text-[#868686] font-manrope uppercase">Doctor</span>
                    </div>
                 </CircleCard>
              </div>
            </div>

          </div>
        </Container>
      </main>

    </div>
  );
}
