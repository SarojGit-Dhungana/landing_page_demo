"use client";

import Image from "next/image";
import teamImage from "@/public/msg1.jpg";
import Header from "./Header";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Heropage() {
  return (
    <section className="relative w-full min-h-[70vh] md:h-[60vh] overflow-hidden">
      <Image
        src={teamImage}
        alt="team-banner"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-white/75"></div>

      <div className="relative z-20">
        <Header />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 pt-20 md:pt-0">
        <h2 className="text-red-900 font-bold tracking-widest text-xl sm:text-2xl md:text-4xl">
          ABOUT US
        </h2>

        <h1 className="mt-3 font-semibold text-gray-900 opacity-70 text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight">
          Who are we
        </h1>
      </div>

      <div className="absolute hidden right-2 md:right-6 top-1/2 -translate-y-1/2 md:flex flex-col gap-3 z-10">
        <div className="bg-red-900 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white cursor-pointer">
          <InstagramIcon fontSize="small" />
        </div>

        <div className="bg-blue-600 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white cursor-pointer">
          <FacebookIcon fontSize="small" />
        </div>

        <div className="bg-red-600 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white cursor-pointer">
          <YouTubeIcon fontSize="small" />
        </div>

        <div className="bg-sky-500 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white cursor-pointer">
          <TwitterIcon fontSize="small" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-5 md:h-10 bg-red-900"></div>
    </section>
  );
}
