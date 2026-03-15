"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
  extraAction?: React.ReactNode;
}

export const FloatingNav = ({ navItems, className, extraAction }: FloatingNavProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          ref={ref}
          className={cn(
            "fixed inset-x-0 top-4 z-[100] mx-auto flex max-w-fit items-center justify-center gap-1 rounded-full border border-border bg-background/80 px-4 py-2 shadow-lg backdrop-blur-md",
            className,
          )}
        >
          {navItems.map((item, idx) => (
            <Link
              key={`float-nav-${idx}`}
              to={item.link}
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.icon && <span>{item.icon}</span>}
              <span>{item.name}</span>
            </Link>
          ))}
          {extraAction && <>{extraAction}</>}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
