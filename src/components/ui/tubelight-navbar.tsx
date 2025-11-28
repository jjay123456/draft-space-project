"use client";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    const currentItem = items.find((item) => item.url === location.pathname);
    return currentItem ? currentItem.name : items[0].name;
  });
  const [isMobile, setIsMobile] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const navContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentItem = items.find((item) => item.url === location.pathname);
    if (currentItem) {
      setActiveTab(currentItem.name);
    }
  }, [location.pathname, items]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    const updateIndicatorPosition = () => {
      const activeIndex = items.findIndex((item) => item.name === activeTab);
      const activeElement = navItemsRef.current[activeIndex];
      const container = navContainerRef.current;

      if (activeElement && container) {
        const containerRect = container.getBoundingClientRect();
        const elementRect = activeElement.getBoundingClientRect();
        
        setIndicatorStyle({
          left: elementRect.left - containerRect.left,
          width: elementRect.width,
        });
      }
    };

    updateIndicatorPosition();
    window.addEventListener("resize", updateIndicatorPosition);
    return () => window.removeEventListener("resize", updateIndicatorPosition);
  }, [activeTab, items]);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 pointer-events-none",
        className,
      )}
    >
      <nav ref={navContainerRef} className="relative flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg pointer-events-auto">
        <motion.div
          className="absolute bg-primary/5 rounded-full -z-10 pointer-events-none"
          animate={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
          initial={false}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 40,
          }}
          style={{
            height: "calc(100% - 8px)",
            top: "4px",
          }}
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full pointer-events-none">
            <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2 pointer-events-none" />
            <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1 pointer-events-none" />
            <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2 pointer-events-none" />
          </div>
        </motion.div>
        
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          return (
            <RouterLink
              key={item.name}
              ref={(el) => (navItemsRef.current[index] = el)}
              to={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors whitespace-nowrap",
                "text-foreground/80 hover:text-primary",
                isActive && "text-primary",
              )}
            >
              <span className="hidden md:inline whitespace-nowrap">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
            </RouterLink>
          );
        })}
      </nav>
    </div>
  );
}
