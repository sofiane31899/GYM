import React from "react";
import Vendeur from "./Vendeur";

function Shop({ title, data }) {
  return (
    <div className="px-5 lg:px-12">
      <div className=" w-full pt-8 pb-4">
        <h1 className="text-neutral-600 font-semibold text-lg">womens</h1>
        <div className=" flex flex-col md:flex-row items-start justify-between">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="underline font-semibold pt-3 md:pt-0 ">View all</p>
        </div>
      </div>
      <div className=" pl-3 lg:pl-0 overflow-x-scroll scrollbar-hide  ">
        <div className="flex w-max  ">
          {data && data?.map((elem) => <Vendeur data={elem} />)}
        </div>
      </div>
    </div>
  );
}

export default Shop;
