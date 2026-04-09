import React from "react";
import per1 from "@/public/person1.jpg";
import per2 from "@/public/person2.jpg";
import per3 from "@/public/person3.jpg";
import per4 from "@/public/person4.jpg";
import per5 from "@/public/person5.jpg";
import Image from "next/image";

export default function Team() {
  return (
    <section className="text-gray-800 px-4 sm:px-6 md:px-10 py-6 md:py-2 grid lg:grid-cols-2 grid-cols-1 gap-6 md:gap-2 items-center border-2 border-gray-600">
      <div className="px-2 sm:px-1 py-5 text-center md:text-left">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 text-red-900">
          MEET OUR TEAM
        </h3>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-6 md:mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          molestias rerum reprehenderit asperiores ex aliquam dolorum nisi qui
          error placeat atque aliquid, at ipsam. Distinctio quia consequuntur
          nisi, fuga deserunt nulla omnis recusandae a obcaecati, commodi,
          beatae qui ratione in? Autem, cumque voluptatem. Aut cum cupiditate
          officia architecto velit ea!
        </p>

        <button
          className="
          relative px-8 md:px-10 py-1
          rounded-xl
          border-4 border-red-900
          text-black font-semibold tracking-wide
          bg-transparent
          overflow-hidden
          transition-all duration-300 ease-out
          hover:shadow-lg hover:shadow-red-700/30
          hover:-translate-y-1
          group
        "
        >
          <span
            className="
            absolute bottom-0 right-0
            w-10 h-10 bg-red-900
            transition-all duration-300
            group-hover:w-full group-hover:h-80
            clip-triangle
          "
          ></span>
          <span className="relative z-10 group-hover:text-white">
            View More
          </span>
        </button>
      </div>

      <div className=" grid grid-cols-3  justify-items-center  lg:w-lg md:px-10 py-6 scale-90 sm:scale-100">
        <div className="relative w-24 h-34 rounded-full overflow-hidden">
          <Image src={per1} alt="team1" fill className="object-cover" />
        </div>
        <div className="relative w-24 h-40 rounded-full overflow-hidden p-10">
          <Image src={per2} alt="team2" fill className="object-cover" />
        </div>
        <div className="relative w-28 h-96 rounded-full overflow-hidden ">
          <Image src={per3} alt="team3" fill className="object-cover" />
        </div>
        <div className="relative w-24 h-50 -mt-40 sm:-mt-44 md:-mt-52 rounded-full overflow-hidden px-10">
          <Image src={per4} alt="team4" fill className="object-cover" />
        </div>
        <div
          className="relative 
        w-20 h-40 -mt-40 sm:-mt-44 md:-mt-52 -ml-6 rounded-full overflow-hidden"
        >
          <Image src={per5} alt="team5" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
