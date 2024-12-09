import React, { useContext } from "react";
import ContactUs from "../components/contactUs";
import Wrapper from "../layout/wrapper";
import { AiOutlineUser, AiOutlineTeam } from "react-icons/ai";
import { MdOutlineSchool, MdPeopleAlt } from "react-icons/md";
import { getText } from "../languages/index.js";
import { LanguageContext } from "../context/language.jsx";

const Transfer = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  const cards = [
    {
      title: getText("transferCard1Header"),
      icon: <AiOutlineUser size={50} className="text-[#e63f38]" />,
      content: `${getText("transferCard1Text1")}`,
    },
    {
      title: getText("transferCard2Header"),
      icon: <MdOutlineSchool size={50} className="text-[#e63f38]" />,
      content: `${getText("transferCard1Text2")}`,
    },
    {
      title: getText("transferCard3Header"),
      icon: <MdPeopleAlt size={50} className="text-[#e63f38]" />,
      content: `${getText("transferCard1Text3")}`,
    },
  ];

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
          {/* Header Section */}
          <div className="bg-white px-8 py-10 lg:py-1 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                {getText("transferHeader")}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                {getText("transferDesc")}
              </p>
            </div>
            <div>
              <img
                src="/img/transferpic.png"
                alt="About Us"
                className="rounded-xl w-[450px]"
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className="w-full ">
            <h3 className="text-2xl font-bold text-[#e63f38] mb-8 text-center">
              {getText("transferSubHeader")}
            </h3>
            <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="mb-4">{card.icon}</div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {card.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ContactUs />
      </Wrapper>
    </div>
  );
};

export default Transfer;
