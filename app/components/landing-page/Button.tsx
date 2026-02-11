"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  isAssessment?: boolean;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

/**
 * Reusable Button component with predefined variants for the Cureocity landing page.
 */
export default function Button({ 
  children, 
  variant = "outline", 
  isAssessment = false,
  className = "", 
  onClick,
  fullWidth = false
}: ButtonProps) {
  const baseStyles = "rounded-[10px] md:rounded-[12px] transition-all backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer text-center inline-flex items-center justify-center whitespace-nowrap";
  
  const variants = {
    primary: "bg-white text-black hover:bg-white/90 px-[22px] py-[12px] text-lg md:text-[23px] font-medium",
    outline: "px-4 py-2.5 md:px-[22px] md:py-[12px] border border-white/20 text-white hover:bg-white/10 text-base md:text-[23px] font-medium"
  };

  const assessmentStyles = "btn-assessment-bg text-white px-[32px] py-[20px] border border-glass-edge text-[18px] font-normal hover:bg-white/10";

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${isAssessment ? assessmentStyles : variants[variant]} ${widthStyle} ${className}`}
    >
      {children}
    </button>
  );
}
