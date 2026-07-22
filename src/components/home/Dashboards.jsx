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
    <section className=' relative px-4 pt-28.5'>
      <Image src={"/assets/images/webg/arrow-up.webp"} width={85} height={86.3} alt='arrow-up' className=' absolute w-25.25 h-[103.3px] top-82 right-65 -z-20'  />
      <Image src={"/assets/images/webg/arrow-down.webp"} width={85} height={86.3} alt='arrow-down' className=' absolute w-25.25 h-[103.3px] -bottom-17 left-66 -z-20' />
      <div className='max-w-360 w-full mx-auto flex flex-col items-center justify-center '>
            <Heading heading={<>See your revenue grow in <br></br> real time with our dashboards.</>} vari={"pri"} />

            <div className='flex flex-wrap items-center justify-center mt-8.25'>
              <button onClick={() => {setActiveTab("crm"); setData(CRM_DATA); }} className={` border flex items-center justify-center mr-4 transition-all duration-500 cursor-pointer ${activeTab === "crm" ? "w-60.25 h-15.5 rounded-[60px] bg-dark-moderate-blue thicccboi-700 text-[22px] leading-[100%] text-white" : "w-60.25 h-13.25 rounded-[50px] bg-ivory-white thicccboi-500 text-[20px] leading-[110%] text-ship-cove border-light-gray"}`}>
                  CRM Integrations
              </button>
              <button onClick={() => {setActiveTab("marketing"); setData(MARKETING_DATA); }} className={` border flex items-center justify-center mr-6.25 transition-all duration-500 cursor-pointer ${activeTab === "marketing" ? "w-100 h-15.5 rounded-[60px] bg-dark-moderate-blue thicccboi-700 text-[22px] leading-[100%] text-white" : "w-84.25 h-13.25 rounded-[50px] bg-ivory-white thicccboi-500 text-[20px] leading-[110%] text-ship-cove border-light-gray"}`}>
                  Marketing Platform Integrations
              </button>
              <button onClick={() => {setActiveTab("analytics"); setData(ANALYTICS_DATA); }} className={` border flex items-center justify-center mr-3.5 transition-all duration-500 cursor-pointer ${activeTab === "analytics" ? "w-40.75 h-15.5 rounded-[60px] bg-dark-moderate-blue thicccboi-700 text-[22px] leading-[100%] text-white" : "w-34 h-13.25 rounded-[50px] bg-ivory-white thicccboi-500 text-[20px] leading-[110%] text-ship-cove border-light-gray"}`}>
                  Analytics
              </button>
              <button onClick={() => {setActiveTab("security"); setData(SECURITY_DATA); }} className={` border flex items-center justify-center transition-all duration-500 cursor-pointer ${activeTab === "security" ? "w-76.25 h-15.5 rounded-[60px] bg-dark-moderate-blue thicccboi-700 text-[22px] leading-[100%] text-white" : "w-66.25 h-13.25 rounded-[50px] bg-ivory-white thicccboi-500 text-[20px] leading-[110%] text-ship-cove border-light-gray"}`}>
                  Easy, Safe and Secured
              </button>
            </div>

            <div className='max-w-324.25 w-full mt-8 rounded-[48px] border border-none bg-[linear-gradient(259.08deg,#50EDFF_-5.05%,#48B8DA_63.97%,#3B5998_130.42%)] pt-[7.72px]'>
              <div className='bg-white rounded-[48px] border border-none pt-[47.28px] pr-15 pb-8 pl-10.25 shadow-[0px_4px_30px_0px_#00000026]'>
                {data.map((item, index) => (

                  <div key={index} className='flex items-start gap-5 mb-6'>
                      <Icon icon={"check"} className="w-8 h-8 shrink-0 flex-none" />
                      <p className={` text-[18px] leading-[155.56%] text-deep-navy ${index === 0 ? "thicccboi-400" : "thicccboi-500"}`}>
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

export default Dashboards