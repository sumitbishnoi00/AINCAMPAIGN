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
    <section className='px-4 mt-27.5'>
      <div className='max-w-360 w-full mx-auto flex flex-col items-center justify-center' >
        <div className='max-w-197.5 w-full mb-4.5'>
          <Heading heading={"Marketing analytics that REALLY matter"} vari={"sec"} /> 
        </div>

        <div className=' relative'>
          <Image src={""} width={988} height={794} alt='marketing' />
          <Image src={"/assets/images/webg/purchase.webp"} width={244.8} height={276} alt='purchase' className=' absolute z-10 top-7 right-8' />
          <Image src={"/assets/images/webg/world-map.webp"} width={673.49} height={362} alt='world-map' />
        </div>

        <div className='flex flex-wrap items-center justify-center mt-8.25 gap-4.75'>
          <button onClick={() => { setActiveTab("spending"); setData(SPENDING_DATA); }} className={` border flex items-center justify-center transition-all duration-500 cursor-pointer ${activeTab === "spending" ? "w-40.25 h-15.5 rounded-[60px] bg-dark-moderate-blue thicccboi-700 text-[22px] leading-[100%] text-white" : "w-35.25 h-13.25 rounded-[50px] bg-ivory-white thicccboi-500 text-[20px] leading-[110%] text-ship-cove border-light-gray"}`}>
            Spending
          </button>
          <button onClick={() => { setActiveTab("reach"); setData(REACH_DATA); }} className={` border flex items-center justify-center transition-all duration-500 cursor-pointer ${activeTab === "reach" ? "w-35 h-15.5 rounded-[60px] bg-dark-moderate-blue thicccboi-700 text-[22px] leading-[100%] text-white" : "w-28 h-13.25 rounded-[50px] bg-ivory-white thicccboi-500 text-[20px] leading-[110%] text-ship-cove border-light-gray"}`}>
            Reach
          </button>
          <button onClick={() => { setActiveTab("revenue"); setData(REVENUE_DATA); }} className={` border flex items-center justify-center transition-all duration-500 cursor-pointer ${activeTab === "revenue" ? "w-35.75 h-15.5 rounded-[60px] bg-dark-moderate-blue thicccboi-700 text-[22px] leading-[100%] text-white" : "w-30.75 h-13.25 rounded-[50px] bg-ivory-white thicccboi-500 text-[20px] leading-[110%] text-ship-cove border-light-gray"}`}>
            Revenue
          </button>
          <button onClick={() => { setActiveTab("leads"); setData(LEADS_DATA); }} className={` border flex items-center justify-center transition-all duration-500 cursor-pointer ${activeTab === "leads" ? "w-50 h-15.5 rounded-[60px] bg-dark-moderate-blue thicccboi-700 text-[22px] leading-[100%] text-white" : "w-45 h-13.25 rounded-[50px] bg-ivory-white thicccboi-500 text-[20px] leading-[110%] text-ship-cove border-light-gray"}`}>
            Inbound Leads
          </button>
          <button onClick={() => { setActiveTab("campaigns"); setData(CAMPAIGNS_DATA); }} className={` border flex items-center justify-center transition-all duration-500 cursor-pointer ${activeTab === "campaigns" ? "w-43 h-15.5 rounded-[60px] bg-dark-moderate-blue thicccboi-700 text-[22px] leading-[100%] text-white" : "w-38.5 h-13.25 rounded-[50px] bg-ivory-white thicccboi-500 text-[20px] leading-[110%] text-ship-cove border-light-gray"}`}>
            Campaigns
          </button>
        </div>

        <div className='max-w-280.75 w-full mt-7.75 rounded-[48px] border border-none bg-[linear-gradient(259.08deg,#50EDFF_-5.05%,#48B8DA_63.97%,#3B5998_130.42%)] pt-[5.29px]'>
          <div className='bg-white rounded-[48px] border border-none pt-[44.71px] pr-9 pb-8.5 pl-8 shadow-[0px_4px_30px_0px_#00000026]'>
            {data.map((item, index) => (

              <div key={index} className='flex items-start gap-5 mb-3.75'>
                <Icon icon={"check"} className="w-8 h-8 shrink-0 flex-none" />
                <p className='font-medium text-[18px] leading-[155.56%] text-deep-navy'>
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