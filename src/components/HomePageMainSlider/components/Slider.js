import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import SlideItem from "./SlideItem";
SwiperCore.use([Navigation]);

const Slider = ({ items }) => {
  return (
    <div className="relative">
      <Swiper
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        spaceBetween={0}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        speed={1000}
        loop
      >
        {items.map((el, index) => {
          return (
            <SwiperSlide key={index}>
              <SlideItem item={el} index={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
