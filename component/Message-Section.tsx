import React from "react";
import img1 from "@/public/msg1.jpg";
import ceo from "@/public/ceo.jpeg";
import Image from "next/image";
export default function MessagePage() {
  return (
    <section
      className="relative px-10 py-16 text-white grid md:grid-cols-2 gap-10 items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${img1.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 "></div>
      <div className="relative z-10">
        <h3 className="text-4xl mb-10">Message from founder</h3>
        <p className="text-gray-300 mb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          id asperiores recusandae necessitatibus perferendis a, quas cum nemo
          quasi quam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum
          repellendus iste voluptatem dolor fugiat vitae necessitatibus, ipsum
          laudantium dicta maiores excepturi! Ipsum impedit atque in recusandae
          commodi, nihil laudantium.
        </p>
        <button
          className="
        relative px-10 py-1
        rounded-xl
        border-2 border-red-700
        text-white font-semibold tracking-wide
        bg-transparent
        overflow-hidden
        transition-all duration-400 ease-out
        hover:shadow-lg hover:shadow-red-700/30
        hover:-translate-y-1
        group
      "
        >
          <span
            className="
          absolute bottom-0 right-0
          w-10 h-10 bg-red-700
          transition-all duration-400
        group-hover:w-full group-hover:h-80
          clip-triangle
        "
          ></span>
          <span className="relative z-10">View More</span>
        </button>
      </div>
      <div className="relative z-10 flex justify-center">
        <div className="w-70 h-80 rounded-xl">
          <Image
            src={ceo}
            alt="founder message"
            className="object-cover w-70 h-80 rounded-xl"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 bg-white/20 blur-3xl rounded-full"></div>
    </section>
  );
}
