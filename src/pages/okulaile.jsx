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
    title: "Bolalar bog'chalari uchun maktab oila",
    check1: "Foto va video",
    check2: "Foto va video",
    check3: "Foto va video",
    check4: "Foto va video",
    check5: "Foto va video",
    check6: "Foto va video",
    image: "/img/okulaile1.jpg",
    link: "https://kosmosx.uz/#/trip-to-space",
  },
  {
    title: "Xususiy maktablar uchun maktab oilasi",
    check1: "Foto va video",
    check2: "Foto va video",
    check3: "Foto va video",
    check4: "Foto va video",
    check5: "Foto va video",
    check6: "Foto va video",
    image: "/img/okulaile2.jpg",
    link: "https://kosmosx.uz/#/space-workshop",
  },
  {
    title: "Özel Öğretim Kursları için OkulAile",
    check1: "Foto va video",
    check2: "Foto va video",
    check3: "Foto va video",
    check4: "Foto va video",
    check5: "Foto va video",
    check6: "Foto va video",
    image: "/img/okulaile3.jpg",
    link: "https://kosmosx.uz/#/projects",
  },
];
const OkulAile = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet
        title={getText("AboutPageTitle") || "Teching Technologies"}
        description={
          getText("AboutPageDesc") || "Learn more about our services."
        }
        link="/teachingTech"
        keywords="about, EduAgency, Uzbekistan, education"
      />
      <div
        style={{
          background:
            "transparent linear-gradient(180deg, #d5f0f7 0%, #ffffff 100%) 0% 0% no-repeat padding-box",
        }}
        className="min-h-screen"
      >
        <Wrapper>
          <div data-aos="fade-up" className="pt-40 flex flex-col items-center">
            <div className="bg-white px-8 py-16 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                  {/* {getText("teachingTechHeader")} */}
                  OkulAile
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {/* {getText("teachingTechDesc")} */}
                  OkulAile ile Anaokulları, İlköğretim Okulları, Liseler, Özel
                  Okullar, Kolejler, Özel Öğretim Kursları, Etüt Merkezleri,
                  Sanat Merkezleri ve Rehabilitasyon Merkezleri bütün
                  ihtiyaçlarını mobilden kolay ve hızlı bir şekilde
                  gerçekleştirirler.
                </p>
              </div>
              <div className="">
                <img
                  src="/img/okulaile.png"
                  alt="About Us"
                  className="rounded-xl w-[450px]"
                />
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                >
                  <a href={service.link} className="flex flex-col h-full">
                    {/* Image at the top */}
                    <div className="flex-1">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-50 object-cover rounded-t-xl"
                      />
                    </div>
                    {/* Text at the bottom */}
                    <div className="p-4">
                      <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                        {service.title}
                      </h1>
                      <p className="text-gray-600 text-start text-sm flex items-center">
                        <IoIosCheckmark color="green" size={30} />{" "}
                        {service.check1}
                      </p>
                      <p className="text-gray-600 text-start text-sm  flex items-center">
                        <IoIosCheckmark color="green" size={30} />{" "}
                        {service.check2}
                      </p>
                      <p className="text-gray-600 text-start text-sm  flex items-center">
                        <IoIosCheckmark color="green" size={30} />{" "}
                        {service.check3}
                      </p>
                      <p className="text-gray-600 text-start text-sm  flex items-center">
                        <IoIosCheckmark color="green" size={30} />{" "}
                        {service.check4}
                      </p>
                      <p className="text-gray-600 text-start text-sm  flex items-center">
                        <IoIosCheckmark color="green" size={30} />{" "}
                        {service.check5}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <ContactUs />
        </Wrapper>
      </div>
    </>
  );
};

export default OkulAile;
