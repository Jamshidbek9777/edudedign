import React from "react";
import {
  FaUserGraduate,
  FaRegLightbulb,
  FaHandsHelping,
  FaGlobe,
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
          {/* About Us Section */}
          <div className="bg-white px-8 py-10 lg:py-1 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl mb-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                Biz Haqimizda
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                EduAgency, biz Turkiya va O'zbekiston o'rtasidagi ta'lim
                sohasida rezonans yaratish maqsadida almashish, uzatish va
                hamkorlik qilishga qaratilgan ta'lim hamjamiyatimiz. Bizning
                vizyonimiz Turkiya va O‘zbekistonning tarixiy madaniy
                aloqalaridan olgan kuchimiz bilan ta’lim sohasida umumiy
                jarayonning qurilishiga mazmunli hissa qo‘shishdir.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="/img/aboutuspic.png"
                alt="Biz Haqimizda"
                className="rounded-xl max-w-full"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white px-8 py-10 rounded-3xl shadow-lg flex flex-col gap-10 w-full max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] text-center mb-6">
              Bizning Qadriyatlarimiz
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="flex flex-col items-center text-center">
                <FaUserGraduate className="text-[#e63f38] text-6xl mb-4" />
                <h2 className="text-2xl font-bold mb-2">Yaxshilik</h2>
                <p className="text-gray-600">
                  Talabalarimiz kelajagi uchun javobgarmiz. Ularning vizyonlari
                  va moliyaviy imkoniyatlariga mos eng yaxshi yechimlarni taklif
                  qilamiz.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center text-center">
                <FaRegLightbulb className="text-[#e63f38] text-6xl mb-4" />
                <h2 className="text-2xl font-bold mb-2">Tezkor aloqa</h2>
                <p className="text-gray-600">
                  Biz ijodkorlikni va innovatsion fikrlashni qo‘llab-quvvatlab,
                  ta’lim va talabalarni qo‘llab-quvvatlash xizmatlarini
                  mukammallikka olib chiqamiz.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center text-center">
                <FaHandsHelping className="text-[#e63f38] text-6xl mb-4" />
                <h2 className="text-2xl font-bold mb-2">Sifatli xizmat</h2>
                <p className="text-gray-600">
                  Har bir qadamimizda ochiqlik va halollikni ta’minlaymiz,
                  talabalarimiz va hamkorlarimiz bilan ishonchli aloqalar
                  quramiz.
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center text-center">
                <FaGlobe className="text-[#e63f38] text-6xl mb-4" />
                <h2 className="text-2xl font-bold mb-2">
                  Madaniy munosabatlar
                </h2>
                <p className="text-gray-600">
                  Biz madaniy aloqalarni mustahkamlashga intilamiz va
                  talabalarimizga, o‘qituvchilarimizga hamda hamkorlarimizga
                  yuqori darajadagi xizmat ko‘rsatamiz.
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
