import React from "react";
import { BiUser, BiWorld } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";

function Topnav() {
  return (
    <nav className="h-[45px] lg:h-[35px]  flex w-full bg-neutral-200 pr-16">
      <ul className="lg:flex hidden w-full justify-end items-center">
        <li className="text-sm flex items-center p-2  cursor-pointer  font-medium  text-gray-500 border-gray-500  hover:text-gray-600 border-r  ">
          <BiUser /> Account
        </li>

        <li className="text-sm  p-2  font-medium cursor-pointer  text-gray-500 border-gray-500 hover:text-gray-600 border-r ">
          Blog
        </li>
        <li className="text-sm p-2  font-medium cursor-pointer  text-gray-500 border-gray-500 hover:text-gray-600 border-r ">
          Email sing up
        </li>
        <li className="text-sm  p-2   font-medium  cursor-pointer text-gray-500 border-gray-500 hover:text-gray-600 border-r ">
          Help
        </li>
        <li className="text-sm p-2  font-medium cursor-pointer  text-gray-500 border-gray-500 hover:text-gray-600 border-r ">
          Accessibility Statement
        </li>
        <li className="text-sm  flex items-center p-2 cursor-pointer   font-medium  text-gray-500 border-gray-500  hover:text-gray-600   ">
          <BiWorld className="text-lg text-black" />
          <span className="px-1">ROW</span>{" "}
          <BsChevronDown className="text-black" />
        </li>
      </ul>
    </nav>
  );
}

export default Topnav;
