import React, { useState } from "react";
import logo from "./../assets/logo.svg";

import {
  BiHeart,
  BiMenu,
  BiSearch,
  BiShoppingBag,
  BiUser,
} from "react-icons/bi";
import PhoneMenu from "./PhoneMenu";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <nav className=" border-b  flex justify-between items-center  lg:items-center h-[70px] w-full px-5 lg:px-16">
        <div className="text-2xl lg:hidden flex items-center space-x-3">
          <BiMenu
            className="cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
          <BiSearch className="cursor-pointer" />
        </div>
        <div className="lg:pr-[200px]  ">
          <img
            src={logo}
            alt="logo"
            className="h-[46px] cursor-pointer w-[46px] object-contain"
          />
        </div>
        <div className="text-2xl lg:hidden flex items-center space-x-3">
          <BiUser className="cursor-pointer" />

          <BiShoppingBag className="cursor-pointer" />
        </div>
        <div className="font-bold hidden text-sm w-[280px] lg:flex justify-between items-center ">
          <p className="cursor-pointer">WOMEN</p>
          <p className="cursor-pointer">MEN</p>
          <p className="cursor-pointer">ACCESSORIES</p>
        </div>
        <div className="lg:flex hidden text-2xl space-x-4">
          <BiSearch className="cursor-pointer" />
          <BiHeart className="cursor-pointer" />
          <BiUser className="cursor-pointer" />
          <BiShoppingBag className="cursor-pointer" />
        </div>
      </nav>
      {openMenu && <PhoneMenu setOpenMenu={setOpenMenu} />}
    </div>
  );
}

export default Navbar;
