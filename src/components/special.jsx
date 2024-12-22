import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { LanguageContext } from "../context/language";
import { getText } from "../languages";

const Special = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const services = [
    {
      id: 1,
      title: "Anahtar Teslim Eğitim Kurumları",
      description:
          "Okul ve kolej projeleri: Başından sonuna kadar tüm süreçleri biz yönetiyoruz.",
      image: "/img/bg.webp",
      link:"/interior"
    },
    {
      id: 2,
      title: "Modern Eğitim Tasarımı  ",
      description:
          "İhtiyaca özel müfredat geliştirme ve öğretmen eğitimleri. " +
          "Eğitim teknolojisi ve dijital araçların entegrasyonu.",
      image: "/img/bg.webp",
      link:"/interior"
    },
    {
      id: 3,
      title: "Mimari Çözümler ve İnşaat",
      description:
          "Eğitim binaları için yenilikçi ve sürdürülebilir tasarımlar.  ",
      image: "/img/bg.webp",// Replace with actual image URL
      link:"/interior"
    },
  ];

  return (
      <div className="bg-gray-50 py-12" id={'special'}>
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
                      <a href={service.link}>
                      <button  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300">
                        Detailed Information
                      </button>
                      </a>

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
