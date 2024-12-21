import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { LanguageContext } from "../context/language";
import { getText } from "../languages";

const Special = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const services = [
    {
      id: 1,
      title: "Interior Design and Furnishing",
      description:
          "Enhance the look and functionality of school spaces with tailored interior design solutions.",
      image: "/img/bg.webp", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Architectural Project Design",
      description:
          "Expert planning and design to create inspiring educational environments.",
      image: "/img/bg.webp", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Construction and Project Management",
      description:
          "Comprehensive management for school construction and renovation projects.",
      image: "/img/bg.webp",// Replace with actual image URL
    },
  ];

  return (
      <div className="bg-gray-50 py-12">
        <Wrapper>
          <div className="container mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
              Our Special Services for Schools
            </h1>

            {/* Card Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                  <div
                      key={service.id}
                      className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300">
                        Detailed Information
                      </button>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>
  );
};

export default Special;
