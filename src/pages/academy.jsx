import React, { useContext } from "react";
import { FaChalkboardTeacher, FaUserGraduate, FaUsers } from "react-icons/fa";
import ContactUs from "../components/contactUs";
import Wrapper from "../layout/wrapper";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { SiMinds } from "react-icons/si";
import { LuBrain } from "react-icons/lu";
import { VscVmActive } from "react-icons/vsc";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const Academy = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
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
          {/* Hero Section */}
          <div className="bg-white px-8 py-10 lg:py-1 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                {getText("academyHeader")}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                {getText("academyDesc")}
              </p>
            </div>
            <div className="">
              <img
                src="/img/academypic.png"
                alt="Academyx Hero"
                className="rounded-xl w-[450px]"
              />
            </div>
          </div>

          {/* Services Section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10"
          >
            {/* STEM Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="flex justify-center mb-4 text-[#e63f38] text-5xl">
                <FaChalkboardTeacher />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {getText("academyCard1Header")}
              </h1>
              <p className="text-gray-600 text-center text-sm">
                {getText("academyCard1Text")}
              </p>
            </div>

            {/* Dikkat Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="flex justify-center mb-4 text-[#e63f38] text-5xl">
                <FaUserGraduate />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {getText("academyCard2Header")}
              </h1>
              <p className="text-gray-600 text-center text-sm">
                {getText("academyCard2Text")}
              </p>
            </div>

            {/* Sinf Yo'netimi Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="flex justify-center mb-4 text-[#e63f38] text-5xl">
                <FaUsers />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {getText("academyCard3Header")}
              </h1>
              <p className="text-gray-600 text-center text-sm">
                {getText("academyCard3Text")}
              </p>
            </div>

            {/* Iletisim Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="flex justify-center mb-4 text-[#e63f38] text-5xl">
                <MdOutlineConnectWithoutContact />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {getText("academyCard4Header")}
              </h1>
              <p className="text-gray-600 text-center text-sm">
                {getText("academyCard4Text")}
              </p>
            </div>

            {/* Mind Map Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="flex justify-center mb-4 text-[#e63f38] text-5xl">
                <SiMinds />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {getText("academyCard5Header")}
              </h1>
              <p className="text-gray-600 text-center text-sm">
                {getText("academyCard5Text")}
              </p>
            </div>

            {/* Ustun Zekalari Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="flex justify-center mb-4 text-[#e63f38] text-5xl">
                <LuBrain />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {getText("academyCard6Header")}
              </h1>
              <p className="text-gray-600 text-center text-sm">
                {getText("academyCard6Text")}
              </p>
            </div>

            {/* Aktif Talim Metodi Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="flex justify-center mb-4 text-[#e63f38] text-5xl">
                <VscVmActive />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {getText("academyCard7Header")}
              </h1>
              <p className="text-gray-600 text-center text-sm">
                {getText("academyCard7Text")}
              </p>
            </div>

            {/* Öğrenme Stilleri Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="flex justify-center mb-4 text-[#e63f38] text-5xl">
                <FaUsers />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {getText("academyCard8Header")}
              </h1>
              <p className="text-gray-600 text-center text-sm">
                {getText("academyCard8Text")}
              </p>
            </div>
          </div>
        </div>
        <ContactUs />
      </Wrapper>
    </div>
  );
};

export default Academy;
