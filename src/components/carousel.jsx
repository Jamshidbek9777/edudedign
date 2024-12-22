import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Wrapper from "../layout/wrapper.jsx";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@nextui-org/react";
import { Modal } from "antd";
import { ArrowRight } from "lucide-react";
import { getText } from "../languages/index.js";
import { LanguageContext } from "../context/language.jsx";
import { useContext, useState } from "react";

export const Carousel = () => {
    const { selectedLanguage } = useContext(LanguageContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [videoSrc, setVideoSrc] = useState("https://www.youtube.com/embed/d4Qbd-JagF8");

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleClose = () => {
        setIsModalVisible(false);
        setVideoSrc("");
        // Restore the video source when the modal reopens
        setTimeout(() => setVideoSrc("https://www.youtube.com/embed/d4Qbd-JagF8"), 0);
    };

    return (
        <div className="pt-40 w-full text-white">
            <Wrapper>
                <div className="relative w-full">
                    {/* Background Image */}
                    <img
                        src="/img/bg.webp"
                        alt="Background"
                        className="w-full h-[550px] object-cover rounded-2xl shadow-lg"
                    />
                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-50 flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold mb-4 text-white">
                            Discover Amazing Content
                        </h1>
                        <p className="text-lg mb-6 text-gray-300">
                            Watch and explore high-quality videos with ease
                        </p>
                        <Button
                            icon={<ArrowRight />}
                            onPress={showModal}
                            auto
                            className="bg-blue-500 text-white hover:bg-blue-600"
                            shadow
                        >
                            Watch Video
                        </Button>
                    </div>
                </div>

                {/* Ant Design Modal */}
                <Modal
                    title={getText("Watch Video")}
                    open={isModalVisible}
                    onCancel={handleClose}
                    footer={null}
                    centered
                    style={{
                        padding: 10,
                        borderRadius: 14,
                        background: "#e5e5e5",
                    }}
                    width={1000}
                    className="custom-modal"
                >
                    <iframe
                        width="100%"
                        height="450"
                        src={videoSrc}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-xl"
                    ></iframe>
                </Modal>
            </Wrapper>
        </div>
    );
};
