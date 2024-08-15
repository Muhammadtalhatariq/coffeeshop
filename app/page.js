import React from "react";
import Home from "./components/Home";
import About from "./components/About/index.jsx";
import Feature from "./components/Feature/index.jsx";
import Menu from "./components/Menu/index.jsx";
import Gallery from "./components/Gallery/index.jsx";
import Offer from "./components/offer/index.jsx";
import Chefs from "./components/Chefs/index.jsx";
import Testimonials from "./components/Testimonials/index.jsx";
import Footer from "./components/Footer/index.jsx";
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
