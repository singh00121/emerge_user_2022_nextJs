import React from "react";
import Image from "next/image";

import Moniter from "../../public/assets/ProductCetogory/Moniter.svg";
import KEYBORD from "../../public/assets/ProductCetogory/mous.svg";
import Laptop from "../../public/assets/ProductCetogory/Laptop.svg";
import Gaming from "../../public/assets/ProductCetogory/Gaming CPU.svg";
import Hard from "../../public/assets/ProductCetogory/Hard Disk.svg";
import CPU from "../../public/assets/ProductCetogory/CPU SFF.svg";
import Link from "next/link";

function ProductCetogory() {
  return (
    <div>
      {/* md:flex md:gap-10  md:justify-evenly md:pt-20 md:ml-10 md:mr-10 mr-5 ml-5  */}
      <div className="grid md:grid-cols-6  lg:py-5 gap-10 lg:px-5 grid-cols-2 py-10 px-10">
        <div className="">
          <Link href="/Moneters/Moneter">
            <Image
              src={Moniter}
              alt="/"
              className="cursor-pointer md:w-60 md:h-56 w-44 h-44 flex justify-center mx-auto  "
            />
            <label htmlFor="" className=" flex justify-center mt-10">
              Moniters
            </label>
          </Link>
        </div>
        <div className="">
          <Link href="/KEYBORD/KEYBORD">
            <Image
              src={KEYBORD}
              alt="/"
              width="200"
              height="150"
              className="cursor-pointer md:w-60 md:h-56 w-44 h-44 flex justify-center mx-auto"
            />
            <label htmlFor="" className=" flex justify-center mt-10">
              Keyboard Mouse
            </label>
          </Link>
        </div>
        <div className="">
          <Link href="/Laptops/Laptop">
            <Image
              src={Laptop}
              alt="/"
              className="cursor-pointer md:w-60 md:h-56 w-44 h-44 flex justify-center mx-auto"
            />
            <label htmlFor="" className=" flex justify-center mt-10">
              Laptop
            </label>
          </Link>
        </div>
        <div className="">
          <Link href="/gaming/Gamingcpu">
            <Image
              src={Gaming}
              alt="/"
              className="cursor-pointer md:w-60 md:h-56 w-44 h-44 flex justify-center mx-auto"
            />
            <label htmlFor="" className=" flex justify-center mt-10">
              Gaming CPU
            </label>
          </Link>
        </div>
        <div className="">
          <Link href="/HardDisk/HardDisk">
            <Image
              src={Hard}
              alt="/"
              className="cursor-pointer md:w-60 md:h-56 w-44 h-44 flex justify-center mx-auto"
            />
            <label htmlFor="" className=" flex justify-center mt-10">
              Storage
            </label>
          </Link>
        </div>
        <div className=" justify-center">
          <Link href="/CPUSFF/CPUSFF">
            <Image
              src={CPU}
              alt="/"
              className="cursor-pointer md:w-60 md:h-56 w-44 h-44 flex justify-center mx-auto"
            />
            <label
              htmlFor=""
              className=" flex justify-center mt-10"
              title="Small form factor (SFF)"
            >
              CPU SFF
            </label>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCetogory;
