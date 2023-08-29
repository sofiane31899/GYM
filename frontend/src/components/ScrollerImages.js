import React, { useState } from "react";
import {
  HiOutlineChevronRight,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from "react-icons/hi";
import { more } from "./../constants/Menu";

function ScrollerImages({ images, title, menu }) {
  const [openMenu, setOpenMenu] = useState([""]);
  console.log("open", openMenu);
  const menuFunction = (elem) => {
    if (openMenu.includes(elem)) {
      const menu = openMenu.filter((menu) => menu != elem);
      setOpenMenu(menu);
    } else {
      setOpenMenu((prev) => [...prev, elem]);
    }
  };
  const content2 = more?.map((elem) => <li key={elem}>{elem}</li>);
  const menuObj = Object.keys(menu);
  const content = menuObj?.map((elem, index) => (
    <div key={elem} onClick={() => menuFunction(elem)} className="w-full">
      <li
        className={`${
          openMenu.includes(elem) || index === menuObj.length - 1
            ? ""
            : "border-b"
        } py-5  cursor-pointer flex justify-between items-center font-bold border-gray-300 w-full`}
      >
        {elem}
        {!openMenu.includes(elem) ? (
          <HiOutlineChevronDown />
        ) : (
          <HiOutlineChevronUp />
        )}
      </li>
      <ul className={`${openMenu.includes(elem) ? "block" : "hidden"} px-2  `}>
        {menu[elem]?.map((elem) => (
          <li
            className=" text-gray-600 text-sm cursor-pointer hover:text-black  py-5 font-semibold border-b border-gray-300"
            key={elem}
          >
            {elem}
          </li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div className="h-max overflow-y-hidden">
      <div className=" overflow-x-scroll  scrollbar-hide ">
        <div className="flex justify-start w-max px-5 space-x-2 items-center ">
          {images.map((elem) => (
            <div key={elem} className=" shrink-0 relative ">
              <img
                src={elem}
                className="rounded-md h-[280px] w-[450px] object-cover "
              />
              <p
                className={`${
                  title == "TRAINING APP" ? "hidden" : "block"
                } p-1 text-xs rounded-md bg-gray-100 cursor-pointer font-bold absolute top-4 left-4 S`}
              >
                NEW
              </p>
              <div className="flex justify-between px-5 w-full items-center absolute left-0 bottom-3 ">
                <p className="font-bold text-white text-xl ">{title}</p>
                {/* <div className="p-2 bg-white animate-pulse rounded-full "> */}

                <div class="flex justify-center items-center ">
                  <div class="h-12 w-12 bg-white rounded-full flex justify-center items-center animate-pulse ">
                    <HiOutlineChevronRight />
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col">
        <ul className="flex flex-col items-start justify-center px-5 ">
          {content}
        </ul>
      </div>
      <div className="bg-neutral-200  px-5 py-3 text-sm ">
        <h1 className="font-bold pb-2">MORE</h1>
        <ul className="font-semibold  text-neutral-600 space-y-2">
          {content2}
        </ul>
      </div>
    </div>
  );
}

export default ScrollerImages;
