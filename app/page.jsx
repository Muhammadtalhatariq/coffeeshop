import React from "react";
import Home from "./_components/Home/index.jsx";
import About from "./_components/About/index.jsx";
import Feature from "./_components/Feature/index.jsx";
import Menu from "./_components/Menu/index.jsx";
import Gallery from "./_components/Gallery/index.jsx";
import Offer from "./_components/offer/index.jsx";
import Chefs from "./_components/Chefs/index.jsx";
import Testimonials from "./_components/Testimonials/index.jsx";
import Footer from "./_components/Footer/index.jsx";
const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Feature />
      <Menu />
      <Gallery />
      <Offer />
      <Chefs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
