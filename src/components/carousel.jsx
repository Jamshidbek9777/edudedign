import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Wrapper from "../layout/wrapper.jsx";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { getText } from "../languages/index.js";
import { LanguageContext } from "../context/language.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Carousel = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const router = useNavigate();

  // Array of slide data
  const slides = [
    {
      id: 1,
      header: getText("slider1Header"),
      description: getText("slider1Desc"),
      image: "/img/slider1.png",
      link: "/edu-design",
    },
    {
      id: 2,
      header: getText("slider2Header"),
      description: getText("slider2Desc"),
      image: "/img/slider2.png",
      link: "/cosmic-services",
    },
    {
      id: 3,
      header: getText("slider3Header"),
      description: getText("slider3Desc"),
      image: "/img/slider3.png",
      link: "/labaratories",
    },
    {
      id: 4,
      header: getText("slider4Header"),
      description: getText("slider4Desc"),
      image: "/img/slider4.png",
      link: "/academy",
    },
    {
      id: 5,
      header: getText("slider5Header"),
      description: getText("slider5Desc"),
      image: "/img/slider5.png",
      link: "/transfer",
    },
  ];

  return (
    <div className="pt-52 w-full">
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Wrapper>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-10">
                {/* Text Section */}
                <div className="text-center md:text-left max-w-lg">
                  <h1 className="text-3xl md:text-5xl font-bold text-[#1966a2]">
                    {slide.header}
                  </h1>
                  <p className="text-2xl font-bold mt-4 text-[#e63f38]">
                    {slide.description}
                  </p>
                  <Button
                    color="primary"
                    className="mt-10"
                    startContent={<ArrowRight />}
                    onClick={() => router(`${slide.link}`)}
                  >
                    {getText("sliderButton")}
                  </Button>
                </div>
                {/* Image Section */}
                <div className="flex justify-center">
                  <img
                    src={slide.image}
                    alt={`Slider ${slide.id}`}
                    className="w-full max-w-sm md:max-w-lg"
                  />
                </div>
              </div>
            </Wrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
