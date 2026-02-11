import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  gradient?: "hero" | "staying-healthy";
}

/**
 * Component for rendering text with the project's signature gradients.
 */
export default function GradientText({
  children,
  as: Tag = "span",
  className = "",
  gradient = "hero"
}: GradientTextProps) {
  const gradients = {
    hero: "bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(205,205,205,0.64)_100%)]",
    "staying-healthy": "bg-[linear-gradient(180deg,#FFFFFF_0%,#999999_143.07%)]"
  };

  return (
    <Tag className={`text-transparent bg-clip-text ${gradients[gradient]} ${className}`}>
      {children}
    </Tag>
  );
}
