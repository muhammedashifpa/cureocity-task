import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "footer" | "main";
}

/**
 * Standard layout container for the Cureocity landing page.
 * Maintains consistent max-width and horizontal padding.
 */
export default function Container({
  children,
  className = "",
  as: Tag = "div"
}: ContainerProps) {
  return (
    <Tag className={`max-w-[1454px] mx-auto px-4 md:px-6 ${className}`}>
      {children}
    </Tag>
  );
}
