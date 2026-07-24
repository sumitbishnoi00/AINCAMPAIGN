"use client";
import React, { useState } from 'react'
import Heading from '../common/Heading'
import Image from 'next/image'
import { CAMPAIGNS_DATA, LEADS_DATA, REACH_DATA, REVENUE_DATA, SPENDING_DATA } from '@/utils/helper';
import Icon from '../common/Icons';

const Marketing = () => {

  const [activeTab, setActiveTab] = useState("spending");
  const [data, setData] = useState(SPENDING_DATA);
  return (
    <section className=' relative px-4 lg:mt-27.5 md:mt-22 sm:mt-17 mt-10'>
      <Image src={"/assets/images/webg/arrow-down.webp"} width={85} height={86.3} alt='arrow-down' className='absolute w-21.25 h-[86.3px] -bottom-10 right-132 -z-20' />
      <div className='max-w-360 w-full mx-auto flex flex-col items-center justify-center' >
        <div className='max-w-197.5 w-full mb-4.5'>
          <Heading heading={"Marketing analytics that REALLY matter"} vari={"sec"} /> 
        </div>

        <div className=' relative'>


          <Image src={"/assets/images/webg/marketing2.png"} width={988} height={794} alt='marketing' className='md:w-247 md:h-198.5  w-full h-auto shadow-[0px_10px_15px_0px_#00000026] rounded-2xl ' />
          <Image src={"/assets/images/webg/purchase.png"} width={244.8} height={276} alt='purchase' className='lg:w-[244.8px] md:w-50 lg:h-69 md:h-60 absolute z-10 top-41.5 max-md:hidden lg:-right-10 right-0 shadow-[4px_15px_35px_0px_#0000001A] ' />
          <Image src={"/assets/images/webg/world-map.png"} width={673.49} height={362} alt='world-map' className='w-[673.49px] h-90.5 absolute z-10 -bottom-4 left-18 max-md:hidden shadow-[5px_10px_50px_0px_#0000001A] ' />


        </div>

        <div className='flex flex-wrap items-center justify-center  lg:mt-17 md:mt-14 sm:mt-10 mt-7 lg:gap-4.75 md:gap-4 sm:gap-3 gap-2.5'>
          <button onClick={() => { setActiveTab("spending"); setData(SPENDING_DATA); }} className={` border flex items-center justify-center transition-all duration-500 cursor-pointer ${activeTab === "spending" ? "lg:w-40.25 md:w-35 sm:w-28 w-27 lg:h-15.5 md:h-12 sm:h-10  h-9 rounded-[60px] bg-dark-moderate-blue thicccboi-700 lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] leading-[100%] text-white" : " lg:w-35.25 md:w-32 sm:w-27 w-25  lg:h-13.25 md:h-11 sm:h-9 h-8 lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]  rounded-[50px] bg-ivory-white thicccboi-500 leading-[110%] text-ship-cove border-light-gray"}`}>
            Spending
          </button>
          <button onClick={() => { setActiveTab("reach"); setData(REACH_DATA); }} className={` border flex items-center justify-center transition-all duration-500 cursor-pointer ${activeTab === "reach" ? "lg:w-35 md:w-28 sm:w-24 w-22 lg:h-15.5 md:h-12 sm:h-10  h-9 rounded-[60px] bg-dark-moderate-blue thicccboi-700 lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] leading-[100%] text-white" : "lg:w-28 md:w-24 sm:w-20 w-20 lg:h-13.25 md:h-11 sm:h-9 h-8 lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]  rounded-[50px] bg-ivory-white thicccboi-500 leading-[110%] text-ship-cove border-light-gray"}`}>
            Reach
          </button>
          <button onClick={() => { setActiveTab("revenue"); setData(REVENUE_DATA); }} className={` border flex items-center justify-center transition-all duration-500 cursor-pointer ${activeTab === "revenue" ? "lg:w-35.75 md:w-32 sm:w-27 w-25 lg:h-15.5 md:h-12 sm:h-10  h-9 rounded-[60px] bg-dark-moderate-blue thicccboi-700 lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] leading-[100%] text-white" : "lg:w-30.75 md:w-28 sm:w-24 w-22 lg:h-13.25 md:h-11 sm:h-9 h-8 lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]  rounded-[50px] bg-ivory-white thicccboi-500 leading-[110%] text-ship-cove border-light-gray"}`}>
            Revenue
          </button>
          <button onClick={() => { setActiveTab("leads"); setData(LEADS_DATA); }} className={` border flex items-center justify-center transition-all duration-500 cursor-pointer ${activeTab === "leads" ? "lg:w-50 md:w-47 sm:w-44 w-40  lg:h-15.5 md:h-12 sm:h-10  h-9 rounded-[60px] bg-dark-moderate-blue thicccboi-700 lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] leading-[100%] text-white" : "lg:w-45 md:w-40 sm:w-39 w-34 lg:h-13.25 md:h-11 sm:h-9 h-8 lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]  rounded-[50px] bg-ivory-white thicccboi-500 leading-[110%] text-ship-cove border-light-gray"}`}>
            Inbound Leads
          </button>
          <button onClick={() => { setActiveTab("campaigns"); setData(CAMPAIGNS_DATA); }} className={` border flex items-center justify-center transition-all duration-500 cursor-pointer ${activeTab === "campaigns" ? "lg:w-43 md:w-40 sm:w-37 w-33 lg:h-15.5 md:h-12 sm:h-10  h-9 rounded-[60px] bg-dark-moderate-blue thicccboi-700 lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] leading-[100%] text-white" : "lg:w-38.5 md:w-35 sm:w-32 w-30 lg:h-13.25 md:h-11 sm:h-9 h-8 lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]  rounded-[50px] bg-ivory-white thicccboi-500 leading-[110%] text-ship-cove border-light-gray"}`}>
            Campaigns
          </button>
        </div>

        <div className='max-w-280.75 w-full lg:mt-7.75 sm:mt-5 mt-4 rounded-[48px] border border-none bg-[linear-gradient(259.08deg,#50EDFF_-5.05%,#48B8DA_63.97%,#3B5998_130.42%)] pt-[5.29px]'>
          <div className='bg-white rounded-[48px] border border-none lg:pt-[44.71px] md:pt-10 sm:pt-8 pt-6  lg:pr-9 md:pr-7 sm:pr-5.5 pr-5  lg:pb-8.5 md:pb-6.75 sm:pb-5 pb-3.5  lg:pl-8 md:pl-6  pl-4 shadow-[0px_4px_30px_0px_#00000026]'>
            {data.map((item, index) => (

              <div key={index} className='flex items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2 lg:mb-3.75 md:mb-3 sm:mb-2 mb-1.5'>
                <Icon icon={"check"} className="lg:w-8 md:w-7 sm:w-6 w-5 h-5 sm:h-6 md:h-7 lg:h-8 shrink-0 flex-none" />
                <p className='thicccboi-500 lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] leading-[155.56%] text-deep-navy'>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Marketing