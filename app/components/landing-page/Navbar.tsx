"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuthStore } from "@/app/store/useAuthStore";
import Button from "./Button";

const NAV_LINKS = ["Healthscape", "Cureocity App", "360 Assessment", "Flourish"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, token } = useAuthStore();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-glass-edge backdrop-blur-[25.8px]">
        <div className="flex items-center justify-between px-6 py-6 max-w-[1454px] mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Cureocity Logo"
              width={180}
              height={60}
              className="w-[140px] md:w-[180px] h-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 border border-white/10 rounded-full px-9 py-6 bg-black/50 backdrop-blur-md">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[18px] text-nav-link hover:text-white transition-colors duration-200 font-normal whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            {token ? (
              <Link href="/dashboard" className="flex items-center gap-3 group">
                <div className="text-right">
                   <p className="text-xs font-medium text-white group-hover:text-[#FB404A] transition-colors">{user?.firstName}</p>
                   <p className="text-[10px] text-nav-link uppercase tracking-widest">Dashboard</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden bg-white/5 flex items-center justify-center group-hover:bg-[#FB404A]/10 transition-all">
                  {user?.image ? (
                    <Image src={user.image} alt="Avatar" width={40} height={40} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs font-medium">U</span>
                  )}
                </div>
              </Link>
            ) : (
              <Link href="/login">
                <Button isAssessment aria-label="Get a visit or assessment">
                  Get a Assessment
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Menu Icon */}
          <button 
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 h-screen w-screen bg-black z-100 lg:hidden flex flex-col items-center justify-start pt-32 px-6 transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-8 w-full max-w-sm">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href="#"
                className="text-2xl text-nav-link hover:text-white transition-colors duration-200 font-normal w-full text-center py-2 border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <Link href="/login" className="w-full">
              <Button 
                 isAssessment 
                 fullWidth 
                 className="mt-8 py-5 text-lg shadow-lg active:scale-[0.98]"
                 onClick={() => setIsOpen(false)}
              >
                Get a Assessment
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
