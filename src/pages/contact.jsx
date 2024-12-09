import React, { useEffect } from "react";
import Wrapper from "../layout/wrapper";
import InputMask from "react-input-mask";
import { Button } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      style={{
        background:
          "transparent linear-gradient(180deg, #d5f0f7 0%, #ffffff 100%) 0% 0% no-repeat padding-box",
      }}
      className="min-h-screen"
    >
      <Wrapper>
        <div className="pt-20 flex flex-col items-center">
          {/* Contact Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-8">
            Contact Us
          </h1>
          <p className="text-6xl font-bold text-[#e63f38] text-center max-w-3xl mb-12">
            Contact us
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-12 w-full max-w-6xl">
            {/* Contact Details */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Contact Info</h2>
              <p className="text-gray-600">
                <strong>Address:</strong> 123 EduAgency Street, Tashkent,
                Uzbekistan
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> +998 90 123 45 67
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> info@eduagency.uz
              </p>

              {/* Social Media Links */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Follow Us</h3>
                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="text-[#e63f38] hover:text-gray-700 transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-[#e63f38] hover:text-gray-700 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-[#e63f38] hover:text-gray-700 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-1/2">
              <form
                action=""
                className="p-6 bg-white rounded-lg shadow-md space-y-6"
              >
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <InputMask
                    placeholder="Enter your name"
                    type="text"
                    required
                    className="bg-white form-control border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <InputMask
                    mask="+999 (99) 999 99 99"
                    placeholder="Enter your phone number"
                    type="text"
                    required
                    className="bg-white form-control border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <InputMask
                    placeholder="Enter your email"
                    type="email"
                    required
                    className="bg-white form-control border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    placeholder="Write your message here..."
                    required
                    className="bg-white form-control border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <Button
                  color="primary"
                  className="w-full bg-[#e63f38] text-white hover:bg-red-600"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
