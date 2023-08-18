import React, { useState } from "react";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";
function LoginOtp() {
  return (
    <div>
      <div className="md:w-[1280px] mx-auto pt-40">
        <div className="bg-white  my-10">
          <div className=" bg-blue-900  flex gap-5 px-20 py-5 ">
            <div className=" bg-white w-fit h-fit px-1 ">1</div>

            <div className="text-white">LOGIN OR SIGNUP</div>
          </div>
          <br />
          <div className="px-20  ">
            <label htmlFor="">Enter Mobile no.</label>
          </div>
          <div></div>
          <div class=" flex  px-20 md-w-[100px]  ">
            <span className="font-semibold text-lg pt-1 "> +91 </span>

            <span>
              <input
                className="lining-nums  focus:outline-none focus:ring-0 peer bg-transparent border-0 border-b-2 border-b-black  appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight   focus:border-blue-500"
                id="inline-full-name"
                type="text"
              />
            </span>
          </div>
          <div className="px-28 py-5">
            <input
              className="lining-nums w-32 focus:outline-none focus:ring-0 peer bg-transparent
                bg-slate-200 border-b-black  appearance-none  border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight   focus:border-blue-500"
              id="inline-full-name"
              type="text"
              placeholder="OTP"
            />
          </div>
          <div className=" px-20  py-5 ">
            <Link href="/UserAdress/UserAdress">
              <button
                className="   md:text-md text-xs bg-pink-500 hover:bg-pink-700
                 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                CONTINUE CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginOtp;
