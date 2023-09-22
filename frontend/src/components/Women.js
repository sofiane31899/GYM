import React from "react";

function Women({ imagePhone, imageLarge, data, color }) {
  return (
    <div className="relative">
      <img src={imagePhone} alt="women" className="w-full h-full md:hidden  " />
      <img
        src={imageLarge}
        alt="women"
        className="w-full h-full md:h-[60vh] lg:h-[67vh] hidden md:block  "
      />

      <div className="absolute bottom-0 hidden left-0 w-full h-full bg-black bg-opacity-20" />
      <div className="absolute bottom-0 h-[200px] w-full lg:w-[500px] xl:w-[700px] md:w-[500px] md:h-full bg-gradient-to-b from-transparent md:bg-none to-[#3a3a3a] md:bg left-0 px-5 flex flex-col   md:justify-center md:px-[50px] items-start pb-10 justify-around ">
        <h1
          className={`text-white md:text-${color} font-bold text-2xl lg:text-5xl`}>
          {data.title}
        </h1>
        <p className={`text-white font-medium md:text-${color}  py-7 `}>
          {data.paragraphe}
        </p>
        <button
          className={` w-full md:w-fit px-4 text-sm font-bold ${
            color == "white" ? "bg-black" : "bg-white"
          }  md:bg-${color} md:text-white text-${color} py-3 rounded-full`}>
          {data.button}
        </button>
      </div>
    </div>
  );
}

export default Women;
