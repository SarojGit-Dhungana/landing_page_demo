import React from "react";
import Image from "next/image";
import img1 from "@/public/img1.jpg";
import img2 from "@/public/img2.jpg";

export default function StoryPage() {
  return (
    <section className="px-4 sm:px-6 md:px-10 mb-12">
      <div className="flex flex-col justify-center items-center py-6 text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-red-900">
          Our Story
        </h3>
        <p className="font-semibold text-lg sm:text-xl text-gray-600 max-w-md sm:max-w-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 gap-2 lg:hidden">
            <div className="relative w-full h-44 sm:h-48 md:h-56 rounded-xl overflow-hidden shadow-lg ">
              <Image src={img1} alt="team1" fill className="object-cover" />
            </div>

            <div className="relative w-full h-44 sm:h-48 md:h-56 rounded-xl overflow-hidden shadow-lg">
              <Image src={img2} alt="team2" fill className="object-cover" />
            </div>

            <div className="flex w-full justify-center gap-4 mt-2">
              <div className=" w-96  bg-red-900 text-white p-4 rounded-xl text-center shadow-lg">
                <p className="text-xl sm:text-2xl font-semibold">85k+</p>
                <p className="text-sm">Members</p>
              </div>

              <div className="w-96 bg-red-900 text-white p-4 rounded-xl text-center shadow-lg">
                <p className="text-xl sm:text-2xl font-semibold">20 years</p>
                <p className="text-sm">of building trust</p>
              </div>
            </div>
          </div>

          {/* big screen design */}
          <div className="hidden lg:grid relative w-full xl:max-w-2xl 2xl:max-w-3xl mx-auto h-[420px] xl:h-[520px] overflow-hidden">
            {/* Top Card */}
            <div className="absolute top-18 xl:top-24 right-2 xl:right-4 text-center w-[180px] xl:w-[260px] bg-red-900 text-white p-4 xl:p-6 rounded-xl shadow-lg z-20">
              <p className="text-2xl xl:text-3xl font-semibold">85k+</p>
              <p>Members</p>
            </div>

            {/* Bottom Card */}
            <div className="absolute bottom-14 xl:bottom-18 xl:left-4 left-2 text-center w-[180px] xl:w-[260px] bg-red-900 text-white p-4 xl:p-6 rounded-xl shadow-lg z-20">
              <p className="text-2xl xl:text-3xl font-semibold">20 years</p>
              <p>of building trust</p>
            </div>

            {/* Images */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Image 1 */}
              <div className="relative w-[70%] xl:w-[60%] h-44 xl:h-52 rounded-xl overflow-hidden shadow-lg z-10 -mt-16 xl:-mt-24">
                <Image src={img1} alt="team1" fill className="object-cover" />
              </div>

              {/* Image 2 */}
              <div className="relative w-[70%] xl:w-[60%] h-44 xl:h-52 rounded-xl overflow-hidden shadow-xl z-20 mt-24 xl:mt-36 -ml-16 xl:-ml-24">
                <Image src={img2} alt="team2" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center px-2 sm:px-4 lg:px-0">
          <p className="text-gray-800 text-base sm:text-lg md:text-xl font-semibold max-w-full lg:max-w-xl xl:max-w-2xl text-center md:text-left leading-relaxed">
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
