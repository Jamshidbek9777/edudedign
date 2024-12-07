import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import Wrapper from "../layout/wrapper";

const Advantages = () => {
  const advantages = [
    {
      id: 1,
      adv: "Free and Guaranteed University Acceptance",
      icon: <FaCircleCheck size={16} color="green" />,
    },
    {
      id: 2,
      adv: "Free and Guaranteed University Acceptance",
      icon: <FaCircleCheck />,
    },
    {
      id: 3,
      adv: "Free and Guaranteed University Acceptance",
      icon: <FaCircleCheck />,
    },
    {
      id: 4,
      adv: "Free and Guaranteed University Acceptance",
      icon: <FaCircleCheck />,
    },
    {
      id: 5,
      adv: "Free and Guaranteed University Acceptance",
      icon: <FaCircleCheck />,
    },
    {
      id: 6,
      adv: "Free and Guaranteed University Acceptance",
      icon: <FaCircleCheck />,
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <Wrapper>
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            Advantages of Eduagency
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
