import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Person from "../components/Person";
import About from "../components/About";
import Skills from "../components/Skills";
import PortfolioCard from "../components/PortfolioCard";
import Quality from "../components/Quality";
import { Route, Routes } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/quality" element={<About />} />
        <Route path="/person" element={<Person />} />
        <Route path="/about" element={<Quality />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<PortfolioCard />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default HomePage;
