import React from 'react'
import Hero from "../_components/hero";
import WebDevToolsCards from "../_components/Web-tools";
import WebsiteTypeCard from "../_components/website-type"
import WebDevelopmentServices from "../_components/ServiceWeOffer";


const WebDevelopmentPage = () => {
  return (
    <>
        <Hero/>
        <WebDevToolsCards/>
        <WebsiteTypeCard/>
        <WebDevelopmentServices/>
        
    </>
  )
}

export default WebDevelopmentPage;


