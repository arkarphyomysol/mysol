import { NextPage } from "next";
import Iconx from "../../atoms/icons/iconx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import OpenQuote from "../../atoms/icons/OpenQuoteIcon";
import { testimonialSchema } from "../../../utils/config/schemas/testimonialSchema";

const Testimonial: NextPage = () => {
  return (
    <div className=" text-CoolBlack">
      <div className="px-4 mx-auto py-14 max-w-9xl sm:px-6 font-poppins">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl">{testimonialSchema.header}</h1>
          <p className="my-8 text-sm font-light leading-loose md:leading-10 md:text-2xl">
            {testimonialSchema.subHeader}
          </p>
        </div>

        <div className="lg:pt-10">
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
            {testimonialSchema.items.map((item: any, i: number) => (
              <SwiperSlide key={i}>
                <div className="p-5 space-y-5 rounded-lg shadow-lg bg-slate-300">
                  <OpenQuote className="w-10 h-10 text-ruby" />
                  <p>{item.text}</p>
                  <div className="flex space-x-6">
                    <div className="inline-flex p-2 rounded-lg bg-CoolBlack text-slate-300">
                      {item.profileImage ? (
                        <p>{item.profileImage}</p>
                      ) : (
                        <Iconx icon="UserIcon" className="w-10 h-10 " />
                      )}
                    </div>
                    <div className="">
                      <h1>{item.name}</h1>
                      <p>{item.positionAt}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
