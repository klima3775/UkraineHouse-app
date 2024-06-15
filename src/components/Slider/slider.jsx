import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "./slider.scss";

import logo from "../../img/Borsh.jpg";

const Slider = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 9000,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={logo} alt="Slide 1" />
          <div className="slide-content">
            <h2>Лучше чем лотерея!</h2>
            <p>Заказывай и получай билет к следующему заказу</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} alt="Slide 2" />
          <div className="slide-content">
            <h2>от 699</h2>
            <p>Roll Club дарит</p>
            <img src="pepsi.jpg" alt="Pepsi" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} alt="Slide 3" />
          <div className="slide-content">
            <h2>от 999</h2>
            <p>Roll Club дарит</p>
            <img src="sushi.jpg" alt="Sushi" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} alt="Slide 4" />
          <div className="slide-content">
            <h2>от 1599</h2>
            <p>Roll Club дарит</p>
            <img src="roll.jpg" alt="Roll" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Slider;
