import React from "react";
import {
  FaUserGraduate,
  FaRegLightbulb,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";
import Wrapper from "../layout/wrapper";
import ContactUs from "../components/contactUs";

const About = () => {
  return (
    <div
      style={{
        background:
          "transparent linear-gradient(180deg, #d5f0f7 0%, #ffffff 100%) 0% 0% no-repeat padding-box",
      }}
      className="min-h-screen"
    >
      <Wrapper>
        <div className="pt-40 px-4 flex flex-col items-center">
          <div className="bg-white px-8 py-10 lg:py-1 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl mb-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                About Us
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
            <div className="flex-1">
              <img
                src="/img/aboutuspic.png"
                alt="About Us"
                className="rounded-xl max-w-full"
              />
            </div>
          </div>

          <div className="bg-white px-8 py-10 rounded-3xl shadow-lg flex flex-col gap-10 w-full max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] text-center mb-6">
              Our Values
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <FaUserGraduate className="text-[#e63f38] text-6xl mb-4" />
                <h2 className="text-2xl font-bold mb-2">Credibility</h2>
                <p className="text-gray-600">
                  We are responsible for our students' futures, offering all
                  options and always guiding them to their best possibilities
                  based on their vision and finances.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaRegLightbulb className="text-[#e63f38] text-6xl mb-4" />
                <h2 className="text-2xl font-bold mb-2">Innovation</h2>
                <p className="text-gray-600">
                  We foster creativity and innovative thinking to bring
                  excellence in education and student support services.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaHandshake className="text-[#e63f38] text-6xl mb-4" />
                <h2 className="text-2xl font-bold mb-2">Integrity</h2>
                <p className="text-gray-600">
                  We ensure transparency and honesty in every step we take,
                  building trust with our students and partners.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaShieldAlt className="text-[#e63f38] text-6xl mb-4" />
                <h2 className="text-2xl font-bold mb-2">Commitment</h2>
                <p className="text-gray-600">
                  We are committed to excellence, striving to deliver
                  exceptional services to students, faculty, and partners.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ContactUs />
      </Wrapper>
    </div>
  );
};

export default About;
