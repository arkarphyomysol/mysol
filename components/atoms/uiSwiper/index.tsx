import { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface UiSwiperProps {
  children: JSX.Element | JSX.Element[];
}
interface UiSwiperSlideProps {
  children: JSX.Element | JSX.Element[];
}

export const UiSwiperSlide = ({ children }: UiSwiperSlideProps) => {
  return <SwiperSlide>{children}</SwiperSlide>;
};
const UiSwiper = ({ children }: UiSwiperProps) => {
  return (
    <div className="">
      <Swiper
        spaceBetween={50}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        modules={[Navigation, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}>
        {children}
      </Swiper>
    </div>
  );
};
export default UiSwiper;
