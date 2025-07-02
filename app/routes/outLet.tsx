"use client" 

import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from '../_components/navBar';
import Footer from '../_components/footer';

const AppRoutes = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AppRoutes