import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import { FaPhoneSquareAlt, FaTelegram } from "react-icons/fa";

const Footer = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <div
      style={{
        background:
          "transparent linear-gradient(180deg, #d5f0f7 0%, #ffffff 100%) 0% 0% no-repeat padding-box",
      }}
      className="p-9 mt-10"
    >
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex justify-center lg:justify-start">
            <a href="/">
              <img
                src="/img/logo.png"
                alt="Logo"
                className="h-16 object-contain cursor-pointer"
              />
            </a>
          </div>

          <div className="flex justify-center items-center">
            <ul className="flex gap-8 text-lg">
              <li className="cursor-pointer hover:text-blue-600 transition duration-300 font-semibold text-sm sm:font-bold sm:text-lg ">
                <a href="/about">{getText("navbar4")}</a>
              </li>

              <li className="cursor-pointer hover:text-blue-600 transition duration-300 font-semibold text-sm sm:font-bold sm:text-lg">
                <a href="/contact">{getText("navbar5")}</a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center gap-6 items-center">
            <a href="https://www.instagram.com/eduagencyuz/">
              <BiLogoInstagramAlt
                size={32}
                className="cursor-pointer hover:text-red-700 transition duration-300"
              />
            </a>
            <a href="https://t.me/eduagency_uz">
              <FaTelegram
                size={32}
                className="cursor-pointer hover:text-blue-600 transition duration-300"
              />
            </a>
            <a href="tel:+998334691101">
              <FaPhoneSquareAlt
                size={32}
                className="cursor-pointer hover:text-green-600 transition duration-300"
              />
            </a>
            <a href="https://facebook.com/eduagency.uz">
              <FaFacebook
                size={32}
                className="cursor-pointer hover:text-blue-700 transition duration-300"
              />
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Eduagency. All Rights Reserved.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
