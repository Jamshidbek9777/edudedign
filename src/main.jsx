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

const Root = () => {
  return (
    <>
      <NextUIProvider>
        <BrowserRouter>
          <Navbar />
          <Routes className="min-h-screen">
            <Route path="/" exact element={<App />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/teachingTech" exact element={<TeachingTech />} />
            <Route path="/cosmic-services" exact element={<CosmicServices />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </NextUIProvider>
    </>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
