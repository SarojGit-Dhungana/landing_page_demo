"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navLinks = [
  { label: "HOME", href: "/home" },
  { label: "ABOUT US", href: "/" },
  { label: "SERVICE", href: "/services" },
  { label: "DOWNLOAD", href: "/download" },
  { label: "NEWS", href: "/news" },
  { label: "GALLERY", href: "/gallery" },
];
export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="absolute top-4 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between px-6 md:px-30 py-4">
        <div className="bg-red-900 rounded-full w-10 h-10 md:w-12 md:h-12 text-white flex items-center justify-center cursor-pointer">
          LOGO
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-red-700"
                  : "text-black  drop-shadow-xl shadow-black  hover:text-red-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden md:block bg-red-800 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-900 transition"
        >
          CONTACT
        </Link>
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      
      {menuOpen && (
        <div className="md:hidden bg-transparent px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-semibold uppercase ${
                pathname === link.href ? "text-red-700" : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block bg-red-800 text-white px-4 py-2 rounded-full text-center text-sm font-semibold"
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}
