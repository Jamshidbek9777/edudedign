import React, { useContext, useEffect } from "react";
import Wrapper from "../layout/wrapper";
import ContactUs from "../components/contactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@nextui-org/react";
import { FiArrowRightCircle } from "react-icons/fi";
import { LanguageContext } from "../context/language";

const CosmicServices = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      title: "Uzay Kampi",
      description:
        "Kosmosx, öğrencilere üniversite başvurularında ve kayıt işlemlerinde yardımcı olur. Uzman rehberlerimizle başarıya adım atın.",
      image: "/img/service1.jpg",
      link: "/kosmik-lagerga-sayohat",
    },
    {
      title: "Kosmik Labs",
      description:
        "Kosmosx, öğrenciler için farklı alanlarda gelişim fırsatları sunan modern laboratuvar ve uygulama alanları sağlar.",
      image: "/img/service2.jpg",
      link: "/kosmik-labs",
    },
    {
      title: "Seminer",
      description:
        "Eğitim ve bilimsel gelişmeleri destekleyen çeşitli seminer ve etkinlikler düzenliyoruz.",
      image: "/img/service3.jpg",
      link: "/tadbrirlar",
    },
    {
      title: "Teknofest",
      description:
        "Teknoloji ve inovasyon dünyasında lider olmayı hedefleyen öğrencilere yönelik etkinlikler ve yarışmalar düzenliyoruz.",
      image: "/img/service4.jpg",
      link: "/teksofest",
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
                Kosmosx Hakkında
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                Kosmosx, üniversiteye başvuran öğrencilere akademik rehberlik,
                danışmanlık hizmetleri ve eğitim fırsatları sunar. Türkiye
                Kampüsü'nde binlerce öğrenciye rehberlik etmenin gururunu
                yaşıyoruz. Bizimle birlikte öğrenciler en iyi eğitim desteğini
                alırken, kabul işlemleri sırasında önemli indirimlerden
                faydalanabilirler.
              </p>
              <Button
                color="primary"
                className="mt-5"
                endContent={<FiArrowRightCircle />}
                href="/website"
              >
                Websitemizi Ziyaret Edin
              </Button>
            </div>
            <div className="">
              <img
                src="/img/cosmicpic.png"
                alt="About Us"
                className="rounded-xl w-[450px]"
              />
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-[50%] flex justify-center mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full object-cover rounded-t-xl"
                  />
                </div>
                <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {service.title}
                </h1>
                <p className="text-gray-600 text-center text-sm mb-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <ContactUs />
      </Wrapper>
    </div>
  );
};

export default CosmicServices;
