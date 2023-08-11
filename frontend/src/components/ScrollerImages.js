import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

function ScrollerImages({ images, title }) {
  return (
    <div className=" overflow-x-scroll  scrollbar-hide ">
      <div className="flex justify-start w-max px-5 space-x-2 items-center ">
        {images.map((elem) => (
          <div className=" shrink-0 relative ">
            <img
              src={elem}
              className="rounded-md h-[280px] w-[450px] object-cover "
            />
            <p className="p-1 text-xs rounded-md bg-gray-100 cursor-pointer font-bold absolute top-4 left-4 ">
              NEW
            </p>
            <div className="flex justify-between px-5 w-full items-center absolute left-0 bottom-3 ">
              <p className="font-bold text-white text-xl ">{title}</p>
              {/* <div className="p-2 bg-white animate-pulse rounded-full "> */}
              <p className="p-2 bg-white  cursor-pointer rounded-full">
                <HiOutlineChevronRight className="text-xl" />
              </p>
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollerImages;
