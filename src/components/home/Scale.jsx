"clipPath";
import React from "react";
import Heading from "../common/Heading";
import Image from "next/image";

const Scale = () => {
  return (
    <section className="px-4 lg:py-22.5 md:py-18 sm:py-14 py-10 relative">
      <div>
        <div className="max-w-177.5 mx-auto w-full flex flex-col items-center lg:gap-7.5 md:gap-5 sm:gap-3.75 gap-2.5">
          <Heading heading={"Are you ready to scale?"} vari={"pri"} />
          <button className="lg:py-5 md:py-4 sm:py-3 py-2  lg:px-[29.5px] md:px-5.5 sm:px-4 px-3  bg-dark-blue text-white border border-transparent hover:bg-white hover:text-dark-blue hover:border-dark-blue duration-300 transition-all lg:text-[16px] md:text-[15px] sm:text-[14px] text-[10px]  thicccboi-500 rounded-[60px] leading-[90%] cursor-pointer ">
            Start My Free Trial
          </button>
        </div>
        <div className="mx-auto max-w-316 relative lg:mt-9.5 md:mt-7 sm:mt-4 mt-3  ">
          <Image
            src={"/assets/images/webg/scale1.webp"}
            width={1264}
            height={851}
            alt="Leads-center "
            className="lg:rounded-[31px] rounded-2xl shadow-[0px_10px_15px_0px_#00000026]"
          />
          <Image
            src={"/assets/images/webg/scale2.webp"}
            width={1042}
            height={47.52}
            alt="scale"
            className=" absolute top-[54%] right-[-3.5%] max-2xl:hidden"
          />
        </div>
      </div>
      <div className="-z-10 absolute lg:-bottom-75.75 lg:-left-26.25 max-lg:hidden ">
        <Image
          src={"/assets/images/webg/scalebg.webp"}
          alt="scale"
          width={686}
          height={762}
          className="2xl:w-171.5  xl:w-150 lg:w-140 md:w-120 2xl:h-190.5 xl:h-170 lg:h-130 md:h-100 "
        />
      </div>
    </section>
  );
};

export default Scale;
