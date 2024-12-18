import "./App.css";
import React from "react";
import Advantages from "./components/advantages";
import { Carousel } from "./components/carousel";
import ContactUs from "./components/contactUs";
import LogoCarouselPage from "./components/partners";

function App() {
  return (
    <>
      <div
        style={{
          background:
            "transparent linear-gradient(180deg, #d5f0f7 0%, #ffffff 100%) 0% 0% no-repeat padding-box",
        }}
        className="min-h-screen"
      >
        <Carousel className="border-b" />
        {/* <WhoWeUs /> */}
        <Advantages />
        <ContactUs />
        <LogoCarouselPage />
      </div>
    </>
  );
}

export default App;
