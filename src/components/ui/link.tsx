import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LinkProps {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export function Link({ href, className, onClick, children }: LinkProps) {
  return (
    <a href={href} onClick={onClick} className={cn("hover:opacity-70 w-full h-full", className)}>
      {children}
    </a>
  );
}
