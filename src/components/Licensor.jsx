import React from "react";
import check from "../assets/icon-check.svg";
import details from "../assets/icon-details.svg";
import manage from "../assets/icon-manage.svg";
import lotus from "../assets/art-Lotus-woman.png";
import cellphone from "../assets/art-cellphone-select.png";
import cellwoman from "../assets/art-cellphone-woman.png";
import singerwoman from "../assets/art-laptop-singer-woman.png";
import legalwoman from "../assets/art-legal-woman.png";
import laptops from "../assets/art-couple-on-laptops.png";

const Licensor = () => {
  return (
    <section id="keyfeatures" className="section smoke">
      <div className="w-layout-blockcontainer container w-container">
        <h1 className="heading center">
          VASTR Licensor: Built for Copyright Owners
        </h1>
        <h3 className="heading3 center">
          Use VASTR's Licensor App to upload music, terms, and more
        </h3>
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
                alt=""
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
                alt=""
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
              <img src={manage} loading="lazy" alt="" className="icon-cards" />
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
        <div>
          <div
            data-w-id="5c263f35-892f-b154-a996-7666ad830466"
            style={{ opacity: 0 }}
            className="w-layout-blockcontainer container w-container"
          >
            <div className="center col"></div>

            <div className="space-between stretch _10p">
              <div className="div-grow">
                <h2>Master Work’s Share and Publisher’s Share</h2>
                <p>
                  VASTR lets you define the split between Master Work and
                  Publishing rights. This saves time and ensures that every
                  stakeholder is compensated accurately while remaining flexible
                  to whatever copy right owners have arranged.
                </p>
              </div>
              <div className="spacer"></div>
              <div>
                <img
                  src={singerwoman}
                  loading="lazy"
                  sizes="(max-width: 767px) 90vw, (max-width: 991px) 59vw, 450px"
                  //srcset="../assets/art-laptop-singer-woman-p-500.png 500w, ../assets/art-laptop-singer-woman-p-800.png 800w, ../assets/art-laptop-singer-woman.png 1080w"
                  alt="split between Master Work and Publishing"
                  className="image"
                />
              </div>
            </div>

            <div className="space-between stretch _10p">
              <div>
                <img
                  src={cellwoman}
                  loading="lazy"
                  sizes="(max-width: 767px) 90vw, 450px"
                  //srcset="../assets/art-cellphone-woman-p-500.png 500w, ../assets/art-cellphone-woman-p-800.png 800w, ../assets/art-cellphone-woman.png 1080w"
                  alt="Open Licensing System"
                  className="image"
                />
              </div>
              <div className="spacer"></div>
              <div className="div-grow">
                <h2>Open Licensing System</h2>
                <p>
                  Asset owners create licenses that work for their business
                  model by choosing between exclusive or non-exclusive
                  distribution. With VASTR, copy right owners can customize
                  every aspect of their licenses—from stream rate to
                  availability. This allows owners to maintain complete control
                  over how their music is distributed and monetized.
                </p>
              </div>
            </div>

            <div className="space-between stretch _10p">
              <div className="div-grow">
                <h2>User Managed Accounts</h2>
                <p>
                  VASTR offers flexible payment management that works with your
                  existing system. Whether you handle distributions directly or
                  work through aggregators, our platform seamlessly integrates
                  with your preferred method. Artists and rights holders can
                  monitor their involvement in various works and track revenue
                  streams, while payments can be managed either personally or
                  through your chosen distribution service. This flexible
                  approach ensures smooth operations whether you're hands-on or
                  prefer to delegate payment management.
                </p>
              </div>
              <div className="spacer"></div>
              <div>
                <img
                  src={laptops}
                  loading="lazy"
                  sizes="(max-width: 767px) 90vw, 450px"
                  //srcset="../assets/art-couple-on-laptops-p-500.png 500w, ../assets/art-couple-on-laptops-p-800.png 800w, ../assets/art-couple-on-laptops.png 1080w"
                  alt="User Managed Accounts"
                  className="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Licensor;
