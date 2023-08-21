import React from "react";

function PcMenu({ menu, setOpenSection, type }) {
  const menuObj = Object.keys(menu);
  const content = menuObj?.map((elem, index) => (
    <div
      key={elem}
      className={`${
        type == 0
          ? (index == 0 || index == 1 || index == 2) && "row-span-2 "
          : type == 1
          ? (index == 0 || index == 1) && "row-span-2 "
          : type == 2
          ? index == 2 && "row-span-2"
          : ""
      } pt-5`}
    >
      <h1 className="text-sm font-bold">{elem}</h1>
      <ul>
        {menu[elem]?.map((elem) => (
          <li
            className=" text-gray-700 text-sm cursor-pointer hover:text-black  py-1 font-semibold"
            key={elem}
          >
            {elem}
          </li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div
      onMouseEnter={() => setOpenSection(type)}
      onMouseLeave={() => setOpenSection(3)}
      className="bg-white  flex items-start justify-center   h-[calc(100vh-108px)] overflow-y-hidden z-30 absolute top-[100px ] left-0 w-full "
    >
      <div className=" grid grid-cols-4 gap-3 w-[800px] ">{content}</div>
    </div>
  );
}

export default PcMenu;
