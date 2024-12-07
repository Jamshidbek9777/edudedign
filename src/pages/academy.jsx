import React from "react";
import ContactUs from "../components/contactUs";
import Wrapper from "../layout/wrapper";

const Academy = () => {
  return (
    <div
      style={{
        background:
          "transparent linear-gradient(180deg, #d5f0f7 0%, #ffffff 100%) 0% 0% no-repeat padding-box",
      }}
      className="min-h-screen"
    >
      <Wrapper>
        <div
          data-aos="fade-up"
          className="pt-40 px-4 flex flex-col items-center"
        >
          <div className="bg-white px-8 py-10 lg:py-1 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                Labaratories
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                The journey of a thousand miles begins with a single step, and
                here at Turkey Campus, we were the first step and companion for
                thousands of ambitious students. To them, it is our honor to
                provide our best educational support, counseling services,
                various academic facilities, and exceptional discounts during
                their university admission procedures and enrollment.
              </p>
            </div>
            <div className="">
              <img
                src="/img/labpic.png"
                alt="About Us"
                className="rounded-xl w-[450px]"
              />
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-4"
          >
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <img
                  src="/img/service1.jpg"
                  alt="k12net"
                  className="h-16 object-contain"
                />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Kosmik lagerga sayohat
              </h1>
              <p className="text-gray-600 text-center text-sm">
                Description about K12net goes here. This can be short and
                informative.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <img
                  src="/img/service2.jpg"
                  alt="Okulaile"
                  className="h-16 object-contain"
                />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Kosmik labs
              </h1>
              <p className="text-gray-600 text-center text-sm">
                Description about Okulaile goes here. This can be short and
                informative.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <img
                  src="/img/service3.jpg"
                  alt="Mentalup"
                  className="h-16 object-contain"
                />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Tadbrirlar
              </h1>
              <p className="text-gray-600 text-center text-sm">
                Description about Mentalup goes here. This can be short and
                informative.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <img
                  src="/img/service4.jpg"
                  alt="Vedubox"
                  className="h-16 object-contain"
                />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Teksofest
              </h1>
              <p className="text-gray-600 text-center text-sm">
                Description about Vedubox goes here. This can be short and
                informative.
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
