'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import assets from "../../../public/asset/Assets";
import Image from 'next/image'

import "./swiper.css";

export default function SwiperComponent() {
  return (
    <Swiper
      className="hot-posts swiper-wrapper"
      loop={true}
      gap={10}
      breakpoints={{
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 1,
        },
      }}
      modules={[Autoplay, Pagination, Navigation]}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      navigation={true}>
      <SwiperSlide className="swiper-slide">
        <Image src={assets.image2} width={1000} height={1000} alt="blogs" />
        <div className="category">
          <h4>lifestyle</h4>
          <p>120 articles</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <Image src={assets.image3} width={1000} height={1000} alt="blogs" />
        <div className="category">
          <h4>travel</h4>
          <p>20 articles</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <Image src={assets.image4} width={1000} height={1000} alt="blogs" />
        <div className="category">
          <h4>popular</h4>
          <p>80 articles</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <Image src={assets.image5} width={1000} height={1000} alt="blogs" />
        <div className="category">
          <h4>life hack</h4>
          <p>30 articles</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <Image src={assets.image6} width={1000} height={1000} alt="blogs" />
        <div className="category">
          <h4>nature</h4>
          <p>48 articles</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <Image src={assets.image7} width={1000} height={1000} alt="blogs" />
        <div className="category">
          <h4>religion</h4>
          <p>120 articles</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
