import React, { useContext, useEffect } from "react";
import Wrapper from "../layout/wrapper";
import ContactUs from "../components/contactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { getText } from "../languages/index.js";
import { LanguageContext } from "../context/language.jsx";
import Helmet from "../components/helmet.jsx";
import { FiBookOpen } from "react-icons/fi";
import { PiStudentBold } from "react-icons/pi";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdOutlineHomeWork } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";

const K12net = () => {
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
                  K12net
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {getText("k12netDesc")}
                </p>
              </div>
              <div className="">
                <img
                  src="/img/k12net.png"
                  alt="About Us"
                  className="rounded-xl w-[450px]"
                />
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 py-10 "
            >
              {/* Card 1 */}

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                <PiStudentBold className="text-4xl text-[#e63f38] mb-4" />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  {getText("k12Card1")}
                </h1>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                <FaRegCalendarCheck className="text-4xl text-[#e63f38] mb-4" />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  {getText("k12Card2")}
                </h1>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                <FiBookOpen className="text-4xl text-[#e63f38] mb-4" />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  {getText("k12Card3")}
                </h1>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                <MdOutlineHomeWork className="text-4xl text-[#e63f38] mb-4" />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  {getText("k12Card4")}
                </h1>
              </div>

              {/* card5 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                <SiGoogleclassroom className="text-4xl text-[#e63f38] mb-4" />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  {getText("k12Card5")}
                </h1>
              </div>
            </div>
          </div>
          <ContactUs />
        </Wrapper>
      </div>
    </>
  );
};

export default K12net;
