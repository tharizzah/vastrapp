import React from "react";
import Contact from "./contact";

const Footer = () => {
  return (
    <section className="section footer">
      <Contact />
      <div className="footerbottom">
        <div className="w-layout-blockcontainer container-grow w-container">
          <div className="space-between _100 line">
            <div className="footer-text">©2024 DML.SOLUTIONS INC.</div>
            <h3 className="heading-4">VASTR</h3>
            {/* <a href="#" className="button ns w-inline-block">
              <div>Purchase Now</div>
            </a> */}
          </div>
          <div className="spacer20"></div>
          <div className="space-between _100">
            <div className="footer-text">
              FAQ{" "}
              <a href="privacy-policy.html" style={{ textDecoration: "none" }}>
                Privacy Policy
              </a>
            </div>
            <div className="footer-text">Social Media</div>
          </div>
        </div>
        <div className="spacer20"></div>
      </div>
    </section>
  );
};

export default Footer;
