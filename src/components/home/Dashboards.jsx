"use client";
import React, { useState } from 'react'
import Heading from '../common/Heading'
import { ANALYTICS_DATA, CRM_DATA, MARKETING_DATA, SECURITY_DATA } from '@/utils/helper';
import Icon from '../common/Icons';
import Image from 'next/image';




const Dashboards = () => {
  const [activeTab, setActiveTab] = useState("crm");
  const [data, setData] = useState(CRM_DATA);
  return (

    <section className=" relative px-4 xl:pt-28.5 lg:pt-22 md:pt-18 sm:pt-14 pt-10">
      <Image
        src={"/assets/images/webg/arrow-up.webp"}
        width={85}
        height={86.3}
        alt="arrow-up"
        className=" absolute w-25.25 h-[103.3px] 2xl:top-82 top-88 right-65 -z-20"
      />
      <Image
        src={"/assets/images/webg/arrow-down.webp"}
        width={85}
        height={86.3}
        alt="arrow-down"
        className=" absolute w-25.25 h-[103.3px] -bottom-17 left-66 -z-20 max-md:hidden"
      />
      <div className="max-w-360 w-full mx-auto flex flex-col items-center justify-center ">
        <Heading
          heading={
            <>
              See your revenue grow in <br></br> real time with our dashboards.
            </>
          }
          vari={"pri"}
        />

        <div className="flex max-lg:flex-wrap items-center max-xl:gap-2 justify-center lg:mt-8.25 md:mt-6 sm:mt-5 mt-4">
          <button
            onClick={() => {
              setActiveTab("crm");
              setData(CRM_DATA);
            }}
            className={` border flex items-center justify-center xl:mr-4 transition-all duration-500 cursor-pointer ${activeTab === "crm" ? "lg:w-60.25 md:w-50 sm:w-45 w-40 lg:h-15.5 md:h-12 sm:h-11  h-9 lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] rounded-[60px] bg-dark-moderate-blue thicccboi-700  leading-[100%] text-white" : "lg:w-60.25 md:w-50 sm:w-45 w-35  lg:h-13.25 md:h-11 sm:h-9 h-8 lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]  rounded-[50px] bg-ivory-white thicccboi-500  leading-[110%] text-ship-cove border-light-gray"}`}
          >
            CRM Integrations
          </button>
          <button
            onClick={() => {
              setActiveTab("marketing");
              setData(MARKETING_DATA);
            }}
            className={` border flex items-center justify-center xl:mr-6.25 transition-all duration-500 cursor-pointer ${activeTab === "marketing" ? " lg:w-100 md:w-90 sm:w-80 w-70 lg:h-15.5 md:h-12 sm:h-11  h-9 lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] rounded-[60px] bg-dark-moderate-blue thicccboi-700  leading-[100%] text-white" : " lg:w-84.25 md:w-78 sm:w-70 w-60 lg:h-13.25 md:h-11 sm:h-9 h-8 lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] rounded-[50px] bg-ivory-white thicccboi-500 leading-[110%] text-ship-cove border-light-gray"}`}
          >
            Marketing Platform Integrations
          </button>
          <button
            onClick={() => {
              setActiveTab("analytics");
              setData(ANALYTICS_DATA);
            }}
            className={` border flex items-center justify-center xl:mr-3.5 transition-all duration-500 cursor-pointer ${activeTab === "analytics" ? "lg:w-40.75 md:w-35 sm:w-30 w-26  lg:h-15.5 md:h-12 sm:h-11  h-9 lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] rounded-[60px] bg-dark-moderate-blue thicccboi-700  leading-[100%] text-white" : "lg:w-34 md:w-30 sm:w-26 w-22  lg:h-13.25 md:h-11 sm:h-9 h-8 lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] rounded-[50px] bg-ivory-white thicccboi-500  leading-[110%] text-ship-cove border-light-gray"}`}
          >
            Analytics
          </button>
          <button
            onClick={() => {
              setActiveTab("security");
              setData(SECURITY_DATA);
            }}
            className={` border flex items-center justify-center transition-all duration-500 cursor-pointer ${activeTab === "security" ? "lg:w-76.25 md:w-69 sm:w-61 w-56 lg:h-15.5 md:h-12 sm:h-11  h-9 lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] rounded-[60px] bg-dark-moderate-blue thicccboi-700  leading-[100%] text-white" : "lg:w-66.25 md:w-60 sm:w-55 w-49 lg:h-13.25 md:h-11 sm:h-9 h-8 lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] rounded-[50px] bg-ivory-white thicccboi-500 leading-[110%] text-ship-cove border-light-gray"}`}
          >
            Easy, Safe and Secured
          </button>
        </div>

        <div className="max-w-324.25 w-full lg:mt-8 md:mt-7 sm:mt-6  mt-5 rounded-[48px] border border-none bg-[linear-gradient(259.08deg,#50EDFF_-5.05%,#48B8DA_63.97%,#3B5998_130.42%)] pt-[7.72px]">
          <div className="bg-white rounded-[48px] border border-none lg:pt-[47.28px] md:pt-10 sm:pt-8 p-6  lg:pr-15 md:pr-12 sm:pr-10  lg:pb-8 md:pb-7 sm:p-6  lg:pl-10.25 md:pl-9 sm:pl-8  shadow-[0px_4px_30px_0px_#00000026]">
            {data.map((item, index) => (
              <div key={index} className="flex items-start gap-5 lg:mb-6 md:mb-5 sm:mb-4 mb-3">
                <Icon icon={"check"} className="lg:w-8 md:w-7 sm:w-6 w-5 h-5 sm:h-6 md:h-7  lg:h-8 shrink-0 flex-none" />
                <p
                  className={` lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] leading-[155.56%] text-deep-navy ${index === 0 ? "thicccboi-400" : "thicccboi-500"}`}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboards;
