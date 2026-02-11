"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/useAuthStore";
import Button from "@/app/components/landing-page/Button";
import Container from "@/app/components/landing-page/Container";
import GradientText from "@/app/components/landing-page/GradientText";
import GlassCard from "@/app/components/landing-page/GlassCard";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const loginMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 60, // optional, defaults to 60
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login failed");
      }

      return res.json();
    },
    onSuccess: (data) => {
      setAuth(data.accessToken, {
        id: data.id,
        username: data.username,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        image: data.image,
      });
      router.push("/dashboard");
    },
    onError: (err: Error) => {
      setErrorMsg(err.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    loginMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-void-black text-white relative overflow-hidden flex flex-col items-center justify-center p-4 selection:bg-[#FB404A]/30">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FB404A] opacity-10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FB404A] opacity-10 blur-[120px] rounded-full z-0" />

      {/* Logo */}
      <div className="relative z-10 mb-12">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Cureocity Logo"
            width={220}
            height={70}
            className="w-[180px] md:w-[220px] h-auto"
            priority
          />
        </Link>
      </div>

      <Container className="relative z-10 max-w-md w-full">
        <GlassCard className="flex flex-col p-8 md:p-10 w-full">
          <GradientText as="h1" className="text-3xl md:text-4xl font-neue-montreal font-normal mb-8 text-center">
            Welcome Back
          </GradientText>

          {errorMsg && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm text-center font-manrope">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-manrope text-nav-link">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="e.g. emilys"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                aria-label="Username"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#FB404A]/50 transition-all font-manrope outline-none"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-sm font-manrope text-nav-link">
                  Password
                </label>
                <a href="#" className="text-xs text-white/50 hover:text-white transition-colors font-manrope">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                aria-label="Password"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#FB404A]/50 transition-all font-manrope outline-none"
              />
            </div>

            <div className="pt-2">
              <Button 
                variant="outline" 
                fullWidth 
                className="py-4 text-lg bg-white/10 hover:bg-white/20 border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => {}} // Form submission handles this
                isAssessment={false}
              >
                {loginMutation.isPending ? "Signing In..." : "Sign In"}
              </Button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-[#868686] font-manrope">
            Default credentials: <span className="text-white/70">emilys</span> / <span className="text-white/70">emilyspass</span>
          </p>
        </GlassCard>
      </Container>
    </div>
  );
}
