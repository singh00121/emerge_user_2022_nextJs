import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import Moniter from '../../public/assets/ProductCetogory/Moniter.svg';
import KEYBORD from '../../public/assets/ProductCetogory/mous.svg';
import Laptop from '../../public/assets/ProductCetogory/Laptop.svg';
import Gaming from '../../public/assets/ProductCetogory/Gaming CPU.svg';
import Hard from '../../public/assets/ProductCetogory/Hard Disk.svg';
import CPU from '../../public/assets/ProductCetogory/CPU SFF.svg';
import Image from 'next/image';
import Link from 'next/link';

const Slider = () => {
  return (
    <>
      <div className="md:mb-10 mx-10 my-10 opacity-90">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            414: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            390: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper pb-36"
        >
          <SwiperSlide>
            <Link href="/Moneters/Moneter">
              <div className=" bg-blue-500 text-center justify-items-center h-96 w-full md:py-5 rounded-3xl">
                <div>
                  {/* <h3 className="md:text-3xl text-sm text-white">Moniter</h3> */}
                </div>
                <div className="flex justify-center ">
                  <Image src={Moniter} className="h-72 w-72"></Image>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/KEYBORD/KEYBORD">
              {' '}
              <div className="  bg-blue-500 text-center justify-items-center h-96 w-full md:py-5 rounded-3xl">
                <div>
                  {/* <h3 className="md:text-3xl text-sm text-white">KEYBORD</h3> */}
                </div>
                <div className="flex justify-center ">
                  <Image src={KEYBORD} className="h-72 w-72"></Image>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/Laptops/Laptop">
              <div className="  bg-blue-500 text-center justify-items-center h-96 w-full md:py-5 rounded-3xl">
                <div>
                  {/* <h3 className="md:text-3xl text-sm text-white">Laptop</h3> */}
                </div>
                <div className="flex justify-center ">
                  <Image src={Laptop} className="h-72 w-72"></Image>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/gaming/Gamingcpu">
              <div className="  bg-blue-500 text-center justify-items-center h-96 w-full md:py-5 rounded-3xl">
                <div>
                  {/* <h3 className="md:text-3xl text-sm text-white">Gaming</h3> */}
                </div>

                <div className="flex justify-center ">
                  <Image src={Gaming} className="h-72 w-72"></Image>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/HardDisk/HardDisk">
              <div className=" bg-blue-500 text-center justify-items-center h-96 w-full md:py-5 rounded-3xl">
                <div>
                  {/* <h3 className="md:text-3xl text-sm text-white">Hard</h3> */}
                </div>
                <div className="flex justify-center ">
                  <Image src={Hard} className="h-72 w-72"></Image>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/CPUSFF/CPUSFF">
              <div className="  bg-blue-500 text-center justify-items-center h-96 w-full md:py-5 rounded-3xl">
                <div>
                  {/* <h3 className="md:text-3xl text-sm text-white">CPU</h3> */}
                </div>
                <div className="flex justify-center ">
                  <Image src={CPU} className="h-72 w-72 "></Image>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
