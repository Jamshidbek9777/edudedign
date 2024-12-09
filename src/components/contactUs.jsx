import React, { useContext, useEffect, useState } from "react";
import Wrapper from "../layout/wrapper";
import InputMask from "react-input-mask";
import { Button } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import axios from "axios";
import { message } from "antd";

const ContactUs = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init();
  }, []);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 (__) ___-__-__");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const TOKEN = "8173837054:AAH6ZQ2Cz6d-EDBcX-q4p2BTV-9kR-jHAJI";
  const userid1 = "1355861489";
  const encodeText = (text) => encodeURIComponent(text);

  const sendFeedback = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const text = `Name: ${name}\nMessage: ${description}\nPhone number: ${phone}\nEmail: ${
      email.length === 0 ? "Email is empty" : email
    }`;

    try {
      await axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${userid1}&text=${encodeText(
          text
        )}`
      );

      message.success("Successfully sent!");
    } catch (error) {
      message.error("Error");
    } finally {
      setIsLoading(false);
      setName("");
      setPhone("+998 (__) ___-__-__");
      setEmail("");
      setDescription("");
    }
  };

  const handlePhoneChange = (e) => {
    const cleaned = e.target.value.replace(/[^+\d]/g, "");
    setPhone(cleaned);
  };

  return (
    <Wrapper>
      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0"
      >
        <div className="w-full md:w-1/2">
          <img
            src="/img/contactuspic.png"
            alt=""
            className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2">
          <form onSubmit={sendFeedback} className="p-8 rounded-lg">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                {getText("contactHeader")}
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="inputWrap">
                <InputMask
                  placeholder={getText("placeHolderName")}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  value={name}
                  required
                  type="text"
                  className="bg-white form-control border border-gray-300 bg-transparent rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="inputWrap">
                <InputMask
                  placeholder={getText("placeHolderPhone")}
                  onChange={handlePhoneChange}
                  value={phone}
                  name="name"
                  required
                  type="text"
                  mask="+999 (99) 999 99 99"
                  className="bg-white form-control border border-gray-300 bg-transparent rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="inputWrap mb-4">
              <InputMask
                placeholder={getText("placeHolderEmail")}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="name"
                required
                type="email"
                className="bg-white form-control border border-gray-300 bg-transparent rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="inputWrap mb-4">
              <textarea
                placeholder={getText("placeHolderText")}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="bg-white form-control border border-gray-300 dark:border-[#ffffff36] bg-transparent rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="message"
                required
              />
            </div>
            <Button
              type="submit"
              isLoading={isLoading}
              color="primary"
              className="w-full"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactUs;
