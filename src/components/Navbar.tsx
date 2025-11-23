"use client";

import React, { useState, useEffect } from 'react';
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Menu } from "lucide-react"; // Icon for the menu button
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle, // Import Title for accessibility
  SheetDescription, // Import Description for accessibility
} from "~/components/ui/sheet";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Tech Stack", href: "#tech" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu on click
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        isScrolled 
          ? "bg-slate-950/80 backdrop-blur-md border-slate-800 py-4" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter text-slate-100 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          My<span className="text-blue-500">Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-md hover:text-blue-400",
                activeSection === item.href.substring(1)
                  ? "text-blue-400 bg-blue-400/10"
                  : "text-slate-400"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation (The Sheet) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-100">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-950 border-slate-800 text-slate-100">
              {/* Hidden Title/Desc for Screen Readers/Accessibility */}
              <SheetTitle className="hidden">Mobile Navigation Menu</SheetTitle>
              <SheetDescription className="hidden">
                Navigation links for mobile devices
              </SheetDescription>

              <div className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-blue-400",
                      activeSection === item.href.substring(1)
                        ? "text-blue-400"
                        : "text-slate-400"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}