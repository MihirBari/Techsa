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
import projImg1 from "../../assets/img/SBM.png";
import projImg2 from "../../assets/img/BSGlogoNew.png";
import projImg3 from "../../assets/img/Tata_Technologies_logo.png";
import projImg4 from "../../assets/img/lt.png";
import projImg5 from "../../assets/img/HDFC_Bank_Logo.svg.png";
import projImg6 from "../../assets/img/BSE.png";
const imageArray = [projImg1, projImg2, projImg3, projImg4, projImg5, projImg6];

export const BFSIcard = () => {
  return (
    <div className="swiper-container">
      <Swiper
        effect={'coverflow'}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 200,
          modifier: 1,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 1500 }}
        noSwiping={true} 
        noSwipingClass="swiper-no-swiping"
      >
        {imageArray.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content swiper-no-swiping">
              <img src={image} alt={`slide_image_${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
