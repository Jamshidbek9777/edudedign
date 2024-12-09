import React, { useContext } from "react";
import {
  FaUserGraduate,
  FaRegLightbulb,
  FaHandsHelping,
  FaGlobe,
} from "react-icons/fa";
import Wrapper from "../layout/wrapper";
import ContactUs from "../components/contactUs";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const About = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div
      style={{
        background:
          "transparent linear-gradient(180deg, #d5f0f7 0%, #ffffff 100%) 0% 0% no-repeat padding-box",
      }}
      className="min-h-screen"
    >
      <Wrapper>
        <div className="pt-40 px-4 flex flex-col items-center">
          {/* About Us Section */}
          <div className="bg-white px-8 py-10 lg:py-1 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl mb-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                {getText("hakkimizdaHeader")}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                {getText("hakkimizdaDesc")}
              </p>
            </div>
            <div className="flex-1">
              <img
                src="/img/aboutuspic.png"
                alt="Biz Haqimizda"
                className="rounded-xl max-w-full"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white px-8 py-10 rounded-3xl shadow-lg flex flex-col gap-10 w-full max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] text-center mb-6">
              {getText("hakkimizdaCardTitle")}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="flex flex-col items-center text-center">
                <FaUserGraduate className="text-[#e63f38] text-6xl mb-4" />
                <h2 className="text-2xl font-bold mb-2">
                  {getText("hakkimizdaCard1Header")}
                </h2>
                <p className="text-gray-600">
                  {getText("hakkimizdaCard1Text")}
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center text-center">
                <FaRegLightbulb className="text-[#e63f38] text-6xl mb-4" />
                <h2 className="text-2xl font-bold mb-2">
                  {getText("hakkimizdaCard2Header")}
                </h2>
                <p className="text-gray-600">
                  {getText("hakkimizdaCard2Text")}
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center text-center">
                <FaHandsHelping className="text-[#e63f38] text-6xl mb-4" />
                <h2 className="text-2xl font-bold mb-2">
                  {getText("hakkimizdaCard3Header")}
                </h2>
                <p className="text-gray-600">
                  {getText("hakkimizdaCard3Text")}
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center text-center">
                <FaGlobe className="text-[#e63f38] text-6xl mb-4" />
                <h2 className="text-2xl font-bold mb-2">
                  {getText("hakkimizdaCard4Header")}
                </h2>
                <p className="text-gray-600">
                  {getText("hakkimizdaCard4Text")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <ContactUs />
      </Wrapper>
    </div>
  );
};

export default About;
