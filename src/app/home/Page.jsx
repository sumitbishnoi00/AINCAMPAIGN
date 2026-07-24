import Campaign from '@/components/home/Campaign'
import Dashboards from '@/components/home/Dashboards'
import Hero from '@/components/home/Hero'
import Marketing from '@/components/home/Marketing'
import Privacy from '@/components/home/Privacy'
import Sales from '@/components/home/Sales'
import Scale from '@/components/home/Scale'
import TestimonialSwiper from '@/components/home/TestimonialSwiper'
import React from 'react'

const Page = () => {
  return (
    <>
        <Hero />
        <Dashboards />
        <Marketing />
        <Campaign />
        <Sales />
        <Privacy />
        <TestimonialSwiper />
        <Scale />
    </>
  )
}

export default Page