import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-white relative xl:pt-17.75  lg:pt-15 md:pt-12 sm:pt-9 pt-4 px-4">
      <div className=" herobg absolute top-0 right-0 2xl:w-319.5 xl:w-290 lg:w-250 md:w-190 sm:w-150 w-90 xl:h-287.75 lg:h-260 md:h-190 sm:h-150 h-90 "></div>
      <div className="max-w-348 w-full mx-auto flex flex-row items-center justify-between z-10 relative ">
        <a href="#">
          <Image
            src={"/assets/images/webg/logo.webp"}
            width={200}
            height={28}
            alt="logo"
            className="lg:h-[28.86px] md:h-5.5 sm:h-4 h-3.5 lg:w-50 md:w-40 sm:w-30 w-25 "
          />
        </a>
        <div className="flex flex-row items-center lg:gap-12.5 md:gap-9 sm:gap-5 gap-2">
          <h3 className="text-light-black cursor-pointer thicccboi-600 md:text-[14px] sm:text-[12px] text-[10px]  leading-[115%] ">
            Login or Register
          </h3>
          <button className="text-white  bg-dark-blue hover:text-dark-blue hover:bg-white duration-400 transition-all md:text-[14px] sm:text-[12px] text-[10px]  thicccboi-600 sm:leading-[143%] leading-[122%]  md:px-5.25 sm:px-4 px-3 md:py-2.5 sm:py-2 py-1.5  rounded-[60px] cursor-pointer ">
            Start Free Trial
          </button>
        </div>
      </div>
      <div className="max-w-329.25 mx-auto z-10 relative xl:mt-17 lg:mt-14 md:mt-11 sm:mt-8 mt-7 text-center">
        <h1 className="thicccboi-700 xl:text-[80px] lg:text-[70px] md:text-[58] sm:text-[48px] text-[32px] sm:leading-[119%] leading-[102%]">
          The Most Powerful Offline Lead Conversion Data for your{" "}
          <span className="text-white">Business. </span>
        </h1>
        <div className="max-w-116 mx-auto w-full md:mt-3.75 mt-3 ">
          <h3 className="md:text-[20px] sm:text-[16px] text-[14px] thicccboi-400 leading-[115%]  text-white ">
            Seamless integration with your CRM and Facebook
          </h3>
        </div>
        <input
          type="email"
          placeholder="Enter you work email"
          className="lg:pt-4.75 lg:pb-4.5 md:py-4  py-2 pl-4 border border-light-lavender rounded-[60px] bg-white text-slate-gray lg:text-[18px] md:text-[15px] text-[12px] thicccboi-500 leading-[146%] outline-none lg:max-w-142.5 md:max-w-100 max-w-60 w-full lg:mt-9.5 md:mt-6 sm:mt-5 mt-4"
        />
      </div>
    
        <Image
          src={"/assets/images/webg/hero3.png"}
          width={1485}
          height={800}
          alt="marketing-fig"
          className="mx-auto z-10 relative xl:mt-28 lg:mt-23 md:mt-19 sm:mt-14 mt-10 "
        />
      
    </section>
  );
};

export default Hero;
