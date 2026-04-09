import React from "react";
import Image from "next/image";
import img1 from "@/public/img1.jpg";
import img2 from "@/public/img2.jpg";

export default function StoryPage() {
  return (
    <section className="px-4 md:px-10 mb-10">
      <div className="flex flex-col justify-center items-center py-5 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-2 text-red-900">
          Our Story
        </h3>
        <p className="font-semibold text-sm md:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 px-4 items-center -mt-5">
        <div className="relative w-full h-75 md:h-100">
          <div className="absolute top-2 right-2 md:top-12 md:right-1 text-center w-60 bg-red-900 text-white p-4 md:p-6 rounded-xl shadow-lg z-20">
            <p className="text-xl md:text-3xl font-semibold">85k+</p>
            <p className="text-sm md:text-base">Members</p>
          </div>
          <div className="absolute bottom-8 text-center left-2 md:left-0 bg-red-900 w-60 text-white p-4 md:p-6 rounded-xl shadow-lg z-20">
            <p className="text-xl md:text-3xl font-semibold">20 years</p>
            <p className="text-sm md:text-base">of building trust</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[70%] h-35 md:w-[60%] md:h-52 rounded-xl overflow-hidden shadow-lg z-10 -mt-24">
              <Image src={img1} alt="team1" fill className="object-cover" />
            </div>
            <div className="relative w-[70%] h-35 md:w-[60%] md:h-52 rounded-xl overflow-hidden shadow-xl z-20 mt-36 -ml-15 md:-ml-24">
              <Image src={img2} alt="team2" fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-gray-800 text-sm md:text-lg font-semibold max-w-xl text-center md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
            accusantium aperiam ipsam, optio voluptatem voluptatum officia
            cumque iusto deserunt, quidem enim hic quisquam amet. Voluptatibus,
            harum. Maiores delectus quos dolore! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita tenetur voluptatem aperiam
            mollitia facere est repellendus alias, optio ratione corporis
            dolorum provident sunt earum id deleniti, minima a. Dolor, tempore!
          </p>
        </div>
      </div>
    </section>
  );
}
