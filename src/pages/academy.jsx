import React from "react";
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import ContactUs from "../components/contactUs";
import Wrapper from "../layout/wrapper";
import { Button } from "@nextui-org/react";

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
        <div data-aos="fade-up" className="pt-40  flex flex-col items-center">
          {/* Hero Section */}
          <div className="bg-white px-8 py-10 lg:py-1 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                Academyx'e Hoş Geldiniz
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                <b>Academyx</b> olarak, eğitimi dönüştürmeyi hedefliyoruz.
                Çevrimiçi platformumuz, öğretmenleri, öğrencileri ve iş birliği
                gruplarını bir araya getirerek iş birliği ve gelişim odaklı bir
                öğrenme ortamı oluşturuyor. İlham vermek isteyen bir öğretmen,
                öğrenmeye hevesli bir öğrenci ya da proje ekibi arayan bir
                profesyonel olabilirsiniz; Academyx, sizin için en iyi çözüm.
                Birlikte eğitimin geleceğini şekillendiriyoruz!
              </p>
            </div>
            <div className="">
              <img
                src="/img/academypic.png"
                alt="Academyx Hero"
                className="rounded-xl w-[450px]"
              />
            </div>
          </div>

          {/* Services Section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10"
          >
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="flex justify-center mb-4 text-[#e63f38] text-5xl">
                <FaChalkboardTeacher />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Çevrimiçi Eğitim Verin
              </h1>
              <p className="text-gray-600 text-center text-sm">
                Sınıflar oluşturun, öğrencilerle etkileşim kurun ve bilgi
                birikiminizi küresel ölçekte paylaşın.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="flex justify-center mb-4 text-[#e63f38] text-5xl">
                <FaUserGraduate />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Öğretmen Bulun
              </h1>
              <p className="text-gray-600 text-center text-sm">
                Farklı alanlardaki uzman öğretmenleri keşfedin ve
                kişiselleştirilmiş öğrenim deneyimleri için onlarla bağlantı
                kurun.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="flex justify-center mb-4 text-[#e63f38] text-5xl">
                <FaUsers />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Öğrenci Bulun
              </h1>
              <p className="text-gray-600 text-center text-sm">
                Öğretmenler ve mentorlar, bilgilerini paylaşmak ve öğrencilerin
                gelişimine rehberlik etmek için hevesli öğrenciler bulabilir.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="flex justify-center mb-4 text-[#e63f38] text-5xl">
                <FaLightbulb />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                İş Birliği Grupları
              </h1>
              <p className="text-gray-600 text-center text-sm">
                Projelerde iş birliği yapmak, fikirlerinizi paylaşmak ve bir
                topluluk içinde büyümek için iş birliği gruplarına katılın veya
                yeni gruplar oluşturun.
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
