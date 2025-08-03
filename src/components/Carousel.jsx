// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgImg1 from "../assets/images/banner1.jpg";
import bgImg2 from "../assets/images/banner2.jpg";
import bgImg3 from "../assets/images/banner3.jpg";

export default function Carousel() {
  return (
    <div className="container mx-auto px-6 py-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgImg1}
            title="Find Your Dream Job"
            description="Explore thousands of opportunities tailored to your skills and passion"
          ></Slide>
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            image={bgImg2}
            title="Apply Anywhere, Anytime"
            description="Search and apply for jobs on the go — anytime, from any device"
          ></Slide>
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            image={bgImg3}
            title="Grow Your Career"
            description="Unlock your full potential and take the next step in your career journey."
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
