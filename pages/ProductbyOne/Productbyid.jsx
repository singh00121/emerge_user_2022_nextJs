import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Productpage from '../../components/Company/Productpage';
import Slider from '../../components/Company/Slider';
import Monter from '../../public/assets/Moneter/Full-HD-LED-TV-PNG-Download-Image.svg';
import CPU from '../../public/assets/CPUSFF/CPU.svg';
import CPU1 from '../../public/assets/keybordLaptop/DELL Laptop.svg';
function Productbyid() {
  const [Show, setShow] = useState(true);

  // const {

  //   state:{cart}
  // }

  return (
    <>
      <div className=" pt-40 px-10 py-10">
        <div className="md:flex justify-evenly gap-10">
          <div className="relative group cursor-pointer">
            <Image
              src={Monter}
              alt="/"
              className="w-40 h-40 "
              onClick={() => setShow(!Show)}
            />
            <Image
              src={CPU}
              alt="/"
              className="w-40 h-40"
              onClick={() => setShow(!Show)}
            />
            <Image src={Monter} alt="/" className="w-40 h-40" />
          </div>
          <div className="md:w-[1000px]   justify-center flex-col">
            <div className="flex justify-center md:mt-5">
              {Show ? (
                <Image src={Monter} alt="/" className="w-1/2  h-1/2" />
              ) : (
                <Image src={CPU1} alt="/" className="w-1/2 h-1/2" />
              )}
            </div>

            <div className="flex justify-around  gap-5 md:mt-10  px-5 ">
              <div>
                <div className="md:text-lg   text-blue-900 font-bold text-md">
                  Buy @ ₹ 8,000
                </div>
              </div>
              <div>
                <div className=" md:text-lg   text-pink-600 font-bold text-md">
                  Rent @ ₹ 2,000
                </div>
              </div>

              {/* --------Add to card---------- */}
            </div>
            <div className="py-5 flex justify-center">
              <button
                className="md:text-md text-xs  bg-blue-500 hover:bg-blue-700  text-white font-bold py-3 md:px-40 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                <Link href="/Cart"> Add to cart</Link>
              </button>
            </div>
          </div>
          <div className="md:w-[1000px]  ">
            <div>
              ENTWINO Intel Core i5 (8 GB DDR3/500 GB/120 GB SSD/Windows 10
              Home/512 MB/18.5 Inch Screen/ENTAIC-I5- 650-8GB_500-120-18.5LED)
              with MS Office (Black)
            </div>
            <div>
              About this item <br />
              Camera (Built in): HD 720p Camera Memory and Storage: 8GB
              DDR4-3200 RAM, expandable up to 16GB | Storage: 512GB SSD OS:
              Pre-Loaded Windows 11 Home with Lifetime Validity In The Box:
              All-in-One, Calliope Wireless Keyboard, Calliope Wireless Mouse,
              Power Adapter, User Manual Connectivity: WiFi 5 (11ac, 2x2) |
              Bluetooth 5.0 Pre-Installed: MS Office Home and Student 2021
              Ports: 2 USB 3.2, 2 USB 2.0, Ethernet (RJ-45), HDMI 1.4 | Without
              CD-Drive
            </div>
            <div>
              <div className="flex justify-center text-center py-10">
                Highlights
              </div>

              <div className="flex justify-evenly">
                <div className="bg-slate-200 px-5 py-1 rounded-md shadow-lg">
                  Dell
                </div>
                <div className="bg-slate-200 px-5 py-1 rounded-md shadow-lg">
                  Black
                </div>
                <div className="bg-slate-200 px-5 py-1 rounded-md shadow-lg">
                  6GB
                </div>
                <div className="bg-slate-200 px-5 py-1 rounded-md shadow-lg">
                  i3 6th Gen.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Productpage />
      <Slider />
    </>
  );
}

export default Productbyid;
