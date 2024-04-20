import React from "react";
import Home from "./components/Home/page";
import About from "./components/About/page";
import Feature from "./components/Feature/page";
import Menu from "./components/Menu/page";
const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Feature />
      <Menu />
    </div>
  );
};

export default page;
