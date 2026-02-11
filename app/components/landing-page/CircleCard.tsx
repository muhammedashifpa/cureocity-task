import { ReactNode } from "react";

interface CircleCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Specialized circular card component used in the footer section.
 */
export default function CircleCard({ children, className = "" }: CircleCardProps) {
  return (
    <div className={`w-full aspect-square rounded-full border border-[#FFFFFF26] flex items-center justify-center p-4 md:p-8 hover:scale-105 transition-transform duration-300 cursor-default bg-black/20 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}
