import React from 'react'
import Cards from "../_components/cards";
import Gallery from "../_components/courses";
import HowItWorksSection from "../_components/work";


const page = () => {
  return (
    <>
      <Cards/>
      <Gallery/>
      <HowItWorksSection/>
    </>
  )
}

export default page