import React from "react";

function DownloadSection() {
  return (
    <div
      className={`w-full h-[230px] md:h-[190px] relative z-20 px-4 py-6 text-white flex flex-col items-center justify-around bg-[#003e5a] object-cover bg-cover  lg:bg-download-app`}
    >
      <div className="w-full h-full  absolute top-0 left-0  bg-black bg-opacity-0 lg:bg-opacity-50" />
      <h1 className="text-2xl z-20 font-bold">THE GYMSHARK APP</h1>
      <p className="font-semibold z-20 text-[15px] text-center ">
        From shopping your favourite ‘fits on the go to exclusive drops. Get the
        best of Gymshark any time, anywhere.
      </p>
      <button className="text-black z-20 text-sm  font-bold bg-white rounded-full px-10 py-3">
        DOWNLOAD NOW
      </button>
    </div>
  );
}

export default DownloadSection;
