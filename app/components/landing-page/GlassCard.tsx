import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Reusable glass-morphism card component with backdrop blur and subtle borders.
 */
export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-xl ${className}`}>
      {children}
    </div>
  );
}
