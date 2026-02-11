"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = ["Healthscape", "Cureocity App", "360 Assessment", "Flourish"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

          {/* Desktop Assessment Button */}
          <div className="hidden md:block">
            <button className="btn-assessment-bg text-white px-[32px] py-[20px] rounded-[12px] border border-glass-edge text-[18px] font-normal cursor-pointer hover:bg-white/10 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all">
              Get a Assessment
            </button>
          </div>

          {/* Mobile Hamburger Menu Icon */}
          <button 
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-[110]"
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
          className={`fixed inset-0 h-screen w-screen bg-black z-[100] lg:hidden flex flex-col items-center justify-start pt-32 px-6 transition-all duration-500 ease-in-out ${
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
            <button 
              className="mt-8 btn-assessment-bg text-white w-full py-5 rounded-[12px] border border-glass-edge text-lg font-normal shadow-lg transition-transform active:scale-[0.98]"
              onClick={() => setIsOpen(false)}
            >
              Get a Assessment
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
