import React from "react";

function ShippingMessage() {
  return (
    <div className=" lg:h-[45px] hidden lg:flex justify-center items-center w-full bg-neutral-200 pr-16">
      <h1 className="font-bold cursor-pointer text-sm pb-2 hover:underline">
        SHIPPING: PLEASE REFER TO OUR DELEVRY INFORMATION.
      </h1>
    </div>
  );
}

export default ShippingMessage;
