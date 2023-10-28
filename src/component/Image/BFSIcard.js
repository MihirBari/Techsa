import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import projImg1 from "../../assets/img/HDFC_Bank_Logo.svg.png";
import projImg2 from "../../assets/img/BSGlogoNew.png";
import projImg3 from "../../assets/img/Tata_Technologies_logo.png";
import projImg4 from "../../assets/img/lt.png";

const imageArray = [projImg1, projImg2, projImg3, projImg4];

export const BFSIcard = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 1500 }} // Auto rotation with a delay of 1500ms (1.5 seconds)
        style={{ height: "80%", width: '80%' }}
        className="swiper_container"
      >
        {imageArray.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`slide_image_${index}`} style={{ width: '85%', height: "55%" }} />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </>
  )
}
