import React, { useContext } from "react";
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Slider Images
import Slider1 from "../../assets/images/slider-1.jpg";
import Slider2 from "../../assets/images/slider-2.jpg";
import Slider3 from "../../assets/images/slider-3.jpg";
import Slider4 from "../../assets/images/slider-4.jpg";

// Required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Quote } from "../atoms";
import { DashboardContext } from "../../utils/contexts";

export function MotivationSlider() {
  const { motivationList } = useContext(DashboardContext);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {motivationList.map((item, ind) => {
          let data = {
            img: Slider1,
            author: "Toni Morrison",
          };
          if (ind % 4 === 0) {
            data.img = Slider2;
            data.author = "James Cameron";
          } else if (ind % 4 === 1) {
            data.img = Slider4;
            data.author = "Steve Jobs";
          } else if (ind % 4 === 2) {
            data.img = Slider3;
            data.author = "James Cameron";
          } else {
            data.img = Slider1;
            data.autor = "Jack Ma";
          }
          return (
            <SwiperSlide>
              <div className="bg-image">
                <img src={data.img} alt="Slider" />
              </div>
              <div className="bg-text">
                <Quote quote={item.quotes} author={data.author} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
