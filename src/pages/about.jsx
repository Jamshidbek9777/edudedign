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
import Helmet from "../components/helmet.jsx";

const About = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
      <>
        <Helmet
            title={getText("AboutPageTitle") || "About Us"}
            description={
                getText("AboutPageDesc") ||
                "Learn more about our agency and services."
            }
            link="/about"
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
            <div className="pt-40 flex flex-col items-center">
              {/* About Us Section */}
              <div className="bg-white px-8 py-10 lg:py-1 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl mb-12">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                    {getText("hakkimizdaHeader")}
                  </h1>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Edudesign, eğitim ve mimari sektöründe uzman, sektörel deneyime sahip bir ekipten oluşmaktadır.*
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

              {/* Mission and Vision Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mb-12">
                <div className="bg-white px-6 py-8 rounded-3xl shadow-lg">
                  <h2 className="text-2xl font-bold text-[#e63f38] mb-4">
                    Misyonumuz
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Eğitimi geleceğe taşımak.
                  </p>
                </div>
                <div className="bg-white px-6 py-8 rounded-3xl shadow-lg">
                  <h2 className="text-2xl font-bold text-[#e63f38] mb-4">
                    Vizyonumuz
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Modern ve sürdürülebilir eğitim alanları oluşturmak.
                  </p>
                </div>
              </div>
            </div>
            <ContactUs />
          </Wrapper>
        </div>
      </>
  );
};

export default About;
