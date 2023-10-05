import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Quote } from "../atoms";

export function MotivationSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Quote
            quote={
              "If there's a book that you want to read, but it hasn't been written yet, then you must write it."
            }
            author={"Toni Morrison"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Quote
            quote={
              "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
            }
            author={"James Cameron"}
          />
          <blockquote></blockquote>
          <cite></cite>
        </SwiperSlide>
        <SwiperSlide>
          <Quote
            quote={
              "If there's a book that you want to read, but it hasn't been written yet, then you must write it."
            }
            author={"Toni Morrison"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Quote
            quote={
              "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
            }
            author={"James Cameron"}
          />
          <blockquote></blockquote>
          <cite></cite>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
