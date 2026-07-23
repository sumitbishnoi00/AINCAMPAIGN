import React from "react";
import Heading from "../common/Heading";
import Image from "next/image";

const Sales = () => {
  return (
    <section className="px-4 pt-35.25">
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
      <div className="max-w-376.75 mx-auto flex justify-between flex-row items-center">
        <div className="max-w-158.75 w-full">
          <p className="text-[20px] thicccboi-500 text-deep-navy leading-[140%]">
            The issue with tracking marketing data in an online setting is that
            you’re not getting the full picture. Although you’re still making
            sales offline. it’s nearly impossible to track exactly what online
            campaigns are doin the job, and which ones aren’t...until now.
          </p>
          <div className="max-w-151 ">
            <h2 className="thicccboi-500 text-[20px] mt-4.75 text-deep-navy leading-[140%]">
              With Main Campaign, you can integrate your conversion data with
              Facebook conversion API and Offline Conversion Tracking directly.
            </h2>
          </div>
          <div className=" flex flex-row gap-4 mt-13.75 items-center">
            <button className="text-[20px] shadow-[0_10px_30px_0_#00000026,0_4px_20px_0_#00000033] leading-[140%] thicccboi-700 pr-6.5 pl-6.25 py-3.25 bg-dark-blue rounded-[60px] text-white hover:text-dark-blue hover:bg-white transition-all duration-300 border border-transparent cursor-pointer hover:border-dark-blue">
              Get Started
            </button>
            <div className="flex flex-col ">
              <p className="text-[18px]  thicccboi-700 text-deep-navy leading-[156%] max-w-max ">Free 14 days trial.</p>
              <p className=" thicccboi-500 text-deep-navy text-[16px] leading-[175%] -mt-0.5 max-w-max">no credit card required</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Image
            src={"/assets/images/webg/sales.webp"}
            width={855}
            height={631}
            alt="sales"
          />
        </div>
      </div>
    </section>
  );
};

export default Sales;
