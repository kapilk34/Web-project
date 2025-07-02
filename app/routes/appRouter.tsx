"use client" 

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Outlet from "./outLet";
import Home from "../pages/home";
import Services from "../pages/services";
import AboutUs from "../pages/about";
import Contact from "../pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Services />
      },
      {
        path: "/aboutus",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])
export default router