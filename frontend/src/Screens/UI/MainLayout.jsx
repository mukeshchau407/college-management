import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
