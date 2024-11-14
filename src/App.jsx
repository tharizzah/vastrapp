import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import "./main.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Built from "./components/Built";
// import BarChart from "./components/BarChart";
// import LineChart from "./components/LineChart";
import Industry from "./components/Industry";
import PieChartSelector from "./components/PieChartSelector";
import Deamle from "./components/Deamle";
import Stream from "./components/Stream";
// import FaqHero from "./components/FaqHero";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import RevenueCalc from "./components/RevenueCalc";
import Contact from "./components/contact";
import Licensor from "./components/Licensor";
import Distribute from "./components/Distribute";
import Identify from "./components/Identify";

function App() {
  useEffect(() => {
    if (window.Webflow) {
      window.Webflow.destroy();
      window.Webflow.ready();
      window.Webflow.require("ix2").init();
    }
    // Trigger a "readystatechange" event
    document.dispatchEvent(new Event("readystatechange"));
  }, []); // Empty dependency array to run this once on mount
  return (
    <>
      <div>
        <Nav />
        <section className="hero">
          <Hero />
        </section>
        <PieChartSelector />
        <RevenueCalc />
        {/* <Features />
        <Built />
        <Industry /> */}
        <Licensor />
        <Distribute />
        <section className="section smoke">
          <Deamle />
        </section>
        <section className="section">
          <Stream />
        </section>
        {/* <FaqHero /> */}
        <Faqs />
        <Footer />
      </div>
    </>
  );
}

export default App;
