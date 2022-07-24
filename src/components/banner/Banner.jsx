import React from "react";
import "./Banner.css";

import AVTR1 from "../../components/avatar1.jpg";
import AVTR2 from "../../components/avatar2.jpg";
import AVTR3 from "../../components/avatar3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVTR1,
  },
  {
    avatar: AVTR2,
  },
  {
    avatar: AVTR3,
  },
];

function Banner() {
  return (
    <section id="banner">
      <Swiper
        className="container banner__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ avatar }, index) => {
          return (
            <SwiperSlide key={index} className="banner">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Banner;
