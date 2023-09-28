import React from "react";

function Women({ imagePhone, imageLarge, data, style }) {
  console.log("hi", style, "how", style.ptag);
  return (
    <div className="relative">
      <img src={imagePhone} alt="women" className="w-full h-full md:hidden  " />
      <img
        src={imageLarge}
        alt="women"
        className="w-full h-full md:h-[60vh] lg:h-[90vh] hidden md:block  "
      />

      <div className="absolute bottom-0 hidden left-0 w-full h-full bg-black bg-opacity-20" />
      <div
        className={`${
          style.one
            ? "md:w-full md:items-center"
            : "lg:w-[500px] xl:w-[700px]  md:w-[500px]"
        } absolute bottom-0  h-[200px]   w-full  md:h-full bg-gradient-to-b from-transparent md:bg-none to-[#3a3a3a] md:bg left-0 px-5 flex flex-col   md:justify-center justify-around items-start md:px-[50px] pb-10  `}>
        <h1
          className={`text-white  ${style.title} font-bold text-2xl lg:text-5xl`}>
          {data.title}
        </h1>
        <p className={`text-white font-medium ${style.ptag}  py-7 `}>
          {data.paragraphe}
        </p>
        <button
          className={` w-full md:w-fit px-4 text-sm font-bold bg-white   text-black ${style.button} py-3 rounded-full`}>
          {data.button}
        </button>
      </div>
    </div>
  );
}

export default Women;
