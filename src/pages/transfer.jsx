import React, { useContext } from "react";
import ContactUs from "../components/contactUs";
import Wrapper from "../layout/wrapper";
import { AiOutlineUser, AiOutlineTeam } from "react-icons/ai";
import { getText } from "../languages/index.js";
import { LanguageContext } from "../context/language.jsx";
const Transfer = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  const cards = [
    {
      title: getText("transferCard1Header"),
      icon: <AiOutlineUser size={30} className="text-[#e63f38]" />,
      content: [
        getText("transferCard1Header"),
        `• ${getText("transferCard1Text1")}`,
        `• ${getText("transferCard1Text2")}`,
        `• ${getText("transferCard1Text3")}`,
      ],
    },
    {
      title: getText("transferCard2Header"),
      icon: <AiOutlineTeam size={30} className="text-[#e63f38]" />,
      content: [
        getText("transferCard2Header"),
        `• ${getText("transferCard2Text1")}`,
        `• ${getText("transferCard2Text2")}`,
        `• ${getText("transferCard2Text3")}`,
      ],
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

          <div className="grid gap-8 lg:grid-cols-2 w-full">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  {card.icon}
                  <h3 className="text-xl font-semibold text-[#e63f38]">
                    {card.title}
                  </h3>
                </div>
                <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
                  {card.content.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <ContactUs />
      </Wrapper>
    </div>
  );
};

export default Transfer;
