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
import projImg1 from "../../assets/Logo/BFSi/AU Small Finance.png";
import projImg2 from "../../assets/Logo/BFSi/Ageas Federal.png";
import projImg3 from "../../assets/Logo/BFSi/Axis Bank.png";
import projImg4 from "../../assets/Logo/BFSi/BSE.png";
import projImg5 from "../../assets/Logo/BFSi/DCB-Bank.jpg";
import projImg6 from "../../assets/Logo/BFSi/HDB Financial Services Limited.jpg";
import projImg7 from "../../assets/Logo/BFSi/HDFC Sec.png";
import projImg8 from "../../assets/Logo/BFSi/ICICI BANK LIMITED.jpg";
import projImg9 from "../../assets/Logo/BFSi/IDBI-Bank-logo.jpg";
import projImg17 from "../../assets/Logo/BFSi/LTI.png";
import projImg10 from "../../assets/Logo/BFSi/Motilal Oswal.png";
import projImg11 from "../../assets/Logo/BFSi/Reliance Nippon.png";
import projImg12 from "../../assets/Logo/BFSi/SBM Bank.png";
import projImg13 from "../../assets/Logo/BFSi/Sharekhan.png";
import projImg14 from "../../assets/Logo/BFSi/TJSB Bank.png";
import projImg15 from "../../assets/Logo/BFSi/Yes Bank.png";
import projImg16 from "../../assets/Logo/BFSi/mahindra-finance-logo.png";

const imageArray = [projImg1, projImg2, projImg3, projImg4, projImg5, projImg6, projImg7, projImg8,
  projImg9, projImg10, projImg11, projImg12, projImg13, projImg14, projImg15, projImg16, projImg17];

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
        loop={true}
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
