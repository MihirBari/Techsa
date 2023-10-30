import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import projImg1 from "../../assets/img/HDFC_Bank_Logo.svg.png";
import projImg2 from "../../assets/img/BSGlogoNew.png";
import projImg3 from "../../assets/img/Tata_Technologies_logo.png";
import projImg4 from "../../assets/img/lt.png";

const imageArray = [projImg1, projImg2, projImg3, projImg4 , projImg1,projImg2];

export const BFSIcard = () => {
  return (
    <div className="swiper-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3} // Show 3 images at a time (center, left, right)
        coverflowEffect={{
          rotate: 0,
          stretch: 50, // Adjust the stretch for the 3D effect
          depth: 200,  // Adjust the depth for the 3D effect
          modifier: 1,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 1500 }}
      >
        {imageArray.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={image} alt={`slide_image_${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
