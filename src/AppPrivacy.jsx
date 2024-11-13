import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./main.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
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
        <section className="section">
          <PrivacyPolicy />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
