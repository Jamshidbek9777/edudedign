import React, { useEffect } from "react";
import Wrapper from "../layout/wrapper";
import InputMask from "react-input-mask";
import { Button } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Wrapper>
      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row items-center md:justify-between   space-y-8 md:space-y-0"
      >
        <div className="w-full md:w-1/2">
          <img
            src="/img/contactuspic.png"
            alt=""
            className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2">
          <form action="" className="p-8 rounded-lg ">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                Contact us
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="inputWrap">
                <InputMask
                  placeholder="Name"
                  name="name"
                  required
                  type="text"
                  className="bg-white
                   form-control border border-gray-300  bg-transparent rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="inputWrap">
                <InputMask
                  placeholder="Phone"
                  name="name"
                  required
                  type="text"
                  mask="+999 (99) 999 99 99"
                  className="bg-white
                   form-control border border-gray-300  bg-transparent rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="inputWrap mb-4">
              <InputMask
                placeholder="Email"
                name="name"
                required
                type="email"
                className="bg-white
                 form-control border border-gray-300  bg-transparent rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="inputWrap mb-4">
              <textarea
                placeholder={"Your message"}
                // value={description}
                className="bg-white
                 form-control border border-gray-300 dark:border-[#ffffff36] bg-transparent rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="message"
                required
              />
            </div>
            <Button color="primary" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactUs;
