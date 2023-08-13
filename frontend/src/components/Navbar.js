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
import PcMenu from "./PcMenu";
import { Men, Woman, accessories } from "../constants/Menu";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSection, setOpenSection] = useState(3);
  console.log("open", openSection);
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
        <div className="font-bold hidden text-sm w-[280px] lg:flex  justify-center items-center ">
          <div
            className="group cursor-pointer px-[40px]  "
            onMouseEnter={() => setOpenSection(0)}
            onMouseLeave={() => setOpenSection(3)}
          >
            <p className="py-6 group-hover:border-b-2  border-black">WOMEN</p>
          </div>
          <p
            className="cursor-pointer  px-[40px] group "
            onMouseEnter={() => setOpenSection(1)}
            onMouseLeave={() => setOpenSection(3)}
          >
            <p className="py-6 group-hover:border-b-2  border-black"> MEN</p>
          </p>
          <p
            className="cursor-pointer  px-[40px] group"
            onMouseEnter={() => setOpenSection(2)}
            onMouseLeave={() => setOpenSection(3)}
          >
            <p className="py-6 group-hover:border-b-2  border-black">
              ACCESSORIES
            </p>
          </p>
        </div>
        <div className="lg:flex hidden text-2xl space-x-4">
          <BiSearch className="cursor-pointer" />
          <BiHeart className="cursor-pointer" />
          <BiUser className="cursor-pointer" />
          <BiShoppingBag className="cursor-pointer" />
        </div>
      </nav>
      {openMenu && <PhoneMenu setOpenMenu={setOpenMenu} />}
      {openSection == 0 && (
        <PcMenu menu={Woman} setOpenSection={setOpenSection} type={0} />
      )}
      {openSection == 1 && (
        <PcMenu menu={Men} setOpenSection={setOpenSection} type={1} />
      )}

      {openSection == 2 && (
        <PcMenu menu={accessories} setOpenSection={setOpenSection} type={2} />
      )}
    </div>
  );
}

export default Navbar;
