import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import ContactUs from "../components/contactUs";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const Labaratories = () => {
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
        {/* Header Section */}
        <div
          data-aos="fade-up"
          className="pt-40 px-4 flex flex-col items-center"
        >
          <div className="bg-white px-8 py-10 lg:py-12 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                {getText("labsHeader")}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                {getText("labsDesc")}
              </p>
            </div>
            <div>
              <img
                src="/img/lab-main.png"
                alt="Laboratories"
                className="rounded-xl w-[450px]"
              />
            </div>
          </div>

          {/* Cards Section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 "
          >
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="h-[50%] flex justify-center mb-4">
                <img
                  src="/img/lab-main.png"
                  alt="STEM Laboratory"
                  className="h-full object-cover rounded-t-xl"
                />
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {getText("labsCard1Header")}
                </h1>
                <p className="text-gray-600 text-center text-sm">
                  {getText("labsCard1Text")}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="h-[50%] flex justify-center mb-4">
                <img
                  src="/img/brain-games.jpeg"
                  alt="Intellectual Games"
                  className="h-full object-cover rounded-t-xl"
                />
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {getText("labsCard2Header")}
                </h1>
                <p className="text-gray-600 text-center text-sm">
                  {getText("labsCard2Text")}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="h-[50%] flex justify-center mb-4">
                <img
                  src="/img/aerospace-lab.jpeg"
                  alt="Aerospace Laboratory"
                  className="h-full object-cover rounded-t-xl"
                />
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {getText("labsCard3Header")}
                </h1>
                <p className="text-gray-600 text-center text-sm">
                  {getText("labsCard3Text")}
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="h-[50%] flex justify-center mb-4">
                <img
                  src="/img/energy-innovation.webp"
                  alt="Energy Innovation"
                  className="h-full object-cover rounded-t-xl"
                />
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {getText("labsCard4Header")}
                </h1>
                <p className="text-gray-600 text-center text-sm">
                  {getText("labsCard4Text")}
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="h-[50%] flex justify-center mb-4">
                <img
                  src="/img/electr-lab.png"
                  alt="Electronics Laboratory"
                  className="h-full object-cover rounded-t-xl"
                />
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {getText("labsCard5Header")}
                </h1>
                <p className="text-gray-600 text-center text-sm">
                  {getText("labsCard5Text")}
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="h-[50%] flex justify-center mb-4">
                <img
                  src="/img/design-app.jpeg"
                  alt="Design Applications"
                  className="h-full object-cover rounded-t-xl"
                />
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {getText("labsCard6Header")}
                </h1>
                <p className="text-gray-600 text-center text-sm">
                  {getText("labsCard6Text")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <ContactUs />
      </Wrapper>
    </div>
  );
};

export default Labaratories;
