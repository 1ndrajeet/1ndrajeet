"use client";
import { TerminalIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <div className="p-4 fixed top-0 left-0 right-0 z-50 bg-slate-900 md:border-b border-emerald-400 backdrop-blur-2xl">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 text-gray-100" prefetch={false}>
          <TerminalIcon className="h-6 w-6 text-gray-100" />
          <span className="text-lg font-bold">1ndrajeet</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#home" className="text-gray-100 hover:text-emerald-300 underline-offset-4 hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#about" className="text-gray-100 hover:text-emerald-300 underline-offset-4 hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#projects" className="text-gray-100 hover:text-emerald-300 underline-offset-4 hover:underline" prefetch={false}>
            Projects
          </Link>
          <Link href="#contact" className="text-gray-100 hover:text-emerald-300 underline-offset-4 hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-100 transition-transform duration-300 ease-in-out" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XIcon className={`h-6 w-6 transform transition-transform duration-1000 ease-in-out ${isMenuOpen ? "rotate-180" : ""}`} />
          ) : (
            <MenuIcon className={`h-6 w-6 transform transition-transform duration-1000 ease-in-out ${isMenuOpen ? "rotate-180" : ""}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} backdrop-blur-2xl mt-4 p-4`} 
      >
        <nav className="flex flex-col space-y-4">
          <Link href="#home" className="text-gray-100 hover:text-emerald-300 underline-offset-4 hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#about" className="text-gray-100 hover:text-emerald-300 underline-offset-4 hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#projects" className="text-gray-100 hover:text-emerald-300 underline-offset-4 hover:underline" prefetch={false}>
            Projects
          </Link>
          <Link href="#contact" className="text-gray-100 hover:text-emerald-300 underline-offset-4 hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
