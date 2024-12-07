import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import { NextUIProvider } from "@nextui-org/react";

const Root = () => {
  return (
    <>
      <NextUIProvider>
        <BrowserRouter>
          <Navbar />
          <Routes className="min-h-screen">
            <Route path="/" exact element={<App />} />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
