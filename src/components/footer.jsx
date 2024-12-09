import React from "react";
import Wrapper from "../layout/wrapper";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { getText } from "../languages";

const Footer = () => {
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
            <img
              src="/img/logo.png"
              alt="Logo"
              className="h-16 object-contain cursor-pointer"
            />
          </div>

          <div className="flex justify-center items-center">
            <ul className="flex gap-8 text-lg">
              <li className="cursor-pointer hover:text-blue-600 transition duration-300 font-semibold text-sm sm:font-bold sm:text-lg ">
                <a href="/abouts">{getText("navbar4")}</a>
              </li>

              <li className="cursor-pointer hover:text-blue-600 transition duration-300 font-semibold text-sm sm:font-bold sm:text-lg">
                {getText("navbar5")}
              </li>
            </ul>
          </div>

          <div className="flex justify-center gap-6 items-center">
            <BiLogoInstagramAlt
              size={32}
              className="cursor-pointer hover:text-blue-700 transition duration-300"
            />
            <FaLinkedin
              size={32}
              className="cursor-pointer hover:text-blue-600 transition duration-300"
            />
            <FaYoutube
              size={32}
              className="cursor-pointer hover:text-red-600 transition duration-300"
            />
            <FaFacebook
              size={32}
              className="cursor-pointer hover:text-pink-500 transition duration-300"
            />
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
