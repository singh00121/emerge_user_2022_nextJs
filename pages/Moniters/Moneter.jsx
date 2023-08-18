import React from "react";
import MoneterBody from "./MoneterBody";

function Moneter() {
  return (
    <>
      <div className=" pt-20">
        <div className="mx-auto w-full md:h-[38rem]  h-96 py-20 px-4 bg-MonterHeder bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col text-justify justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-3xl text-xl mb-10 "></p>
            <p className="text-white font-heading py-2 md:text-xl text-xs md:mb-28 mb-24 md:w-[480px] text-justify"></p>
          </div>
          {/* Content Section Ends*/}
        </div>{" "}
      </div>
      <MoneterBody />
    </>
  );
}

export default Moneter;
