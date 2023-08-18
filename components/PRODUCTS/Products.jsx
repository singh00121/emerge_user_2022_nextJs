import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { TbPlayerTrackNext } from "react-icons/tb";

import Moniter from "../../public/assets/ProductCetogory/Moniter.svg";
import KEYBORD from "../../public/assets/ProductCetogory/mous.svg";
import Laptop from "../../public/assets/ProductCetogory/Laptop.svg";
import Gaming from "../../public/assets/ProductCetogory/Gaming CPU.svg";
import Hard from "../../public/assets/Storage/Storage.svg";
import CPU from "../../public/assets/ProductCetogory/CPU SFF.svg";
function Products() {
  const [heading, setHeading] = useState("Products");
  const [subHeading, setSubHeading] = useState("");
  return (
    <div>
      <div className="px-3 text-left md:cursor-pointer group">
        <div
          // md:py-4 sm:py-3 flex justify-between items-center md:pr-0 pr-5 group  md:h-32
          className="md:py-0 sm:py-0 flex justify-between items-center md:pr-0 pr-5 group md:-mt-16  md:h-36 hover:border-b"
          onClick={() => {
            heading !== "Products" ? setHeading("Products") : setHeading("");
            setSubHeading("");
          }}
        >
          {"Products"}
        </div>
        <div className=" absolute top-[90px]   hidden group-hover:md:block hover:md:block transition duration-700 hover:duration-700">
          <div className="bg-white flex  justify-center md:w-[500px]    text-black mb-2 rounded-2xl">
            {/* First Row */}

            <div className="grid md:grid-cols-3  lg:py-5 gap-10 lg:px-5 grid-cols-2 py-10 px-10">
              <div className="">
                <Link href="/Moniters">
                  <Image
                    src={Moniter}
                    alt="/"
                    className="cursor-pointer md:w-28 md:h-28 w-28 h-28 flex justify-center mx-auto  "
                  />
                  <label htmlFor="" className=" flex justify-center mt-10">
                    Moniters
                  </label>
                </Link>
              </div>
              <div className="">
                <Link href="/Keybords">
                  <Image
                    src={KEYBORD}
                    alt="/"
                    className="cursor-pointer md:w-28 md:h-28 w-28 h-28 flex justify-center mx-auto  "
                  />
                  <label htmlFor="" className=" flex justify-center mt-10">
                    KEYBORD
                  </label>
                </Link>
              </div>
              <div className="">
                <Link href="/Laptops">
                  <Image
                    src={Laptop}
                    alt="/"
                    className="cursor-pointer md:w-28 md:h-28 w-28 h-28 flex justify-center mx-auto  "
                  />
                  <label htmlFor="" className=" flex justify-center mt-10">
                    Laptop
                  </label>
                </Link>
              </div>
              <div className="">
                <Link href="/gaming">
                  <Image
                    src={Gaming}
                    alt="/"
                    className="cursor-pointer md:w-28 md:h-28 w-28 h-28 flex justify-center mx-auto  "
                  />
                  <label htmlFor="" className=" flex justify-center mt-10">
                    Gaming
                  </label>
                </Link>
              </div>
              <div className="">
                <Link href="/HardDisk">
                  <Image
                    src={Hard}
                    alt="/"
                    className="cursor-pointer md:w-28 md:h-28 w-28 h-28 flex justify-center mx-auto  "
                  />
                  <label htmlFor="" className=" flex justify-center mt-10">
                    Storage
                  </label>{" "}
                </Link>
              </div>
              <div className="">
                <Link href="/CPUSFF">
                  <Image
                    src={CPU}
                    alt="/"
                    className="cursor-pointer md:w-28 md:h-28 w-28 h-28 flex justify-center mx-auto  "
                  />
                  <label htmlFor="" className=" flex justify-center mt-10">
                    CPU
                  </label>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Starts */}

      <div className={` ${heading === "Products" ? "hidden" : "md:hidden"}`}>
        <div className="flex flex-wrap flex-col ">
          <div className="">
            <ul className="text-sm font-subheading list-inside list-none mx-10 my-5 ">
              <li>
                {" "}
                <Link href="/Moniters">Moniters</Link>
              </li>{" "}
              <br />
              <li>
                {" "}
                <Link href="/Keybords">Kebord</Link>
              </li>
              <br />
              <li>
                {" "}
                <Link href="/Laptops">Laptop</Link>
              </li>
              <br />
              <li>
                {" "}
                <Link href="/gaming">Gaming</Link>
              </li>
              <br />
              <li>
                {" "}
                <Link href="/HardDisk"> Storage</Link>
              </li>
              <br />
              <li>
                {" "}
                <Link href="/CPUSFF">CPU SFF</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu Ends */}
    </div>
  );
}

export default Products;
