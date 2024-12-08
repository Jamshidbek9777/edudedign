import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { LanguageContext } from "../context/language";
import { getText } from "../languages";

const Navbar = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  const [isMenuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className="w-full fixed z-[999] my-2">
      <div className="flex justify-between items-center px-4 md:px-6 py-2 text-gray-600 border-b bg-gray-100 mx-4 rounded-t-3xl">
        <div className="flex gap-4">
          <BiLogoInstagramAlt className="cursor-pointer hover:text-blue-700 transition duration-300 text-xl" />
          <FaLinkedin className="cursor-pointer hover:text-blue-600 transition duration-300 text-xl" />
          <FaYoutube className="cursor-pointer hover:text-red-600 transition duration-300 text-xl" />
          <FaFacebook className="cursor-pointer hover:text-pink-500 transition duration-300 text-xl" />
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-5">
            <a
              href="/about"
              className="hover:text-red-500 transition text-base font-bold"
            >
              {getText("navbar4")}
            </a>
            <a
              className="hover:text-red-500 transition text-base font-bold"
              href=""
            >
              {getText("navbar5")}
            </a>
          </div>
          <div className="relative">
            <div className="flex items-center gap-[5px] outline-none border-none cursor-pointer">
              <img
                src={selectedFlag}
                style={{ width: "20px", objectFit: "cover" }}
              />
              <select
                className="bg-transparent border-none outline-none cursor-pointer"
                onChange={(e) => changeLanguage(e.target.value)}
                value={selectedLanguage}
              >
                <option className="dark:bg-[#121624] border-none" value="uz">
                  Oʻzbek
                </option>
                <option className="dark:bg-[#121624] border-none" value="en">
                  English
                </option>
                <option className="dark:bg-[#121624] border-none" value="tr">
                  Türkçe
                </option>
                <option className="dark:bg-[#121624] border-none" value="ru">
                  Русский
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center px-4 md:px-6 py-4 gap-10 justify-between bg-white mx-4 rounded-b-3xl">
        <div className="flex items-center gap-20">
          {/* img */}
          <div className="text-xl font-bold text-red-500">
            <Link to={"/"}>
              <img
                src="/img/logo.png"
                alt="Logo"
                className="h-12 object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Items */}
          <div className="hidden lg:flex gap-4 2xl:gap-8 text-gray-700 text-sm text-center">
            <a
              href="/teachingTech"
              className="hover:text-red-500 transition text-base font-bold"
            >
              {getText("navbar1")}
            </a>
            <a
              href="/cosmic-services"
              className="hover:text-red-500 transition text-base font-bold"
            >
              Kosmosx
            </a>
            <a
              href="/labaratories"
              className="hover:text-red-500 transition text-base font-bold"
            >
              {getText("navbar2")}
            </a>
            <a
              href="/academy"
              className="hover:text-red-500 transition text-base font-bold"
            >
              Academyx
            </a>

            <a
              href="/airtravel"
              className="hover:text-red-500 transition text-base font-bold"
            >
              {getText("navbar3")}
            </a>
          </div>
        </div>
        <div
          className={`burger ${isMenuOpen ? "open" : ""} block lg:hidden`}
          onClick={toggleMenu}
        >
          <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41]"></div>
          <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41]"></div>
          <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41]"></div>
        </div>
      </div>

      <div
        className={`menu duration-300 h-full xl:w-[calc(100%-170px)] lg:hidden max-w-xl xl:max-w-none xl:h-auto bg-white fixed inset-0 z-[99] pt-20 lg:pt-24 px-5 pb-6 flex flex-col justify-between xl:hidden  ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="xl:flex xl:gap-x-5">
          <div className="text-xl font-bold text-red-500 mb-4 ">
            <img
              src="/img/logo.png"
              alt="Logo"
              className="h-8 md:h-12 object-contain cursor-pointer"
            />
          </div>
          <li>
            <Link className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#7c7e8083] bg-opacity-10">
              Home
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
