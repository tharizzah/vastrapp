import React from "react";
import lotus from "../assets/art-Lotus-woman.png";
import cellphone from "../assets/art-cellphone-select.png";
import cellwoman from "../assets/art-cellphone-woman.png";
import singerwoman from "../assets/art-laptop-singer-woman.png";
import legalwoman from "../assets/art-legal-woman.png";
import laptops from "../assets/art-couple-on-laptops.png";

const Identify = () => {
  return (
    <section className="section">
      <div
        data-w-id="5c263f35-892f-b154-a996-7666ad830466"
        style={{ opacity: 0 }}
        className="w-layout-blockcontainer container w-container"
      >
        <div className="center col">
          <h1 className="heading center">
            VASTR Identify: Securing music assets
          </h1>
          {/* <p>
            New technology moves fast, but copyright law is here to stay. VASTR
            is designed to facilitate digital music licensing contracts that
            align with legal requirements. To ensure comprehensive music asset
            management, our platform offers features that cater to real-world
            licensing needs, including royalty payments, copyright protection,
            and flexible digital agreements.
          </p> */}
          
        </div>
        
        <div className="space-between stretch _10p">
          <div className="div-grow">
            <h2>Enhanced Content Protection &amp; Exclusivity Management</h2>
            <p>
              Strengthen your platform's offering with VASTR's proprietary
              protection suite combinbed with industry standard DRM (Digital
              Rights Management). Our infrastructure enables you to provide your
              clients with flexible content gating options—from pre-release
              campaigns to exclusive streaming rights—while maintaining ironclad
              copyright protection. Your clients can confidently distribute
              exclusive content through your platform, backed by our automated
              piracy prevention system and immediate violation response tools.
              Make your service even more appealing with enterprise-grade
              security that protects your clients’ high-value assets.
            </p>
          </div>
          <div className="spacer"></div>
          <div>
            <img
              src={cellphone}
              loading="lazy"
              sizes="(max-width: 767px) 90vw, (max-width: 991px) 56vw, 450px"
              //srcset="../assets/art-cellphone-select-p-500.png 500w, ../assets/art-cellphone-select-p-800.png 800w, ../assets/art-cellphone-select.png 1080w"
              alt=""
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
              alt=""
              className="image"
            />
          </div>
          <div className="spacer"></div>
          <div className="div-grow">
            <h2>Open Licensing System</h2>
            <p>
              Asset owners create licenses that work for their business model by
              choosing between exclusive or non-exclusive distribution. With
              VASTR, copy right owners can customize every aspect of their
              licenses—from stream rate to availability. This allows owners to
              maintain complete control over how their music is distributed and
              monetized.
            </p>
          </div>
        </div>
        <div className="space-between stretch _10p">
          <div className="div-grow">
            <h2>Master Work’s Share and Publisher’s Share</h2>
            <p>
              VASTR lets you define the split between Master Work and Publishing
              rights. This saves time and ensures that every stakeholder is
              compensated accurately while remaining flexible to whatever copy
              right owners have arranged.
            </p>
          </div>
          <div className="spacer"></div>
          <div>
            <img
              src={singerwoman}
              loading="lazy"
              sizes="(max-width: 767px) 90vw, (max-width: 991px) 59vw, 450px"
              //srcset="../assets/art-laptop-singer-woman-p-500.png 500w, ../assets/art-laptop-singer-woman-p-800.png 800w, ../assets/art-laptop-singer-woman.png 1080w"
              alt=""
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
              alt=""
              className="image"
            />
          </div>
          <div className="spacer"></div>
          <div className="div-grow">
            <h2>Pause Disbursements as Required by law</h2>
            <p>
              Our platform is compliant with legal requirements while
              maintaining full control over copy right holders’ music rights and
              royalties. Clear and present DMCA take down protocol protects asset holders.
            </p>
          </div>
        </div>
        <div className="space-between stretch _10p">
          <div className="div-grow">
            <h2>User Managed Accounts</h2>
            <p>
              VASTR offers flexible payment management that works with your
              existing system. Whether you handle distributions directly or work
              through aggregators, our platform seamlessly integrates with your
              preferred method. Artists and rights holders can monitor their
              involvement in various works and track revenue streams, while
              payments can be managed either personally or through your chosen
              distribution service. This flexible approach ensures smooth
              operations whether you're hands-on or prefer to delegate payment
              management.
            </p>
          </div>
          <div className="spacer"></div>
          <div>
            <img
              src={laptops}
              loading="lazy"
              sizes="(max-width: 767px) 90vw, 450px"
              //srcset="../assets/art-couple-on-laptops-p-500.png 500w, ../assets/art-couple-on-laptops-p-800.png 800w, ../assets/art-couple-on-laptops.png 1080w"
              alt=""
              className="image"
            />
          </div>
        </div>
        <div className="space-between stretch _10p">
          <div>
            <img
              src={lotus}
              loading="lazy"
              sizes="(max-width: 767px) 90vw, 450px"
              //srcset="../assets/art-Lotus-woman-p-500.png 500w, ../assets/art-Lotus-woman-p-800.png 800w, ../assets/art-Lotus-woman.png 960w"
              alt=""
              className="image"
            />
          </div>
          <div className="spacer"></div>
          <div className="div-grow">
            <h2>Support for Charitable Donations</h2>
            <p>
              Give back with VASTR by building in overrides for charitable
              donations. Whether your client wants to donate a portion of their
              royalties or set up special contributions for a cause, our
              platform makes it simple to use music to support the social causes
              you and your clients care about.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identify;
