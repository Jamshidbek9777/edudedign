import React, { useContext } from "react";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import Helmet from "../components/helmet.jsx";
import ContactUs from "../components/contactUs";
import Wrapper from "../layout/wrapper";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

const Interior = () => {
    const { selectedLanguage, selectedFlag, changeLanguage } =
        useContext(LanguageContext);

    return (
        <>
            <Helmet
                title={getText("AboutPageTitle") || "AcademyX"}
                description={getText("AboutPageDesc") || "Learn more about AcademyX."}
                link="/academy"
                keywords="about, EduAgency, Uzbekistan, education"
            />
            <div
                style={{
                    background: "linear-gradient(180deg, #f0f4f8 0%, #ffffff 100%)",
                }}
                className="min-h-screen text-gray-900"
            >
                <div className="pt-40 w-full">
                    <Wrapper>
                        {/* Hero Section */}
                        <div
                            className="relative w-full h-[500px] flex items-center justify-center rounded-xl overflow-hidden shadow-lg"
                            style={{
                                backgroundImage: "url('/img/eduimg.avif')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                            {/* Text Content */}
                            <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
                                    The Right Partner for Your School Projects
                                </h1>
                                <p className="text-lg sm:text-xl leading-relaxed font-medium">
                                    We create original and functional projects as a trusted solution partner to meet all
                                    your educational needs.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Section */}
                        <div className="pt-20  lg:px-20">
                            <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
                                Interior Design and Furnishing
                            </h2>
                            <p className="text-center text-gray-600 mb-10">
                                A timeline that adapts to your project while maintaining high-quality standards.
                            </p>
                            <div className="bg-white rounded-lg p-6 lg:p-10 shadow-md">
                                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center">
                                    {[
                                        {step: "İhtiyaçların Belirlenmesi", time: "1-3 Hafta"},
                                        {step: "Tasarım Geliştirme", time: "2-8 Hafta"},
                                        {step: "Üretim Danışmanlığı", time: "2-8 Hafta"},
                                        {step: "Proje Yönetimi", time: "8-12 Hafta"},
                                        {step: "Kurulum", time: "8-12 Hafta"},
                                        {step: "Destek", time: "Devamlı"},
                                    ].map(({step, time}, idx) => (
                                        <div key={idx} className="flex flex-col items-center">
                                            <div
                                                className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-red-400 to-red-600 text-white rounded-full mb-4 shadow-md">
                                                <TbPlayerTrackNextFilled size={28}/>
                                            </div>
                                            <h3 className="text-lg font-semibold">{step}</h3>
                                            <p className="text-gray-500 mt-2">{time}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Determining Needs Sections */}
                        {[...Array(4)].map((_, idx) => (
                            <div className="py-10  lg:px-20" key={idx}>
                                <div
                                    className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden">
                                    {idx % 2 === 0 ? (
                                        <>
                                            <div className="w-full lg:w-1/2">
                                                <img
                                                    src="/img/eduimg.avif"
                                                    alt="Determining Needs"
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                            <div className="w-full lg:w-1/2 p-8">
                                                <h2 className="text-3xl font-bold mb-4">
                                                    Determining Needs
                                                </h2>
                                                <p className="text-gray-700 mb-4">
                                                    Bring expertise to uncover needs, set goals, and plan project
                                                    timing.
                                                </p>
                                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                                    <li>Vision and priorities</li>
                                                    <li>Space requirements and building plans</li>
                                                    <li>Budget and purchasing planning</li>
                                                    <li>Field survey and furniture inventory</li>
                                                </ul>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-full lg:w-1/2 p-8">
                                                <h2 className="text-3xl font-bold mb-4">
                                                    Determining Needs
                                                </h2>
                                                <p className="text-gray-700 mb-4">
                                                    Bring expertise to uncover needs, set goals, and plan project
                                                    timing.
                                                </p>
                                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                                    <li>Vision and priorities</li>
                                                    <li>Space requirements and building plans</li>
                                                    <li>Budget and purchasing planning</li>
                                                    <li>Field survey and furniture inventory</li>
                                                </ul>
                                            </div>
                                            <div className="w-full lg:w-1/2">
                                                <img
                                                    src="/img/eduimg.avif"
                                                    alt="Determining Needs"
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Contact Section */}
                        <ContactUs/>
                    </Wrapper>
                </div>
            </div>
        </>
    );
};

export default Interior;
