import React, { useContext, useEffect } from "react";
import Wrapper from "../layout/wrapper";
import ContactUs from "../components/contactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@nextui-org/react";
import { FiArrowRightCircle } from "react-icons/fi";
import { LanguageContext } from "../context/language";
import { getText } from "../languages";

const CosmicServices = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      title: getText("kosmosxCard1Header"),
      description: getText("kosmosxCard1Text"),
      image: "/img/service1.jpg",
      link: "https://kosmosx.uz/#/trip-to-space",
    },
    {
      title: getText("kosmosxCard2Header"),
      description: getText("kosmosxCard2Text"),
      image: "/img/service2.jpg",
      link: "https://kosmosx.uz/#/space-workshop",
    },
    {
      title: getText("kosmosxCard3Header"),
      description: getText("kosmosxCard3Text"),
      image: "/img/service3.jpg",
      link: "https://kosmosx.uz/#/projects",
    },
    {
      title: "Teknofest",
      description: getText("kosmosxCard4Text"),
      image: "/img/service4.jpg",
      link: "https://kosmosx.uz/#/technofest",
    },
  ];

  return (
    <div
      style={{
        background:
          "transparent linear-gradient(180deg, #d5f0f7 0%, #ffffff 100%) 0% 0% no-repeat padding-box",
      }}
      className="min-h-screen"
    >
      <Wrapper>
        <div data-aos="fade-up" className="pt-40 flex flex-col items-center">
          <div className="bg-white px-8 py-10 lg:py-1 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                {getText("kosmosxHeader")}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                {getText("kosmosxDesc")}
              </p>
              <a href="https://kosmosx.uz">
                <Button
                  color="primary"
                  className="mt-5"
                  endContent={<FiArrowRightCircle />}
                >
                  {getText("sliderButton")}
                </Button>
              </a>
            </div>
            <div className="">
              <img
                src="/img/cosmicpic.png"
                alt="About Us"
                className="rounded-xl w-[450px]"
              />
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <a href={service.link}>
                  <div className="h-[50%] flex justify-center mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full object-cover rounded-t-xl"
                    />
                  </div>
                  <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                    {service.title}
                  </h1>
                  <p className="text-gray-600 text-center text-sm mb-4">
                    {service.description}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
        <ContactUs />
      </Wrapper>
    </div>
  );
};

export default CosmicServices;
