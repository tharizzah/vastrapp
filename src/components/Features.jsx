import React from "react";
import schedules from "../assets/icon-schedules.svg";
import payouts from "../assets/icon-payouts.svg";
import certified from "../assets/icon-certified.svg";

const Features = () => {
  return (
    <section id="keyfeatures" className="section bg">
      <div className="w-layout-blockcontainer container w-container">
        <h1 className="heading center">
          Key Features for Music Licensing and Royalty Payments
        </h1>
        <div className="card-rows">
          <div
            data-w-id="4ce1a558-00d1-b404-ba6e-55e4331257d9"
            style={{ opacity: 0 }}
            className="cards"
          >
            <div className="center">
              <img
                src={schedules}
                loading="lazy"
                width="75"
                alt="Automated Rights Management and Payments"
                className="icon-cards"
              />
            </div>
            <div className="card-title">
              Automated Rights Management &amp; Payments
            </div>
            <p className="paragraph-3">
              Enable your platform to handle complex licensing agreements with
              our enterprise-grade infrastructure. VASTR manages the backend of
              music licensing—from automated recoupments to multi-party royalty
              distributions—while you maintain your branded user experience.
            </p>
          </div>
          <div
            data-w-id="4ce1a558-00d1-b404-ba6e-55e4331257e2"
            style={{ opacity: 0 }}
            className="cards"
          >
            <div className="center">
              <img
                src={payouts}
                loading="lazy"
                width="75"
                alt="Flexible Payment Infrastructure"
                className="icon-cards"
              />
            </div>
            <div className="card-title">Flexible Payment Infrastructure</div>
            <p className="paragraph">
              Integrate sophisticated payment handling that adapts to any
              business model. Payments can be sent to one party, then be
              distributed by that party accordingly, or you can use our splits
              architecture. Whether managing Master's Share splits, Publisher's
              Share distributions, or complex producer point systems, our API
              handles the calculations.
            </p>
          </div>
          <div
            data-w-id="4ce1a558-00d1-b404-ba6e-55e4331257eb"
            style={{ opacity: 0 }}
            className="cards"
          >
            <div className="center">
              <img
                src={certified}
                loading="lazy"
                alt="Dynamic Licensing Controls and Pricing Models"
                className="icon-cards"
              />
            </div>
            <div className="card-title">
              Dynamic Licensing Controls &amp; Pricing Models
            </div>
            <p className="paragraph-2">
              Give your platform the flexibility to handle both exclusive and
              non-exclusive music licensing, with customizable per-stream rates
              starting at $0.05 for VASTR-exclusive content and $0.02 for
              non-exclusive distribution. Your clients can test different
              pricing models while our infrastructure manages the technical
              heavy-lifting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
