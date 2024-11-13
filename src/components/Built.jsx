import React from "react";
import check from "../assets/icon-check.svg";
import details from "../assets/icon-details.svg";
import manage from "../assets/icon-manage.svg";

const Built = () => {
  return (
    <section id="keyfeatures" className="section smoke">
      <div className="w-layout-blockcontainer container w-container">
        <h1 className="heading center">
          Built for Record Labels and Publishers
        </h1>
        <div className="card-rows">
          <div
            data-w-id="819bdb79-e0ef-f8f4-1e29-1431a225e362"
            style={{ opacity: 0 }}
            className="cards"
          >
            <div className="center">
              <img
                src={check}
                loading="lazy"
                width="75"
                alt="Built for Record Labels and Publishers"
                className="icon-cards"
              />
            </div>
            <div className="card-title">Enter Master Work Details</div>
            <p className="paragraph-3">
              Represent the exact terms of your agreements digitally within
              VASTR. Our platform is built to adhere to all licensing and
              distribution laws, helping labels and publishers stay legally
              compliant while simplifying the entire licensing process, from
              contract creation to royalty payouts.
            </p>
          </div>
          <div
            data-w-id="77ba2515-1af3-3d6a-86d5-81f7eed089ae"
            style={{ opacity: 0 }}
            className="cards"
          >
            <div className="center">
              <img
                src={details}
                loading="lazy"
                width="75"
                alt="Create Licenses with Custom Pricing"
                className="icon-cards"
              />
            </div>
            <div className="card-title">
              Create Licenses with Custom Pricing
            </div>
            <p className="paragraph">
              Set your own streaming rates for exclusive content that can only
              be found on the VASTR distribution network. When you distribute
              your music exclusively through our network, you gain control over
              your per-stream pricing—allowing you to test different price
              points and understand your market value in real time.
            </p>
          </div>
          <div
            data-w-id="49b8d7b8-4e10-23e5-329a-6b040156ca75"
            style={{ opacity: 0 }}
            className="cards"
          >
            <div className="center">
              <img
                src={manage}
                loading="lazy"
                alt="Distribute and Manage Rights Easily"
                className="icon-cards"
              />
            </div>
            <div className="card-title">
              Distribute and Manage Rights Easily
            </div>
            <p className="paragraph-2">
              Whether you’re launching a prerelease, offering exclusive access,
              or managing general licensing, VASTR helps you engage your fanbase
              and automate royalty payments. Manage distribution through VASTR
              or any approved marketplace, with full accounting integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Built;
