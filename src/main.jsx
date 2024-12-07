import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import { NextUIProvider } from "@nextui-org/react";
import About from "./pages/about.jsx";
import Footer from "./components/footer.jsx";
import TeachingTech from "./pages/teachingTech.jsx";
import CosmicServices from "./pages/cosmicServices.jsx";
import Labaratories from "./pages/labaratories.jsx";
import Academy from "./pages/academy.jsx";
import Airtravel from "./components/airtravel.jsx";

const Root = () => {
  return (
    <>
      <NextUIProvider>
        <BrowserRouter>
          <Navbar />
          <Routes className="min-h-screen">
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/teachingTech" element={<TeachingTech />} />
            <Route path="/cosmic-services" element={<CosmicServices />} />
            <Route path="/labaratories" element={<Labaratories />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/airtravel" element={<Airtravel />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </NextUIProvider>
    </>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
