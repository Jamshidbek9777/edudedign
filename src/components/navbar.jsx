import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook, FaPhoneSquareAlt, FaTelegram } from "react-icons/fa";
import { LanguageContext } from "../context/language";
import { getText } from "../languages";
import { Button } from "@nextui-org/react";
import { Dropdown } from "antd";

const Navbar = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext);

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

  const items = [
    {
      key: "1",
      label: "Bogchalar",
      children: [
        { label: <Link to="/okulaile">Okulaile</Link>, key: "1-1" },
        { label: <Link to="/mental-up">Mental Up</Link>, key: "1-2" },
        { label: <Link to="https://kosmosx.uz/#/online-platforms">Future astronaut</Link>, key: "1-3" },
        { label: <Link to="/labaratories">STEMLab</Link>, key: "1-4" },
      ],
    },
    {
      key: "2",
      label: "Boshlangich maktablar",
      children: [
        { label: <Link to="/mental-up">Mental Up</Link>, key: "2-1" },
        { label: <Link to="https://kosmosx.uz/#/online-platforms">Future astronaut</Link>, key: "2-2" },
        { label: <Link to="/k12net">K12net</Link>, key: "2-3" },
        { label: <Link to="/labaratories">STEMLab</Link>, key: "2-4" },
        { label: <Link to="https://kosmosx.uz/#/trip-to-space">Uzay Kampi</Link>, key: "2-5" },
      ],
    },
    {
      key: "3",
      label: "O'rta maktablar",
      children: [
        { label: <Link to="/mental-up">Mental Up</Link>, key: "3-1" },
        { label: <Link to="/k12net">K12net</Link>, key: "3-2" },
        { label: <Link to="/labaratories">STEMLab</Link>, key: "3-3" },
        { label: <Link to="https://kosmosx.uz/#/trip-to-space">Uzay Kampi</Link>, key: "3-4" },
      ],
    },
    {
      key: "4",
      label: "Yuqori maktablar",
      children: [
        { label: <Link to="/k12net">K12net</Link>, key: "4-1" },
        { label: <Link to="https://kosmosx.uz/#/trip-to-space">Uzay Kampi</Link>, key: "4-2" },
        { label: <Link to="/labaratories">STEMLab</Link>, key: "4-3" },
      ],
    },
  ];

  return (
      <div className="w-full fixed z-[999] my-2">
        {/* topbar */}
        <div
            className="flex justify-between items-center px-4 md:px-6 py-2 text-gray-600 border-b bg-gray-100 mx-4 rounded-t-3xl">
          <div className="flex gap-4">
            <a href="https://www.instagram.com/eduagencyuz/">
              <BiLogoInstagramAlt className="cursor-pointer hover:text-red-700 transition duration-300 text-xl"/>
            </a>
            <a href="https://t.me/eduagency_uz">
              <FaTelegram className="cursor-pointer hover:text-blue-600 transition duration-300 text-xl"/>
            </a>
            <a href="tel:+998334691101">
              <FaPhoneSquareAlt className="cursor-pointer hover:text-green-600 transition duration-300 text-xl"/>
            </a>
            <a href="https://facebook.com/eduagency.uz">
              <FaFacebook className="cursor-pointer hover:text-blue-700 transition duration-300 text-xl"/>
            </a>
          </div>

          <div className="flex gap-4 items-center ">
            <div className="gap-5 hidden lg:flex">

            </div>

            <div className="relative">
              <div className="flex items-center gap-[5px] outline-none border-none cursor-pointer">
                <img src={selectedFlag} style={{width: "20px", objectFit: "cover"}}/>
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

        {/* bottom bar */}
        <div
            className="shadow-lg flex flex-row items-center px-4 md:px-6 py-4 gap-10 justify-between bg-white mx-4 rounded-b-3xl">
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center justify-between  w-full"  >
              <div className="text-xl font-bold text-red-500">
                <Link to={"/"}>
                  <img src="/img/logo.png" alt="Logo" className="h-12 object-contain cursor-pointer"/>
                </Link>
              </div>

              <div className="hidden lg:flex  text-gray-700 text-sm text-center">
                <a href="/edu-design" className="hover:text-red-500 transition text-base font-bold ">
                  {/*{getText("navbar6")}*/}
                  Project Xizmatlari
                </a>
                <a href="/teachingTech" className="hover:text-red-500 transition text-base font-bold ml-3">
                  {getText("navbar1")}
                </a>

                <a href="/labaratories" className="hover:text-red-500 transition text-base font-bold ml-3">
                  {/*{getText("navbar2")}*/}
                  Class Concepts
                </a>
                <a href="/academy" className="hover:text-red-500 transition text-base font-bold ml-3">
                  {/*AcademyX*/}
                  {/*About us*/}
                </a>

                <a href="/transfer" className="hover:text-red-500 transition text-base font-bold">
                  {/*{getText("navbar3")}*/}
                </a>
                <a href="/cosmic-services" className="hover:text-red-500 transition text-base font-bold">

                </a>
                <a href="/about" className="hover:text-red-500 transition text-base font-bold ml-3">
                  {getText("navbar4")}
                </a>
                <a className="hover:text-red-500 transition text-base font-bold ml-3" href="/contact ">
                  {getText("navbar5")}
                </a>
              </div>
            </div>
            {/*<div className="hidden lg:flex">*/}
            {/*  <Dropdown menu={{ items }}>*/}
            {/*    <a onClick={(e) => e.preventDefault()}>*/}
            {/*      <Button color={"primary"} variant={"shadow"}>*/}
            {/*        Services*/}
            {/*      </Button>*/}
            {/*    </a>*/}
            {/*  </Dropdown>*/}
            {/*</div>*/}
          </div>
          <div className={`burger ${isMenuOpen ? "open" : ""} block lg:hidden`} onClick={toggleMenu}>
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
            <li onClick={toggleMenu}>
              <Link
                  to={"/about"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
              >
                {getText("navbar4")}
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                  to={"/edu-design"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
              >
                {getText("navbar6")}
              </Link>
            </li>
            {" "}
            <li onClick={toggleMenu}>
              <Link
                  to={"/teachingTech"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
              >
                {getText("navbar1")}
              </Link>
            </li>
            {" "}
            <li onClick={toggleMenu}>
              <Link
                  to={"/labaratories"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
              >
                {getText("navbar2")}
              </Link>
            </li>
            {" "}
            <li onClick={toggleMenu}>
              <Link
                  to={"/academy"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
              >
                AcademyX
              </Link>
            </li>
            {" "}
            <li onClick={toggleMenu}>
              <Link
                  to={"/transfer"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
              >
                {getText("navbar3")}
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                  to={"/cosmic-services"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
              >
                KosmosX
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                  to={"/contact"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#3089dd] bg-opacity-10"
              >
                {getText("navbar5")}
              </Link>
            </li>
            <div className="w-full">
              <Dropdown
                  trigger={'click'}
                  menu={{
                    items,
                  }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Button className={''} color={'primary'} variant={'shadow'}>
                    Services
                  </Button>
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
