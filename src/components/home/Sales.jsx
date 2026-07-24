import React from "react";
import Heading from "../common/Heading";
import Image from "next/image";

const Sales = () => {
  return (
    <section className="px-4 2xl:pt-35.25 xl:pt-30 lg:pt-25 md:pt-20 sm:pt-15 pt-10 ">
      <div className="max-w-247.75 w-full mx-auto ">
        <Heading
          heading={
            <>
              Understand <span className="text-dark-blue">how many sales </span>{" "}
              are driven from your campaigns{" "}
            </>
          }
          vari={"pri"}
        />
      </div>
      <div className="max-w-376.75 mx-auto flex justify-between xl:flex-row flex-col items-center">
        <div className="max-w-158.75 w-full max-xl:mt-10 max-lg:mt-8 max-md:mt-6 max-sm:mt-2 max-xl:text-center flex flex-col max-xl:items-center ">
          <p className="lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] thicccboi-500 text-deep-navy leading-[140%]">
            The issue with tracking marketing data in an online setting is that
            you’re not getting the full picture. Although you’re still making
            sales offline. it’s nearly impossible to track exactly what online
            campaigns are doin the job, and which ones aren’t...until now.
          </p>
          <div className="max-w-151 ">
            <h2 className="thicccboi-500 lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] md:mt-4.75 am:mt-3 mt-2 text-deep-navy leading-[140%]">
              With Main Campaign, you can integrate your conversion data with
              Facebook conversion API and Offline Conversion Tracking directly.
            </h2>
          </div>
          <div className=" flex flex-row gap-4 lg:mt-13.75 md:mt-10 sm:mt-7 mt-4 items-center">
            <button className=" lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] shadow-[0_10px_30px_0_#00000026,0_4px_20px_0_#00000033] leading-[140%] thicccboi-700 lg:pr-6.5 lg:pl-6.25 md:px-4 sm:px-3 px-2.5 lg:py-3.25 md:py-2.75 sm:py-2 py-1.5 bg-dark-blue rounded-[60px] text-white hover:text-dark-blue hover:bg-white transition-all duration-300 border border-transparent cursor-pointer hover:border-dark-blue">
              Get Started
            </button>
            <div className="flex flex-col ">
              <p className=" lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] thicccboi-700 text-deep-navy leading-[156%] max-w-max ">
                Free 14 days trial.
              </p>
              <p className=" lg:text-[16px] md:text-[15px] sm:text-[12px] text-[10px] thicccboi-500 text-deep-navy  leading-[175%] -mt-0.5 max-w-max">
                no credit card required
              </p>
            </div>
          </div>
        </div>

        <div className="xl:mt-6 mt-2">
          <Image
            src={"/assets/images/webg/sells.webp"}
            width={855}
            height={631}
            alt="sales"
            className="object-cover object-center w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Sales;
