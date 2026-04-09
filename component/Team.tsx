import React from "react";
import img1 from "@/public/img1.jpg";
import img2 from "@/public/img2.jpg";
import msg1 from "@/public/msg1.jpg";
import ceo from "@/public/ceo.jpeg";
import Image from "next/image";

export default function Team() {
  return (
    <section className="text-gray-800 px-10 py-2 grid md:grid-cols-2 gap-2 items-center border-2 border-gray-600">
      <div className="px-5">
        <h3 className="text-5xl font-semibold mb-8 text-red-900 ">
          MEET OUR TEAM
        </h3>
        <p className="text-gray-500 text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          molestias rerum reprehenderit asperiores ex aliquam dolorum nisi qui
          error placeat atque aliquid, at ipsam. Distinctio quia consequuntur
          nisi, fuga deserunt nulla omnis recusandae a obcaecati, commodi,
          beatae qui ratione in? Autem, cumque voluptatem. Aut cum cupiditate
          officia architecto velit ea!
        </p>
        <button
          className="
        relative px-10 py-1
        rounded-xl
        border-2 border-red-900
        text-red-900 font-semibold tracking-wide
        bg-transparent
        overflow-hidden
        transition-all duration-400 ease-out
        hover:shadow-lg hover:shadow-red-900/30
        hover:-translate-y-1
        group
      "
        >
          <span
            className="
          absolute bottom-0 right-0
          w-10 h-10 bg-red-900
          transition-all duration-400
        group-hover:w-full group-hover:h-96
          clip-triangle
        "
          ></span>
          <span className="relative z-10 font-semibold text-xl group-hover:text-white">
            View More
          </span>
        </button>
      </div>
      <div className="grid grid-cols-3 w-lg px-10 py-6">
        <div className="relative w-24 h-34 rounded-full overflow-hidden">
          <Image src={img1} alt="team1" fill className="object-cover" />
        </div>
        <div className="relative w-24 h-40 rounded-full overflow-hidden p-10">
          <Image src={img2} alt="team2" fill className="object-cover" />
        </div>
        <div className="relative w-28 h-96 rounded-full overflow-hidden">
          <Image src={msg1} alt="team3" fill className="object-cover" />
        </div>
        <div className="relative w-24 h-40 -mt-52 rounded-full overflow-hidden px-10">
          <Image src={ceo} alt="team4" fill className="object-cover" />
        </div>
        <div className="relative w-40 h-28 -mt-52 -ml-10 rounded-full overflow-hidden">
          <Image src={img1} alt="team5" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
