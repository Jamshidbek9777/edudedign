import React from "react";
import ContactUs from "../components/contactUs";
import Wrapper from "../layout/wrapper";
import { Button } from "@nextui-org/react";
import {
  FiArrowRightCircle,
  FiBookOpen,
  FiUsers,
  FiClipboard,
} from "react-icons/fi";
import { AiOutlineControl } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";

const EducationDesign = () => {
  return (
    <div
      style={{
        background:
          "transparent linear-gradient(180deg, #d5f0f7 0%, #ffffff 100%) 0% 0% no-repeat padding-box",
      }}
      className="min-h-screen"
    >
      <Wrapper>
        <div data-aos="fade-up" className="pt-40  flex flex-col items-center">
          <div className="bg-white px-8 py-10 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                Eğitim Modeli Tasarımı Hizmetlerimiz
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                İnovatif, yenilikçi ve etkili eğitim modelleri tasarlıyoruz.
                Amacımız, her öğrencinin potansiyelini en üst düzeye
                çıkarabileceği bir öğrenim ortamı sunmaktır.
              </p>
            </div>
            <div>
              <img
                src="/img/edudesign.jpg"
                alt="About Us"
                className="rounded-xl w-[450px]"
              />
            </div>
          </div>
          {/* Cards Section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
          >
            {/* Top Row - Three Cards */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <FiBookOpen className="text-4xl text-[#e63f38] mb-4" />
              <h1 className="text-xl font-semibold text-gray-800 mb-2">
                Müfredat Geliştirme
              </h1>
              <div className="text-start">
                <p className="text-gray-600 text-sm">
                  • Öğrenci merkezli ve modern eğitim anlayışına uygun içerik
                  tasarımı
                </p>
                <p className="text-gray-600 text-sm">
                  • Disiplinler arası öğrenme modelleri
                </p>
                <p className="text-gray-600 text-sm">
                  • STEM, sanat ve dil odaklı programlar
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <FiUsers className="text-4xl text-[#e63f38] mb-4" />
              <h1 className="text-xl font-semibold text-gray-800 mb-2">
                Öğretmen Eğitimi
              </h1>
              <div className="text-start">
                <p className="text-gray-600 text-sm">
                  • Öğrenci merkezli ve modern eğitim anlayışına uygun içerik
                  tasarımı
                </p>
                <p className="text-gray-600 text-sm">
                  • Disiplinler arası öğrenme modelleri
                </p>
                <p className="text-gray-600 text-sm">
                  • STEM, sanat ve dil odaklı programlar
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <FiClipboard className="text-4xl text-[#e63f38] mb-4" />
              <h1 className="text-xl font-semibold text-gray-800 mb-2">
                Değerlendirme Sistemleri
              </h1>
              <div className="text-start">
                <p className="text-gray-600 text-sm">
                  • Öğrenci merkezli ve modern eğitim anlayışına uygun içerik
                  tasarımı
                </p>
                <p className="text-gray-600 text-sm">
                  • Disiplinler arası öğrenme modelleri
                </p>
                <p className="text-gray-600 text-sm">
                  • STEM, sanat ve dil odaklı programlar
                </p>
              </div>
            </div>

            {/* Bottom Row - Three Cards */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <AiOutlineControl className="text-4xl text-[#e63f38] mb-4" />
              <h1 className="text-xl font-semibold text-gray-800 mb-2">
                Yönetim Sistemleri
              </h1>
              <div className="text-start">
                <p className="text-gray-600 text-sm">
                  • Öğrenci merkezli ve modern eğitim anlayışına uygun içerik
                  tasarımı
                </p>
                <p className="text-gray-600 text-sm">
                  • Disiplinler arası öğrenme modelleri
                </p>
                <p className="text-gray-600 text-sm">
                  • STEM, sanat ve dil odaklı programlar
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <GrProjects className="text-4xl text-[#e63f38] mb-4" />
              <h1 className="text-xl font-semibold text-gray-800 mb-2">
                Eğitim Projeleri
              </h1>
              <div className="text-start">
                <p className="text-gray-600 text-sm">
                  • Öğrenci merkezli ve modern eğitim anlayışına uygun içerik
                  tasarımı
                </p>
                <p className="text-gray-600 text-sm">
                  • Disiplinler arası öğrenme modelleri
                </p>
                <p className="text-gray-600 text-sm">
                  • STEM, sanat ve dil odaklı programlar
                </p>
              </div>
            </div>
          </div>

          <div className="text-center text-xl mt-6 text-gray-700 bg-white p-10 rounded-lg shadow-lg">
            Her kurumun farklı ihtiyaçlarına özel çözümler sunuyor ve eğitimde
            sürdürülebilir başarı için rehberlik ediyoruz. Birlikte daha güçlü
            bir eğitim geleceği inşa etmek için bizimle iletişime geçin!
          </div>
        </div>
        <ContactUs />
      </Wrapper>
    </div>
  );
};

export default EducationDesign;
