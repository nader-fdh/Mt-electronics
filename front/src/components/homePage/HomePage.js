import Navbar from "./NavBar/index";
import React, { useState } from "react";

import DropDown from "./DropDown";
import { SliderData } from "../../dataHome/SliderData";
import InfoSection from "./infoSection";
import { homeObjOne } from "./infoSection/Data";
import CarouselHome from "./CarouselHome";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer/footer";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />

      <CarouselHome slides={SliderData} />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default HomePage;
