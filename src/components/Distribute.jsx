import React from "react";
import schedules from "../assets/icon-schedules.svg";
import payouts from "../assets/icon-payouts.svg";
import certified from "../assets/icon-certified.svg";
import lotus from "../assets/art-Lotus-woman.png";
import cellphone from "../assets/art-cellphone-select.png";
import cellwoman from "../assets/art-cellphone-woman.png";
import singerwoman from "../assets/art-laptop-singer-woman.png";
import legalwoman from "../assets/art-legal-woman.png";
import laptops from "../assets/art-couple-on-laptops.png";

const Distribute = () => {
  return (
    <section id="keyfeatures" className="section bg">
      <div className="w-layout-blockcontainer container w-container">
        <h1 className="heading center">
          VASTR Distribute: Furnishing Licenses via API
        </h1>
        <h3 className="heading3 center">
          VASTR's API brings pay per stream to music apps, from onboarding to
          streaming{" "}
        </h3>
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
                alt=""
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
                alt=""
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
                alt=""
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
        <div>
          <div
            data-w-id="5c263f35-892f-b154-a996-7666ad830466"
            style={{ opacity: 0 }}
            className="w-layout-blockcontainer container w-container"
          >
            <div className="center col"></div>
            <div className="space-between stretch _10p">
              <div>
                <img
                  className="image"
                  src={lotus}
                  alt="VASTR ensures that all royalties are paid"
                  style={{ opacity: 0 }}
                  sizes="(max-width: 767px) 90vw, 450px"
                  data-w-id="84ca5a17-0111-65c7-e6aa-0d0237abadb6"
                  loading="lazy"
                />
              </div>
              <div className="spacer"></div>
              <div className="div-grow">
                <h2>Instant Payments for Everyone</h2>
                <p>
                  VASTR ensures that all royalties are paid instantly upon a
                  stream. Artists, producers, and labels can avoid cash flow
                  delays, receiving their share of royalties in real-time as
                  soon as a customer engages with their content.
                  <br />
                  <br />
                  Our proprietary system works with whatever business model you
                  may have in place. Your clients maintain control of their
                  per-stream rates while our infrastructure handles the revenue
                  sharing. A streamlined transaction fee applies—your platform
                  retains 10% of each transaction, VASTR receives 10% for
                  providing the licensing infrastructure. The Marketplace of
                  origin takes a fee, and the remaining amount goes to the
                  artist.
                </p>
              </div>
            </div>
            <div className="space-between stretch _10p">
              <div className="div-grow">
                <h2>
                  Enhanced Content Protection &amp; Exclusivity Management
                </h2>
                <p>
                  Strengthen your platform's offering with VASTR's proprietary
                  protection suite combinbed with industry standard DRM (Digital
                  Rights Management). Our infrastructure enables you to provide
                  your clients with flexible content gating options—from
                  pre-release campaigns to exclusive streaming rights—while
                  maintaining ironclad copyright protection. Your clients can
                  confidently distribute exclusive content through your
                  platform, backed by our automated piracy prevention system and
                  immediate violation response tools. Make your service even
                  more appealing with enterprise-grade security that protects
                  your clients’ high-value assets.
                </p>
              </div>
              <div className="spacer"></div>
              <div>
                <img
                  src={cellphone}
                  loading="lazy"
                  sizes="(max-width: 767px) 90vw, (max-width: 991px) 56vw, 450px"
                  //srcset="../assets/art-cellphone-select-p-500.png 500w, ../assets/art-cellphone-select-p-800.png 800w, ../assets/art-cellphone-select.png 1080w"
                  alt="VASTR's protection suite combinbed with industry standard DRM"
                  className="image"
                />
              </div>
            </div>
           
            <div className="space-between stretch _10p">
              <div>
                <img
                  src={legalwoman}
                  loading="lazy"
                  sizes="(max-width: 767px) 90vw, (max-width: 991px) 52vw, 450px"
                  //srcset="../assets/art-legal-woman-p-500.png 500w, ../assets/art-legal-woman-p-800.png 800w, ../assets/art-legal-woman.png 1080w"
                  alt="Our platform is compliant with legal requirements"
                  className="image"
                />
              </div>
              <div className="spacer"></div>
              <div className="div-grow">
                <h2>Pause Disbursements as Required by law</h2>
                <p>
                  Our platform is compliant with legal requirements while
                  maintaining full control over copy right holders’ music rights
                  and royalties. Clear and present DMCA take down protocol
                  protects asset holders.
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distribute;
