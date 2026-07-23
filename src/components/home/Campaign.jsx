import React from 'react'
import Heading from '../common/Heading'

const Campaign = () => {
  return (
    <section className='px-4 pt-41'>
      <div className='max-w-[1720px] w-full mx-auto flex flex-col items-center justify-center'>
        <Heading heading={<>How <span className='text-dark-blue'> Main Campaign </span> Sync Works</>} vari={"pri"} />

        <div className='flex items-center justify-center gap-[20.14px] mt-16'>
          <div className='max-w-[327.86px] w-full rounded-[22px] border border-none bg-[linear-gradient(259.08deg,#50EDFF_-5.05%,#48B8DA_63.97%,#3B5998_130.42%)] backdrop-blur-[35px] pt-[3.24px]'>
            <div className='bg-white rounded-[22px] shadow-[0px_4px_30px_0px_#00000026] text-center pt-[17.76px] pr-[20.86px] pb-21.25 pl-5.25'>
              <h2 className='thicccboi-700 text-2xl leading-[117%] text-dark-blue mb-3.5'>Step #1</h2>
              <p className='thicccboi-500 text-[16px] leading-[150%] text-slate-gray'>Facebook user fills out your Facebook ad’s instant lead form</p>
            </div>
          </div>

          <div className='max-w-[327.86px] w-full rounded-[22px] border border-none bg-[linear-gradient(259.08deg,#50EDFF_-5.05%,#48B8DA_63.97%,#3B5998_130.42%)] backdrop-blur-[35px] pb-[3.24px]'>
            <div className='bg-white rounded-[22px] shadow-[0px_4px_30px_0px_#00000026] text-center pt-5.25 pr-[17.86px] pb-[81.76px] pl-4.25'>
              <h2 className='thicccboi-700 text-2xl leading-[117%] text-dark-blue mb-3.5'>Step #2</h2>
              <p className='thicccboi-500 text-[16px] leading-[150%] text-slate-gray'>Main Campaign automatically syncs inbound Facebook leads to sales CRM</p>
            </div>
          </div>

          <div className='max-w-[327.86px] w-full rounded-[22px] border border-none bg-[linear-gradient(259.08deg,#50EDFF_-5.05%,#48B8DA_63.97%,#3B5998_130.42%)] backdrop-blur-[35px] pt-[3.24px]'>
            <div className='bg-white rounded-[22px] shadow-[0px_4px_30px_0px_#00000026] text-center pt-[17.76px] pr-[19.86px] pb-21.25 pl-4.75'>
              <h2 className='thicccboi-700 text-2xl leading-[117%] text-dark-blue mb-3.5'>Step #3</h2>
              <p className='thicccboi-500 text-[16px] leading-[150%] text-slate-gray'>Lead makes a purchase in an offline setting (example; In person)</p>
            </div>
          </div>

          <div className='max-w-[327.86px] w-full rounded-[22px] border border-none bg-[linear-gradient(259.08deg,#50EDFF_-5.05%,#48B8DA_63.97%,#3B5998_130.42%)] backdrop-blur-[35px] pb-[3.24px]'>
            <div className='bg-white rounded-[22px] shadow-[0px_4px_30px_0px_#00000026] text-center pt-5.25 pr-[17.86px] pb-[81.76px] pl-4.5'>
              <h2 className='thicccboi-700 text-2xl leading-[117%] text-dark-blue mb-3.5'>Step #4</h2>
              <p className='thicccboi-500 text-[16px] leading-[150%] text-slate-gray'>Sales team updates sales CRM with the Lead’s purchase revenue</p>
            </div>
          </div>

          <div className='max-w-[327.86px] w-full rounded-[22px] border border-none bg-[linear-gradient(259.08deg,#50EDFF_-5.05%,#48B8DA_63.97%,#3B5998_130.42%)] backdrop-blur-[35px] pt-[3.24px]'>
            <div className='bg-white rounded-[22px] shadow-[0px_4px_30px_0px_#00000026] text-center pt-[17.76px] pr-[12.86px] pb-3.5 pl-3.25'>
              <h2 className='thicccboi-700 text-2xl leading-[117%] text-dark-blue mb-3.5'>Step #5</h2>
              <p className='thicccboi-500 text-[16px] leading-[148%] text-slate-gray'>Main Campaign attributes Lead’s purchase revenue to Facebook marketing campaigns. Now you know exactly which campaigns are driving purchases for your business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Campaign