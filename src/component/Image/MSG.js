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
import projImg1 from "../../assets/Logo/MFG/Adani Ports.png";
import projImg2 from "../../assets/Logo/MFG/Bharat Forge.png";
import projImg3 from "../../assets/Logo/MFG/Eureka Forbes.png";
import projImg4 from "../../assets/Logo/MFG/Mahindra & Mahindra Ltd..png";
import projImg5 from "../../assets/Logo/MFG/Pidilite Industries.png";
import projImg6 from "../../assets/Logo/MFG/Toshiba.png";


const imageArray = [projImg1, projImg2, projImg3, projImg4, projImg5, projImg6];

export const MSG = () => {
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
        speed={400} // Adjust the speed as needed
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