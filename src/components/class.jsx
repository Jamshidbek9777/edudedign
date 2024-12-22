import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { LanguageContext } from "../context/language";

const Class = () => {
    const { selectedLanguage } = useContext(LanguageContext);

    const services = [
        {
            id: 1,
            title: "Fergana Uluslararası Okulu",
            description:
                "Özel proje, modern mimari.",
            image: "/img/bg.webp",
        },
        {
            id: 2,
            title: "Taşkent Eğitim Merkezi",
            description:
                "Anahtar teslim başarı hikayesi.  ",
            image: "/img/bg.webp",
        },

    ];

    return (
        <div className="py-12 bg-gray-100" id={'class'}>
            <Wrapper>
                <div className="container mx-auto px-4">
                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                        Projelerimiz
                    </h1>

                    {/* Card Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-48 object-cover opacity-80"
                                />
                                <div
                                    className="absolute top-0 left-0 w-full h-48 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                                <div className="p-6 relative">
                                    <h2 className="text-xl font-bold mb-3">
                                        {service.title}
                                    </h2>
                                    <p className="text-sm text-gray-200 mb-6">
                                        {service.description}
                                    </p>
                                    <button
                                        className="bg-white text-indigo-600 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
                                        Detailed Information
                                    </button>
                                </div>
                            </div>
                        ))}


                    </div>
                    <h1 className={'text-2xl w-full mt-10 text-center'}>
                        Tamamlanan projelerden görseller ve kısa açıklamalarla kullanıcılar bilgilendirilir.
                    </h1>
                </div>
            </Wrapper>
        </div>
    );
};

export default Class;
