import React from "react";
import collectionleggigns from "../assets/collectionLeggigns.webp";
import collectionbras from "../assets/collectionbras.webp";
import collectionshort from "../assets/collectionshort.webp";
import collectionview from "../assets/collectionview.webp";

function Collection() {
  const collections = [
    {
      img: collectionleggigns,
      text: "LEGGINGS",
    },
    {
      img: collectionbras,
      text: "SPORTS BRAS",
    },
    {
      img: collectionshort,
      text: "SHORTS",
    },
    {
      img: collectionview,
      text: "VIEW ALL",
    },
  ];
  return (
    <div className="lg:px-12 py-8 border-b">
      <div>
        <h1 className="text-3xl px-5 font-bold py-6 ">COLLECTIONS</h1>
      </div>
      <div className=" pl-3 lg:pl-0 overflow-x-scroll scrollbar-hide  ">
        <div className="sm:flex-row flex flex-col w-max  ">
          {collections &&
            collections?.map((elem) => (
              <div className=" mx-2 lg:mx-1  lgpb-8  lg:w-[22.5vw]  ">
                <div className="relative">
                  <img
                    src={elem.img}
                    alt="photom"
                    className="rounded-md h-[400px] lg:h-[350px] "
                  />
                  <div className="p-2">
                    <div className="absolute bottom-12 py-1 px-5 left-10 m-auto font-medium bg-white rounded-full flex justify-center items-center cursor-pointer">
                      {elem.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
