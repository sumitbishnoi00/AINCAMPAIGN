"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Heading from "../common/Heading";
import { BUSINESSES_DATA } from "@/utils/helper";

const TestimonialSwiper = () => {
  return (
    <section className="px-4 lg:pt-37.25 md:pt-24 sm:pt-19 pt-10">
      <div className="max-w-360 w-full mx-auto flex flex-col items-center justify-center">
        <div className="max-w-221.75 w-full flex items-center">
          <Heading
            heading={"Businesses generate more revenue with Main Campaign"}
            vari={"pri"}
          />
        </div>

        <Swiper
          className="w-full px-4 lg:mt-19.25 md:mt-16 sm:mt-10 mt-8"
          slidesPerView={3}
          spaceBetween={7}
          centeredSlides={false}
          loop
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {BUSINESSES_DATA.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative mt-19.25 px-5">
                <div className="absolute left-1/2 -translate-x-1/2 -top-17 z-20 lg:h-40.75 lg:w-40.75 md:h-35 md:w-35 sm:w-32 sm:h-32 w-30 h-30  rounded-[90px] bg-white shadow-[0px_4px_30px_0px_#00000008,0px_0px_60px_0px_#0000001A] flex items-center justify-center">
                  <Image src={item.logo} alt="logo" width={163} height={163} className="lg:w-40.75 lg:h-40.75 md:h-35 md:w-35  sm:w-32 sm:h-32 w-30 h-30 "  />
                </div>

                <div className="max-w-111.5 w-full rounded-[48px] border border-none bg-royal-blue backdrop-blur-[35px] pt-2">
                  <div className="rounded-[48px] border border-none bg-white  lg:pt-29.75 md:pt-25 sm:pt-22 pt-19 pr-3.5 pl-3.25 pb-6.75 shadow-[0px_4px_30px_0px_#00000026]">
                    <div className="flex flex-col px-3">
                      <h3 className="thicccboi-700 lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] leading-[117%] text-light-black">
                        {item.company}
                      </h3>

                      <p className="mt-1.75 thicccboi-500 lg:text-[16px] md:text-[14px] text-[12px] leading-[134%] text-slate-gray">
                        {item.description}
                      </p>

                      <div className="lg:mt-8.5 md:mt-6 sm:mt-5 mt-4.5 flex items-center gap-2">
                        <Image
                          src={item.avatar}
                          alt=""
                          width={58}
                          height={58}
                          className="rounded-[90px] lg:w-14.5 lg:h-14.5 md:w-12 md:h-12 w-11 h-11"
                        />

                        <div>
                          <h4 className="thicccboi-700 lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] leading-[115%] tracking-[5%] text-light-black">
                            {item.user}
                          </h4>

                          <p className="thicccboi-500 lg:text-[14px] md:text-[12px] text-[10px] leading-[143.86%] text-slate-gray mt-px">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:mt-7.25 md:mt-6 sm:mt-5 mt-4 mb-4  lg:mb-7.25 md:mb-6 sm:mb-5 border w-full border-silver-gray"></div>

                    <div className="flex items-center justify-center">
                      <button className="lg:w-43 md:w-40 sm:w-35 w-30 h-7 sm:h-8 md:h-9 rounded-[60px] bg-dark-blue text-white hover:bg-white hover:text-dark-blue border border-transparent hover:border-dark-blue thicccboi-700 md:text-[14px] text-[12px] leading-[100%] flex items-center justify-center transition-all duration-500 cursor-pointer">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSwiper;
