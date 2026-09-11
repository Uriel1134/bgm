"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BGMLogo } from "./BGMLogo";
import { Menu, X, Calculator } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ACCUEIL", href: "/" },
    { name: "À PROPOS", href: "/a-propos" },
    { name: "SERVICES", href: "/services" },
    { name: "CATALOGUE", href: "/projets" },
    { name: "ESTIMATION", href: "/estimation" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`w-full border-b border-[#CA9625]/30 bg-[#024E7E] shadow-2xl transition-all duration-300 ${
          isScrolled ? "py-3 px-4 sm:px-8 lg:px-12" : "py-4 px-4 sm:px-8 lg:px-12"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          {/* Logo Image */}
          <Link href="/" className="shrink-0 flex items-center group">
            <BGMLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-bold tracking-wider whitespace-nowrap transition-all duration-200 relative py-1.5 ${
                    isActive
                      ? "text-[#CA9625] font-black"
                      : "text-white hover:text-[#CA9625]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CA9625] rounded-full shadow-[0_0_10px_#CA9625]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center shrink-0">
            <Link
              href="/estimation"
              className="btn-sunset-gradient px-5 py-2.5 rounded-xl text-xs font-extrabold tracking-wider whitespace-nowrap flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
            >
              <Calculator className="w-4 h-4 shrink-0" />
              <span>DEMANDER UN DEVIS</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/estimation"
              className="btn-sunset-gradient px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap"
            >
              Devis
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 bg-[#024E7E] border border-[#CA9625]/40 rounded-xl flex items-center justify-center text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#024E7E] flex flex-col justify-center items-center p-6 space-y-6 animate-in fade-in duration-200">
          <nav className="flex flex-col items-center gap-5 w-full max-w-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-bold tracking-wider whitespace-nowrap transition-colors ${
                    isActive ? "text-[#CA9625]" : "text-white hover:text-[#CA9625]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="w-full max-w-sm pt-6 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/estimation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-xl btn-sunset-gradient text-xs font-bold tracking-wider uppercase shadow-xl whitespace-nowrap"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
