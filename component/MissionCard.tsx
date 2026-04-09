import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default function MissionCard() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 md:gap-8 px-4 sm:px-6 py-6 bg-gray-200">
      <div className="group flex flex-col gap-4 w-full max-w-xs bg-transparent p-6 rounded-2xl transition-all duration-300 ease-in-out hover:scale-105">
        <div
          className="text-center relative py-2 transition-all duration-300 ease-out group-hover:text-red-900 group-hover:-translate-y-0.5
after:absolute after:left-0 after:top-0 after:h-0.5 after:w-full after:bg-red-900/80 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100"
        >
          <h4 className="font-semibold text-md text-red-900 mb-3">Mission</h4>
          <RocketLaunchIcon
            fontSize="large"
            className="text-red-900 transition-transform duration-300 group-hover:scale-90"
          />
        </div>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          natus? A in nam praesentium ratione ea doloremque minima neque ex?
        </p>
      </div>

      <div className="hidden md:block w-0.5 h-auto bg-black" />

      <div className="group flex flex-col gap-4 w-full max-w-xs bg-transparent p-6 rounded-2xl transition-all duration-300 ease-in-out hover:scale-105">
        <div
          className="text-center relative py-2 transition-all duration-300 ease-out group-hover:text-red-900 group-hover:-translate-y-0.5
after:absolute after:left-0 after:top-0 after:h-0.5 after:w-full after:bg-red-900/80 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100"
        >
          <h4 className="font-semibold text-md text-red-900 mb-3">Vision</h4>
          <RemoveRedEyeIcon
            fontSize="large"
            className="text-red-900 transition-transform duration-300 group-hover:scale-90"
          />
        </div>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          natus? A in nam praesentium ratione ea doloremque minima neque ex?
        </p>
      </div>

      <div className="hidden md:block w-0.5 h-auto bg-black" />

      <div className="group flex flex-col gap-4 w-full max-w-xs bg-transparent p-6 rounded-2xl transition-all duration-300 ease-in-out hover:scale-105">
        <div
          className="text-center relative py-2 transition-all duration-300 ease-out group-hover:text-red-900 group-hover:-translate-y-0.5
after:absolute after:left-0 after:top-0 after:h-0.5 after:w-full after:bg-red-900/80 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100"
        >
          <h4 className="font-semibold text-lg text-red-900 mb-3">Objective</h4>
          <svg
            fill="#97020a"
            height="30"
            width="30"
            viewBox="0 0 490 490"
            className="transition-transform duration-300 group-hover:scale-90 flex justify-center w-full"
          >
            <path d="M488.659,72.311L490,51.764l-49.146-3.137L437.678,0l-20.765,1.327l3.507,53.716l-15.057,14.898l-2.329-35.663l-20.766,1.327l3.507,53.717l-12.885,12.749C333.293,67.331,281.236,46.2,224.275,46.2C100.611,46.2,0,145.742,0,268.098S100.611,490,224.275,490c123.663,0,224.264-99.547,224.264-221.902c0-58.606-23.091-111.969-60.731-151.675l13.348-13.208l52.859,3.374l1.341-20.547l-34.611-2.209l15.055-14.896L488.659,72.311z" />
          </svg>
        </div>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          natus? A in nam praesentium ratione ea doloremque minima neque ex?
        </p>
      </div>
    </section>
  );
}
