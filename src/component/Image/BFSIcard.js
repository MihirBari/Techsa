import React, { useState } from "react";
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
import projImg18 from "../../assets/Logo/BFSi/AAVAS.png";
import projImg19 from "../../assets/Logo/BFSi/Axis Securities.png";
import projImg20 from "../../assets/Logo/BFSi/BNP Paribas.png";
import projImg21 from "../../assets/Logo/BFSi/ICICI Prudential AMC.png";
import projImg22 from "../../assets/Logo/BFSi/ICICI Prudential Life.png";
import projImg23 from "../../assets/Logo/BFSi/SODEXO.png";
import projImg24 from "../../assets/Logo/BFSi/LTFS.png";
import projImg25 from "../../assets/Logo/BFSi/Allahabad Bank.png";
import projImg26 from "../../assets/Logo/BFSi/IDFC Asset Management.png";
import projImg27 from "../../assets/Logo/BFSi/Karnataka Bank.png";
import projImg28 from "../../assets/Logo/BFSi/RBL Bank.png";

const imageArray = [projImg1, projImg2, projImg3, projImg4, projImg5, projImg6, projImg7, projImg8,
  projImg9, projImg10, projImg11, projImg12, projImg13, projImg14, projImg15, projImg16, projImg17,
  projImg18,  projImg19, projImg20,  projImg21,  projImg22,  projImg23,  projImg24,  projImg25, projImg26,
  projImg27, projImg28];

export const BFSIcard = () => {
  const [swiper, setSwiper] = useState(null);

  const handleMouseEnter = () => {
    if (swiper) {
      swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiper) {
      swiper.autoplay.start();
    }
  };

  return (
    <div
      className="swiper-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        effect={"coverflow"}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 0 }}
        loop={true}
        noSwiping={true}
        noSwipingClass="swiper-no-swiping"
        speed={700}
        onSwiper={setSwiper}
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
};
