import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./context/language.jsx";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/navbar.jsx";
import About from "./pages/about.jsx";
import Footer from "./components/footer.jsx";
import Contact from "./pages/contact.jsx";
import Interior from "./pages/interior.jsx";

import App from "./App.jsx";
import "./index.css";


const Root = () => {
  return (
    <>
      <LanguageProvider>
        <NextUIProvider>
          <BrowserRouter>
            <Navbar />
            <Routes className="min-h-screen">
              <Route path="/" element={<App />} />
              <Route path="/about" element={<About />} />
              {/*<Route path="/teachingTech" element={<TeachingTech />} />*/}
              {/*<Route path="/cosmic-services" element={<CosmicServices />} />*/}
              {/*<Route path="/labaratories" element={<Labaratories />} />*/}
              {/*<Route path="/academy" element={<Academy />} />*/}
              {/*<Route path="/transfer" element={<Transfer />} />*/}
              {/*<Route path="/edu-design" element={<EducationDesign />} />*/}
              <Route path="/contact" element={<Contact />} />
              {/*<Route path="/k12net" element={<K12net />} />*/}
              {/*<Route path="/okulaile" element={<OkulAile />} />*/}
              {/*<Route path="/mental-up" element={<MentaulUp />} />*/}
              <Route path={'/interior'}  element={<Interior />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </NextUIProvider>
      </LanguageProvider>
    </>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
