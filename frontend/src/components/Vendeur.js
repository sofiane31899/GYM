import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
function Vendeur({ data }) {
  return (
    <div className=" mx-2 lg:mx-1  pb-8  lg:w-[22.5vw]  ">
      <div className="relative">
        <img src={data.img} alt="photom" className="h-[400px] lg:h-[350px]" />
        <div className="p-2">
          <div className="flex items-center space-x-1 text-xs font-semibold">
            <AiFillStar />
            <p>{data.rate}</p>
          </div>
          <div className="absolute top-2 right-2 w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center cursor-pointer">
            <MdFavoriteBorder className="text-xl" />
          </div>
          <div className="absolute top-2 left-2 w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center cursor-pointer">
            <BiShoppingBag className="text-xl" />
          </div>
          <div className="absolute bottom-12 left-2 px-2 text-sm font-medium bg-white rounded-sm flex justify-center items-center cursor-pointer">
            NEW
          </div>
        </div>
      </div>

      <h3 className="font-medium">{data.title}</h3>
      <p className="text-sm text-neutral-600 font-medum">{data.p}</p>
      <p className="text-sm text-neutral-600 font-medum">{data.color}</p>
      <p className="font-semibold">{data.price}</p>
    </div>
  );
}

export default Vendeur;
