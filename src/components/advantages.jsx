import React from "react";
import { FaCircleCheck, FaPeopleGroup } from "react-icons/fa6";
import Wrapper from "../layout/wrapper";
import { IoShareSocialSharp } from "react-icons/io5";
import {
  MdBiotech,
  MdCastForEducation,
  MdHomeRepairService,
} from "react-icons/md";
import { SiGotomeeting } from "react-icons/si";

const Advantages = () => {
  const advantages = [
    {
      id: 1,
      adv: "Uluslararası Güçlü İş Birliği Ağı",
      icon: <FaPeopleGroup size={16} />,
    },
    {
      id: 2,
      adv: "Sosyal Sorumluluk Projeleri ile Topluma Katkı",
      icon: <IoShareSocialSharp />,
    },
    {
      id: 3,
      adv: "Eğitime Güçlü Destek",
      icon: <MdCastForEducation />,
    },
    {
      id: 4,
      adv: "Ufuk Açıcı Programlar",
      icon: <SiGotomeeting />,
    },
    {
      id: 5,
      adv: "Exclusive Hizmetler",
      icon: <MdHomeRepairService />,
    },
    {
      id: 6,
      adv: "İnovasyon ve Yenilikçilik",
      icon: <MdBiotech />,
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <Wrapper>
        <div className="container mx-auto ">
          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            Eduagencynun avantajları
          </h1>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className=" flex items-center gap-2 bg-white shadow-lg rounded-lg p-6 text-center border hover:shadow-xl transition-shadow duration-300"
              >
                {advantage.icon}
                <p className="text-gray-700 font-medium">{advantage.adv}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Advantages;
