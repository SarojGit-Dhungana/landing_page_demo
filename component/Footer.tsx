import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const footerItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICE", href: "/service" },
  { label: "DOWNLOAD", href: "/download" },
  { label: "NEWS", href: "/news" },
  { label: "GALLERY", href: "/gallery" },
];

export default function Footer() {
  return (
    <footer className="relative bg-red-950 text-white text-center px-4 sm:px-6 py-6 sm:py-8 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 bottom-12 mb-2"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex justify-center gap-4 sm:gap-5 mb-4 text-lg">
          <InstagramIcon fontSize="small" />
          <FacebookIcon fontSize="small" />
          <TwitterIcon fontSize="small" />
          <YouTubeIcon fontSize="small" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 text-sm font-bold">
          {footerItems.map((items) => (
            <span
              key={items.label}
              className="cursor-pointer hover:text-red-600 transition-colors"
            >
              {items.label}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 text-xs sm:text-sm mb-6">
          <span className="cursor-pointer hover:text-red-300">
            Privacy Policy
          </span>
          <div className="hidden sm:block w-px h-4 bg-gray-300" />
          <span className="cursor-pointer hover:text-red-300">
            Terms & conditions
          </span>
        </div>

        <p className="text-[10px] sm:text-xs text-white/80">
          ©2025 Digo Cooperative Ltd. All rights reserved
        </p>
      </div>
    </footer>
  );
}
