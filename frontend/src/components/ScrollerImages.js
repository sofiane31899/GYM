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
  const content2 = more?.map((elem) => <li>{elem}</li>);

  const content = Object.keys(menu)?.map((elem, index) => (
    <div key={elem} onClick={() => menuFunction(elem)} className="w-full">
      <li
        className={`${
          openMenu.includes(elem) ? "" : "border-b"
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
            className=" text-gray-600 text-sm  py-5 font-semibold border-b border-gray-300"
            key={elem}
          >
            {elem}
          </li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <div className=" overflow-x-scroll  scrollbar-hide ">
        <div className="flex justify-start w-max px-5 space-x-2 items-center ">
          {images.map((elem) => (
            <div key={elem} className=" shrink-0 relative ">
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
      <div>
        <ul className="flex flex-col items-start justify-center px-5 ">
          {content}
        </ul>
      </div>
      <div className="bg-neutral-100 px-5 py-3 text-sm ">
        <h1 className="font-bold pb-2">MORE</h1>
        <ul className="font-semibold  text-neutral-600 space-y-2">
          {content2}
        </ul>
      </div>
    </div>
  );
}

export default ScrollerImages;
