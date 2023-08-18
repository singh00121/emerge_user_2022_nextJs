import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Offer from "../../public/assets/OfferBner/offersnew.svg";
import computer from "../../public/assets/OfferBner/computer.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

function Bnner() {
  return (
    <>
      
    </>
    // <div className="opacity-90">
    //   <Swiper
    //     spaceBetween={30}
    //     effect={"fade"}
        
    //     autoplay={{
    //       delay: 2500,
    //       disableOnInteraction: false,
    //     }}
    //     modules={[Autoplay, Pagination, Navigation, EffectFade]}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide>
    //       <Image src={Offer} className="w-full h-[500px]"></Image>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <Image src={computer} className="w-[1000px]h-[500px]"></Image>
    //     </SwiperSlide>
    //   </Swiper>
    // </div>
  );
}

export default Bnner;
