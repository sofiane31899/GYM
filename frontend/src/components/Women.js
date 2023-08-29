import React from "react";
import women from "../assets/women.jpg";
import womenL from "../assets/womenLarge.jpg";

function Women() {
  return (
    <div className="relative">
      <img src={women} alt="women" className="w-full h-full md:hidden  " />
      <img
        src={womenL}
        alt="women"
        className="w-full h-full md:h-[60vh] lg:h-full hidden md:block  "
      />

      <div className="absolute bottom-0 hidden left-0 w-full h-full bg-black bg-opacity-20" />
      <div className="absolute bottom-0 h-[200px] w-full lg:w-[500px] xl:w-[700px] md:w-[500px] md:h-full bg-gradient-to-b from-transparent md:bg-none to-[#3a3a3a] md:bg left-0 px-5 flex flex-col   md:justify-center md:px-[50px] items-start pb-10 justify-around ">
        <h1 className="text-white md:text-black font-bold text-2xl lg:text-5xl">
          GYMSHARK SEAMLESS
        </h1>
        <p className="text-white font-medium md:text-neutral-700  py-7 ">
          There’s a Seamless for everyone. Wanna find yours?
        </p>
        <button className="w-full md:w-36 text-sm font-bold bg-white md:bg-black md:text-white text-black py-3 rounded-full">
          FIND YOUR FIT
        </button>
      </div>
    </div>
  );
}

export default Women;
