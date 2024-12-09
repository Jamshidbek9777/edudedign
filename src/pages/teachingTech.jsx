import React, { useContext, useEffect } from "react";
import Wrapper from "../layout/wrapper";
import ContactUs from "../components/contactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { getText } from "../languages/index.js";
import { LanguageContext } from "../context/language.jsx";
import Helmet from "../components/helmet.jsx";

const TeachingTech = () => {
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
            <div className="bg-white px-8 py-10 lg:py-1 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                  {getText("teachingTechHeader")}
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {getText("teachingTechDesc")}
                </p>
              </div>
              <div className="">
                <img
                  src="/img/teachingTechpic.png"
                  alt="About Us"
                  className="rounded-xl w-[450px]"
                />
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 "
            >
              {/* Card 1 */}

              <a href="https://turkosoft.uz">
                <div className="cursor-pointer bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/img/k12net.png"
                      alt="k12net"
                      className="h-16 object-contain"
                    />
                  </div>
                  <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                    k12net
                  </h1>
                  <p className="text-gray-600 text-center text-sm">
                    {getText("teachingTechCardText1")}
                  </p>
                </div>
              </a>

              {/* Card 2 */}
              <a href="https://turkosoft.uz">
                <div className="cursor-pointer bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/img/okulaile.png"
                      alt="Okulaile"
                      className="h-16 object-contain"
                    />
                  </div>
                  <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                    Okulaile
                  </h1>
                  <p className="text-gray-600 text-center text-sm">
                    {getText("teachingTechCardText2")}
                  </p>
                </div>
              </a>

              {/* Card 3 */}
              <a href="https://turkosoft.uz">
                <div className="cursor-pointer bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/img/mentalup.webp"
                      alt="Mentalup"
                      className="h-16 object-contain"
                    />
                  </div>
                  <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                    Mentalup
                  </h1>
                  <p className="text-gray-600 text-center text-sm">
                    {getText("teachingTechCardText3")}
                  </p>
                </div>
              </a>

              {/* Card 4 */}
              <a href="https://kosmosx.uz/#/online-platforms">
                <div className="cursor-pointer bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/img/futureast.png"
                      alt="Vedubox"
                      className="h-16 object-contain"
                    />
                  </div>
                  <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                    Future astronaut
                  </h1>
                  <p className="text-gray-600 text-center text-sm">
                    {getText("teachingTechCardText4")}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <ContactUs />
        </Wrapper>
      </div>
    </>
  );
};

export default TeachingTech;
