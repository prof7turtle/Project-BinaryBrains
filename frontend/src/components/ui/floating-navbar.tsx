"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
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
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldShow = latest > 100;
    setVisible(shouldShow);
    if (!shouldShow) {
      setMenuOpen(false);
    }
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
            "fixed inset-x-0 top-4 z-[100] mx-auto w-[calc(100vw-1rem)] max-w-5xl rounded-2xl border border-border bg-background/85 px-2 py-2 shadow-lg backdrop-blur-md md:w-auto md:max-w-fit md:rounded-full md:px-4",
            className,
          )}
        >
          <div className="hidden items-center justify-center gap-1 md:flex">
            <div className="flex items-center gap-1">
              {navItems.map((item, idx) => (
                <NavLink
                  key={`float-nav-${idx}`}
                  to={item.link}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground",
                      isActive && "bg-muted text-foreground",
                    )
                  }
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
            {extraAction && <div className="ml-2 shrink-0">{extraAction}</div>}
          </div>

          <div className="flex w-full md:hidden items-center justify-between gap-2">
            <NavLink
              to="/"
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-foreground"
            >
              BinaryBrains
            </NavLink>
            <div className="flex items-center gap-2">
              {extraAction && <div className="shrink-0">{extraAction}</div>}
              <button
                type="button"
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="rounded-full p-2 text-foreground/80 hover:bg-muted hover:text-foreground"
              >
                {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.16 }}
                className="md:hidden absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-2xl border border-border bg-background px-3 py-3 shadow-xl"
              >
                <div className="grid grid-cols-2 gap-2">
                  {navItems.map((item, idx) => (
                    <NavLink
                      key={`mobile-float-nav-${idx}`}
                      to={item.link}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "rounded-xl px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-muted hover:text-foreground",
                          isActive && "bg-muted text-foreground",
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
