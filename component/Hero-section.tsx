import Image from "next/image";
import teamImage from "@/public/msg1.jpg";
import Header from "./Header";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Heropage() {
  return (
    <section className="relative w-full h-100 md:h-100">
      <Image
        src={teamImage}
        alt="team-banner"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/75 "></div>
      <Header />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <h2 className="text-red-900 font-bold tracking-widest text-3xl ">
          ABOUT US
        </h2>
        <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-8xl font-semibold backdrop-blur-xs text-gray-900 mt-4 opacity-60">
          Who are we
        </h1>
      </div>
      <div className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-2 z-10">
        <div className="bg-red-800 text-center rounded-full w-7 h-7 text-white cursor-pointer">
          <InstagramIcon fontSize="small" />
        </div>
        <div className="bg-blue-600 text-center rounded-full w-7 h-7 text-white cursor-pointer">
          <FacebookIcon fontSize="small" />
        </div>
        <div className="bg-red-600 text-center rounded-full w-7 h-7 text-white cursor-pointer">
          <YouTubeIcon fontSize="small" />
        </div>
        <div className="bg-sky-500 text-center rounded-full w-7 h-7 text-white cursor-pointer">
          <TwitterIcon fontSize="small" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-4 md:h-10 bg-red-900"></div>
    </section>
  );
}
