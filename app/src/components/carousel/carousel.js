import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import Tips from '../../assets/tips.png';
import boat2 from '../../assets/boat2.png';
import yoga from '../../assets/yoga.png';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper";

function Carousel() {
    return(
        <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src={Tips} alt="tips"/></SwiperSlide>
          <SwiperSlide><img src={boat2} alt="boat2"/></SwiperSlide>
          <SwiperSlide><img src={yoga} alt="yoga"/></SwiperSlide>
        </Swiper>
      </>
    );
}

export default Carousel;