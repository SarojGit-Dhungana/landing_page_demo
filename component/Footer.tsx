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
    <footer className="relative bg-red-950 text-white text-center p-5 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 bottom-10 mb-2"></div>
      <div className="relative z-10">
        <div className=" flex justify-center gap-4 mb-4">
          <InstagramIcon fontSize="small" />
          <FacebookIcon fontSize="small" />
          <TwitterIcon fontSize="small" />
          <YouTubeIcon fontSize="small" />
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-4 text-[12px] font-bold">
          {footerItems.map((items) => (
            <span
              key={items.label}
              className="transition-colors cursor-pointer"
            >
              {items.label}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-5 text-sm mb-8">
          <span>Privacy Policy</span>
          <div className="hidden md:block w-px h-auto bg-gray-200" />
          <span>Terms & conditions</span>
        </div>

        <p className="text-xs text-white/80">
          ©2025 Digo Cooperative Ltd. All rights reserved
        </p>
      </div>
    </footer>
  );
}
