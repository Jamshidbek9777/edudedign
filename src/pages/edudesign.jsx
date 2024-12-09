import React, { useContext } from "react";
import ContactUs from "../components/contactUs";
import Wrapper from "../layout/wrapper";
import { FiBookOpen, FiUsers, FiClipboard } from "react-icons/fi";
import { AiOutlineControl } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import Helmet from "../components/helmet.jsx";

const EducationDesign = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  return (
    <>
      <Helmet
        title={getText("AboutPageTitle") || "Education design"}
        description={getText("AboutPageDesc") || "Learn more about education."}
        link="/edu-design"
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
          <div data-aos="fade-up" className="pt-40  flex flex-col items-center">
            <div className="bg-white px-8 py-10 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                  {getText("eduHeader")}
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {getText("eduHeaderDesc")}
                </p>
              </div>
              <div>
                <img
                  src="/img/edudesign.jpg"
                  alt="About Us"
                  className="rounded-xl w-[450px]"
                />
              </div>
            </div>
            {/* Cards Section */}
            <div
              data-aos="fade-up"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
            >
              {/* Top Row - Three Cards */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                <FiBookOpen className="text-4xl text-[#e63f38] mb-4" />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  {getText("eduCard1Header")}
                </h1>
                <div className="text-start">
                  <p className="text-gray-600 text-sm">
                    • {getText("eduCard1Text1")}
                  </p>
                  <p className="text-gray-600 text-sm">
                    • {getText("eduCard1Text2")}
                  </p>
                  <p className="text-gray-600 text-sm">
                    •{getText("eduCard1Text3")}
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                <FiUsers className="text-4xl text-[#e63f38] mb-4" />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  {getText("eduCard2Header")}
                </h1>
                <div className="text-start">
                  <p className="text-gray-600 text-sm">
                    • {getText("eduCard2Text1")}
                  </p>
                  <p className="text-gray-600 text-sm">
                    • {getText("eduCard2Text2")}
                  </p>
                  <p className="text-gray-600 text-sm">
                    • {getText("eduCard2Text3")}
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                <FiClipboard className="text-4xl text-[#e63f38] mb-4" />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  {getText("eduCard3Header")}
                </h1>
                <div className="text-start">
                  <p className="text-gray-600 text-sm">
                    • {getText("eduCard3Text1")}
                  </p>
                  <p className="text-gray-600 text-sm">
                    • {getText("eduCard3Text2")}
                  </p>
                  <p className="text-gray-600 text-sm">
                    • {getText("eduCard3Text3")}
                  </p>
                </div>
              </div>

              {/* Bottom Row - Three Cards */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                <AiOutlineControl className="text-4xl text-[#e63f38] mb-4" />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  {getText("eduCard4Header")}
                </h1>
                <div className="text-start">
                  <p className="text-gray-600 text-sm">
                    • {getText("eduCard4Text1")}
                  </p>
                  <p className="text-gray-600 text-sm">
                    • {getText("eduCard4Text2")}
                  </p>
                  <p className="text-gray-600 text-sm">
                    • {getText("eduCard4Text3")}
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                <GrProjects className="text-4xl text-[#e63f38] mb-4" />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  {getText("eduCard5Header")}
                </h1>
                <div className="text-start">
                  <p className="text-gray-600 text-sm">
                    • {getText("eduCard5Text1")}
                  </p>
                  <p className="text-gray-600 text-sm">
                    • {getText("eduCard5Text2")}
                  </p>
                  <p className="text-gray-600 text-sm">
                    • {getText("eduCard5Text3")}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center text-xl mt-6 text-gray-700 bg-white p-10 rounded-xl shadow-lg">
              {getText("bottomText")}
            </div>
          </div>
          <ContactUs />
        </Wrapper>
      </div>
    </>
  );
};

export default EducationDesign;
