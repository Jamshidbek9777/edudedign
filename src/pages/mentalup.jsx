import React, { useContext, useEffect } from "react";
import Wrapper from "../layout/wrapper";
import ContactUs from "../components/contactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { getText } from "../languages/index.js";
import { LanguageContext } from "../context/language.jsx";
import Helmet from "../components/helmet.jsx";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";
import { MdDevices, MdHealthAndSafety } from "react-icons/md";
import { CgTrack } from "react-icons/cg";

const MentaulUp = () => {
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
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <IoExtensionPuzzleOutline
                  className="w-12 h-12 mb-4"
                  color="red"
                />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  100+ BRAIN EXERCISES
                </h3>
                <p className="text-gray-600 text-sm">
                  Memory games, attention, focusing, analytical thinking, visual
                  intelligence, and more... They're all on MentalUP!
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <FaRegCalendarAlt className="w-12 h-12 mb-4" color="#5c97f7" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  BRAIN BOOSTER & WORKOUTS FOR KIDS
                </h3>
                <p className="text-gray-600 text-sm">
                  One app for both! 20 minutes daily brain training and 7-minute
                  home workouts for kids.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <FaChildren className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  FOR ALL CHILDREN
                </h3>
                <p className="text-gray-600 text-sm">
                  MentalUP is suitable for all children regardless of age.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <MdHealthAndSafety className="w-12 h-12 mb-4" color="green" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  CHILD SAFE & NO ADS
                </h3>
                <p className="text-gray-600 text-sm">
                  MentalUP doesn't contain ads, pop-ups, or inappropriate
                  content. It's a safe and fun world for kids.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <CgTrack className="w-12 h-12 mb-4" color="blue" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  ADVANCED PERFORMANCE TRACKING
                </h3>
                <p className="text-gray-600 text-sm">
                  Get the bigger picture! Track your child's development with
                  rich reporting modules and dashboards.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <MdDevices className="w-12 h-12 mb-4" color="#e25cf7" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  ALWAYS WITH YOU
                </h3>
                <p className="text-gray-600 text-sm">
                  MentalUP is on your smartphone, tablet, and PC.
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

export default MentaulUp;
