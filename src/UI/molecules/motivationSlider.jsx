import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../../assets/images/slider-1.jpg";
import Slider2 from "../../assets/images/slider-2.jpg";
import Slider3 from "../../assets/images/slider-3.jpg";
import Slider4 from "../../assets/images/slider-4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Quote } from "../atoms";
import { DashboardContext } from "../../utils/contexts";

export function MotivationSlider() {
  const { motivationList } = useContext(DashboardContext);
  return (
    <>
      <Swiper
        slidesPerView={2}
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
        className="mySwiper"
      >
        {motivationList.map((item) => {
          const a = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
          let data = {
            img: Slider1,
            author: "Toni Morrison",
          };
          if (a === 1) {
            data.img = Slider2;
            data.author = "James Cameron";
          } else if (a === 2) {
            data.img = Slider4;
            data.author = "Steve Jobs";
          } else if (a === 3) {
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
