import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiHeart, BiSearch, BiWorld } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import ScrollerImages from "./ScrollerImages";
import soutif from "./../assets/soutif.jpg";
import dos from "./../assets/dos.png";
import men from "../assets/men.jpg";
import men2 from "../assets/men2.png";
import dumble from "./../assets/dumbles.jpg";

import { Men, Woman, accessories } from "../constants/Menu";

function PhoneMenu({ setOpenMenu, openMenu }) {
  const [openSection, setOpenSection] = useState(0);

  return (
    <div
      className={` absolute top-0  left-0 z-30 bg-white w-full  ease-in-out duration-1000 overflow-x-hidden lg:hidden ${
        openMenu ? "translate-x-0  " : " translate-x-full w-0   "
      }  `}
    >
      <nav className="pb-2 sticky top-0 left-0 bg-white w-full z-40">
        <div className={`  flex justify-between items-center px-5 py-2`}>
          <div className="flex items-center">
            <div>
              <BiHeart className="cursor-pointer text-xl" />
            </div>
            <div className="text-sm  flex items-center p-2 cursor-pointer   font-medium  text-gray-500 border-gray-500  hover:text-gray-600   ">
              <BiWorld className="text-xl text-black" />
              <span className="px-1">ROW</span>{" "}
              <BsChevronDown className="text-black" />
            </div>
          </div>
          <div>
            <AiOutlineClose
              onClick={() => setOpenMenu(false)}
              className="text-3xl font-light cursor-pointer"
            />
          </div>
        </div>
        <div className="px-5 h-[50px] text-lg flex  justify-start items-center">
          <h1 className="font-bold ">SHOP</h1>
        </div>
        <div className="mx-5  px-3 mt-3 bg-neutral-100 hover:bg-neutral-200 rounded-md  text-lg flex justify-start items-center">
          <BiSearch className="text-2xl" />

          <input
            className="text-sm py-4  outline-none hover:cursor-pointer  w-full bg-transparent"
            placeholder="Try a product or a color"
          />
        </div>
      </nav>

      <div
        className={` opacity-${
          openMenu ? "100" : "0"
        } transition-opacity ease-in-out duration-1000 w-full  bg-neutral-100`}
      >
        <div className="font-bold bg-white  text-neutral-500   text-sm  space-x-8 mb-4 flex  justify-center items-center ">
          <p
            className={`${
              openSection == 0 && "border-b-2 border-black text-black"
            } cursor-pointer py-3  `}
            onClick={() => setOpenSection(0)}
          >
            WOMEN
          </p>
          <p
            className={`${
              openSection == 1 && "border-b-2 border-black text-black"
            } cursor-pointer py-3  `}
            onClick={() => setOpenSection(1)}
          >
            MEN
          </p>
          <p
            className={`${
              openSection == 2 && "border-b-2 border-black text-black"
            } cursor-pointer py-3  `}
            onClick={() => setOpenSection(2)}
          >
            ACCESSORIES
          </p>
        </div>
        {openSection == 0 && (
          <div className="w-full">
            <ScrollerImages
              images={[soutif, dos]}
              title={"NEW RELEASES"}
              menu={Woman}
            />
          </div>
        )}
        {openSection == 1 && (
          <ScrollerImages
            images={[men, men2]}
            title={"NEW RELEASES"}
            menu={Men}
          />
        )}

        {openSection == 2 && (
          <ScrollerImages
            images={[dumble]}
            title={"TRAINING APP"}
            menu={accessories}
          />
        )}
      </div>
    </div>
  );
}

export default PhoneMenu;
