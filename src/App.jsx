import "./App.css";
import React from "react";
import { Carousel } from "./components/carousel";
import ContactUs from "./components/contactUs";
import LogoCarouselPage from "./components/partners";
import WhoWeUs from "./components/whowe.jsx";
import Special from "./components/special.jsx";
import Class from "./components/class.jsx";

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
                <Carousel className="border-b"/>
                <WhoWeUs/>
                <Special/>
                <Class/>
                <ContactUs/>
                <LogoCarouselPage/>
            </div>
        </>
    );
}

export default App;
