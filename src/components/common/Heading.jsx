import React from 'react'

const Heading = ({heading, vari}) => {
    const variants = {
        pri: "leading-[117.92%] ",
        sec: "leading-[115.38%] ",
        
        
    }
  return (
    <h2 className={`font-bold text-[32px] sm:text-[36px] md:text-[48px] lg:text-[65px] text-midnight-blue text-center ${variants[vari]}`}>{heading}</h2>
  )
}

export default Heading