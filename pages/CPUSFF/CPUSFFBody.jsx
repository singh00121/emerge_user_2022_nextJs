import React from 'react';
import Image from 'next/image';
import DELLCPU from '../../public/assets/Productpage/DELLCPU.svg';
import Processor from '../../public/assets/Productpage/Processor.svg';
import Lenvo from '../../public/assets/Productpage/Lenvo.svg';
import lenvo2 from '../../public/assets/Productpage/lenvo2.svg';
import Link from 'next/link';
import Product from "../../StaticData/CPU.json"; 
function CPUSFFBody() {
  const Data = Product.CPU;
  console.log(Data);
  return (
    <div>
      {/* flip card start */}

      <section class=" justify-center   grid xl:grid-cols-4 lg:grid-col-3 lg:py-5 gap-10 lg:px-5  py-10 px-10 my-10 gap-x-16 text-white">
        {/* card start */}

        {Data ? (
          Data.map((item, index) => (
            <div
              key={index}
              class="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective"
            >
              <div class="relative preserve-3d hover:my-rotate-y-180 w-full h-full duration-1000">
                <div class="absolute backface-hidden border-2 bg-slate-300 rounded-lg">
                  <img
                  src={item.thumbnail.substring(7)}
                    alt="Moneter"
                    className="flex justify-center mx-auto cursor-pointer md:w-60 md:h-56 w-44 h-44 object-contain"
                  ></img>
                  <label
                    htmlFor=""
                    className="flex justify-center text-center text-black  font-bold text-sm "
                  >
                    {item.title}
                  </label>
                  <div className="flex justify-around  gap-5 md:  px-5 ">
                    <div>
                      <button
                        className="md:text-md text-xs bg-blue-500 hover:bg-blue-700  text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        Buy @ ₹ {item.price}
                      </button>
                    </div>
                    <div>
                      <button
                        className=" md:text-md text-xs bg-pink-500 hover:bg-pink-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        Rent @ ₹ {item.Rentprice}
                      </button>
                    </div>
                  </div>
                  <div className="py-5 flex justify-center">
                   
                    <div className="flex gap-5 mb-5">
                     <button className="md:text-md   bg-blue-500 hover:bg-blue-700  text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                      Call Now
                     </button> 
                      {/* <Image src={Call} alt="Call" className="md:w-8 md:h-8" /> */}
                      <p className="flex justify-center flex-col ">
                        <p className="text-xl text-black">9826206233</p>
                        <p className="text-xl text-black">8817576276</p>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="absolute my-rotate-y-180 backface-hidden w-full py-5 bg-slate-300  overflow-hidden rounded-lg">
                  <div class="text-center flex flex-col items-center justify-center py-5 text-gray-800 px-2 ">
                    <h1 class="text-2xl font-semibold">{item.Sorttitle}</h1>

                    <p className="justify-start text-left text-xs md:py-3">
                      {item.description}
                    </p>
                    <p class="text-xs justify-start text-left -ml-56 md:py-2">
                      Highlights
                    </p>
                    <ul className="text-xs justify-start text-left list-disc ">
                      <li>Brand - {item.Brand}</li>
                      <li>Operating System- {item.OperatingSystem }</li>
                      <li>Storage - {item.Storage}</li>
                      <li>category - {item.category}  </li>
                      <li>RAM - {item.RAM}</li>
                      <li>CPU Model - {item.CPUModel}</li>
                    </ul>
                    <div className="text-white bg-blue-700  my-2 p-1 text-right text-xs justify-right flex -mr-32 ">
                      Read more
                    </div>

                    <div className="flex justify-around  gap-5 md:  px-5 ">
                      <div>
                        <button
                          className="md:text-md text-xs bg-blue-500 hover:bg-blue-700  text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Buy @ ₹ {item.price}
                        </button>
                      </div>
                      <div>
                        <button
                          className=" md:text-md text-xs bg-pink-500 hover:bg-pink-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Rent @ ₹ {item.Rentprice}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>no data</p>
        )}

        {/* card end */}
      </section>


      {/* flip card end */}
      <div className="text-justify md:px-5 px-5">
        <div className="text-2xl text-black font-bold justify-center text-center">
          CPU- The Top Rated Bluetooth Earbuds in the Market
        </div>
        <div className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident at
          reprehenderit modi voluptatum quidem et nemo adipisci qui sint
          voluptas veritatis, alias cumque, rerum numquam quis repellat porro
          quos voluptate quod possimus. Dolorem sit nostrum commodi nam,
          possimus placeat cumque quisquam perferendis ab dolorum repudiandae
          vel dicta animi quam, inventore ullam rem ipsam. Cum adipisci ipsam
          consectetur ipsa maiores culpa reprehenderit porro, eligendi vel
          expedita omnis, quae quidem. Praesentium ea temporibus atque quidem
          voluptatibus vel velit eaque provident nisi voluptates asperiores
          quibusdam fugiat dicta sunt nobis doloremque quaerat pariatur
          architecto nemo, inventore, rerum sequi culpa non! Illum alias dolores
          facere?
        </div>
        <br />
       
        
        
      </div>
    </div>
  );
}

export default CPUSFFBody;
