import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-white relative pt-17.75  px-4">
      <div className=" herobg absolute top-0 right-0 xl:w-319.5 xl:h-287.75 h-auto w-270 "></div>
      <div className="max-w-348 w-full mx-auto flex flex-row items-center justify-between z-10 relative ">
        <a href="#">
          <Image
            src={"/assets/images/webg/logo.webp"}
            width={200}
            height={28}
            alt="logo"
            className="h-[28.86px]"
          />
        </a>
        <div className="flex flex-row items-center gap-12.5">
          <h3 className="text-light-black thicccboi-600 text-[14px] leading-[115%] ">
            Login or Register
          </h3>
          <button className="text-white bg-dark-blue hover:text-dark-blue hover:bg-white duration-300 transition-all text-[14px] py-3 thicccboi-600 leading-[115%] px-5.25 rounded-[60px] cursor-pointer ">
            Start Free Trial
          </button>
        </div>
      </div>
      <div className="max-w-329.25 mx-auto z-10 relative mt-17 text-center">
        <h1 className="thicccboi-700 text-[80px] leading-[119%]">
          The Most Powerful Offline Lead Conversion Data for your{" "}
          <span className="text-white">Business. </span>
        </h1>
        <div className="max-w-116 mx-auto w-full">
          <h3 className="text-[20px] thicccboi-400 leading-[115%] mt-3.75 text-white ">
            Seamless integration with your CRM and Facebook
          </h3>
        </div>
        <input
          type="email"
          placeholder="Enter you work email"
          className="pt-4.75 pb-4.5 pl-4 border border-light-lavender rounded-[60px] bg-white text-slate-gray text-[18px] thicccboi-500 leading-[146%] outline-none max-w-142.5 w-full mt-9.5"
        />
      </div>
    
        <Image
          src={"/assets/images/webg/hero.webp"}
          width={1485}
          height={800}
          alt="marketing-fig"
          className="mx-auto z-10 relative mt-28"
        />
      
    </section>
  );
};

export default Hero;
