"use client";

import Link from "next/link";
import Image from "next/image";
import team from "@/public/team.jpg";
import { usePathname } from "next/navigation";
const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICE", href: "/service" },
  { label: "DOWNLOAD", href: "/download" },
  { label: "NEWS", href: "/news" },
  { label: "GALLERY", href: "/gallery" },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="flex items-center justify-between px-6 md:px-30 py-4">
        <div className="bg-red-900 text-center rounded-full w-15 h-15 text-white cursor-pointer"></div>
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-wide transition-colors 
              ${
                pathname === link.href
                  ? "text-red-700"
                  : "text-gray-700 hover:text-red-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="bg-red-800 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-900 transition"
        >
          CONTACT
        </Link>
      </div>
    </header>
  );
}
