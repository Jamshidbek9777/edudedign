import React, { useContext, useEffect } from "react";
import Wrapper from "../layout/wrapper";
import ContactUs from "../components/contactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { getText } from "../languages/index.js";
import { LanguageContext } from "../context/language.jsx";
import Helmet from "../components/helmet.jsx";
import { IoIosCheckmark } from "react-icons/io";

const services = [
  {
    titleKey: "okulaileCard1Header",
    checks: [
      "okulaileCard1Text1",
      "okulaileCard1Text2",
      "okulaileCard1Text3",
      "okulaileCard1Text4",
      "okulaileCard1Text5",
      "okulaileCard1Text6",
      "okulaileCard1Text7",
      "okulaileCard1Text8",
    ],
    image: "/img/okulaile1.jpg",
  },
  {
    titleKey: "okulaileCard2Header",
    checks: [
      "okulaileCard2Text1",
      "okulaileCard2Text2",
      "okulaileCard2Text3",
      "okulaileCard2Text4",
      "okulaileCard2Text5",
      "okulaileCard2Text6",
      "okulaileCard2Text7",
      "okulaileCard2Text8",
    ],
    image: "/img/okulaile2.jpg",
  },
  {
    titleKey: "okulaileCard3Header",
    checks: [
      "okulaileCard3Text1",
      "okulaileCard3Text2",
      "okulaileCard3Text3",
      "okulaileCard3Text4",
      "okulaileCard3Text5",
      "okulaileCard3Text6",
      "okulaileCard3Text7",
      "okulaileCard3Text8",
    ],
    image: "/img/okulaile3.jpg",
  },
];

const ServiceCard = ({ service }) => {
  const { titleKey, checks, image } = service;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <a className="flex flex-col h-full">
        <img
          src={image}
          alt={getText(titleKey)}
          className="w-full h-50 object-cover rounded-t-xl"
        />
        <div className="p-4">
          <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
            {getText(titleKey)}
          </h1>
          {checks.map((checkKey, idx) => (
            <p
              key={idx}
              className="text-gray-600 text-start text-sm flex items-center"
            >
              <IoIosCheckmark color="green" size={30} /> {getText(checkKey)}
            </p>
          ))}
        </div>
      </a>
    </div>
  );
};

const OkulAile = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      style={{
        background:
          "transparent linear-gradient(180deg, #d5f0f7 0%, #ffffff 100%) 0% 0% no-repeat padding-box",
      }}
      className="min-h-screen"
    >
      <Helmet
        title={getText("AboutPageTitle") || "Teaching Technologies"}
        description={
          getText("AboutPageDesc") || "Learn more about our services."
        }
        link="/teachingTech"
        keywords="about, EduAgency, Uzbekistan, education"
      />

      <Wrapper>
        <div data-aos="fade-up" className="pt-40 flex flex-col items-center">
          <div className="bg-white px-8 py-16 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                OkulAile
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                {getText("okulaileDesc")}
              </p>
            </div>
            <img
              src="/img/okulaile.png"
              alt="About Us"
              className="rounded-xl w-[450px]"
            />
          </div>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
        <ContactUs />
      </Wrapper>
    </div>
  );
};

export default OkulAile;
