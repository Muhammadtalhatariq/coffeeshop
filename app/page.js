import React from "react";
import Home from "./components/Home/page";
import About from "./components/About/page";
import Feature from "./components/Feature/page";
import Menu from "./components/Menu/page";
import Gallery from "./components/Gallery/page";
import  Offer from "./components/offer/page"
const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Feature />
      <Menu />
      <Gallery />
      <Offer/>
    </div>
  );
};

export default page;
