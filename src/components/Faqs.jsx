import React from "react";
import arrow from "../assets/icon-down-arrow.png";
import ios1 from "../assets/iOS_TuneGevity.png";
import ios2 from "../assets/iOS_TuneGevity_2.png";

const Faqs = () => {
  return (
    <section id="faqs" className="section top">
      <div
        data-w-id="b6430c66-5a74-72b6-3b08-7113c0119734"
        style={{ opacity: 0 }}
        className="w-layout-blockcontainer container w-container"
      >
        <div id="keyfeatures" className="center">
          <h1 className="heading">Your FAQs Answered</h1>
        </div>
        <div className="spacer5p"></div>
        <div
          data-w-id="b6430c66-5a74-72b6-3b08-7113c0119739"
          className="flex-left"
        >
          <div className="space-between row">
            <img
              src={arrow}
              loading="lazy"
              width="38"
              alt=""
              className="icon"
            />
            <div className="spacer10"></div>
            <p>What is music licensing for pay-per-stream licensing?</p>
          </div>
          <div className="spacer20"></div>
          <div className="p-answers">
            <p>
              Music licensing is the process of obtaining legal permission to
              use music in various forms such as films, commercials, streaming
              services, or live events. A music license ensures that artists,
              publishers, and other rights holders are compensated for the use
              of their music. VASTR simplifies this process by allowing labels
              and asset holders to easily create licenses that align with their
              terms.
            </p>
          </div>
        </div>
        <div
          data-w-id="b6430c66-5a74-72b6-3b08-7113c0119743"
          className="flex-left"
        >
          <div className="space-between row">
            <img
              src={arrow}
              loading="lazy"
              width="38"
              alt=""
              className="icon"
            />
            <div className="spacer10"></div>
            <p>How does music get licensed with VASTR?</p>
          </div>
          <div className="spacer20"></div>
          <div className="p-answers">
            <p>
              VASTR partners with established music industry entities that have
              a proven track record. To qualify for our platform, you must be a
              registered business entity (such as a record label, publishing
              company, or licensed music Marketplace) with documented sales
              history. Once qualified, you'll have access to our comprehensive
              licensing tools where you can create digital licenses, set
              streaming rates, and manage royalty distributions. Our automated
              system handles complex payout structures, ensuring all rights
              holders—from artists to publishers—receive their share of earnings
              in real-time.
            </p>
          </div>
        </div>
        <div
          data-w-id="b6430c66-5a74-72b6-3b08-7113c011974d"
          className="flex-left"
        >
          <div className="space-between row">
            <img
              src={arrow}
              loading="lazy"
              width="38"
              alt=""
              className="icon"
            />
            <div className="spacer10"></div>
            <p>What is the VASTR distribution network?</p>
          </div>
          <div className="spacer20"></div>
          <div className="p-answers">
            <p>
              VASTR's distribution network is a music streaming platform where
              artists can distribute and monetize their music directly to
              listeners. Our network is designed to give artists more control
              over their content and earnings. The key difference is in our
              custom pricing feature. Artists who distribute exclusively through
              VASTR can set their own per-stream rates, rather than being locked
              into a subscription competitive rate of $0.02 per stream.
            </p>
          </div>
        </div>
        <div
          data-w-id="b6430c66-5a74-72b6-3b08-7113c0119757"
          className="flex-left"
        >
          <div className="space-between row">
            <img
              src={arrow}
              loading="lazy"
              width="38"
              alt=""
              className="icon"
            />
            <div className="spacer10"></div>
            <p>
              What is the payout structure for music licensed through VASTR?
            </p>
          </div>
          <div className="spacer20"></div>
          <div className="p-answers">
            <p>
              VASTR allows artists and labels to control pricing per stream for
              exclusive licenses, and a flat price of $0.02 for non-exclusive
              licenses. The platform takes a fee from each transaction before
              Marketplace fees, with 10% going to VASTR and 10% going to the
              digital store that sold it (such as VASTR's Deamle). The
              Marketplace fee then comes out (see pie charts and calculator
              above) with the copyright owners receiving the balance.
            </p>
          </div>
        </div>
        <div
          data-w-id="b6430c66-5a74-72b6-3b08-7113c0119761"
          className="flex-left"
        >
          <div className="space-between row">
            <img
              src={arrow}
              loading="lazy"
              width="38"
              alt=""
              className="icon"
            />
            <div className="spacer10"></div>
            <p>How does VASTR protect licensed music from piracy?</p>
          </div>
          <div className="spacer20"></div>
          <div className="p-answers">
            <p>
              VASTR uses industry proven DRM technologies in addition to
              proprietary technology to protect licensed music from piracy and
              unauthorized use. The platform enables asset holders to control
              access to their music, enforce copyright protections, and take
              immediate action against violators, such as banning users found to
              be uploading or using unlicensed content.
            </p>
          </div>
        </div>
        <div
          data-w-id="60c5a06a-2a37-0a58-2f41-8b1523bb0f10"
          className="flex-left"
        >
          <div className="space-between row">
            <img
              src={arrow}
              loading="lazy"
              width="38"
              alt=""
              className="icon"
            />
            <div className="spacer10"></div>
            <p>
              How does VASTR handle payment security and blockchain integration?
            </p>
          </div>
          <div className="spacer20"></div>
          <div className="p-answers">
            <p>
              Our infrastructure uses a proprietary cryptographically signed
              system to manage payments and balances, ensuring enterprise-grade
              security for your platform's transactions. While we don't connect
              directly to blockchain networks, your platform's users can make
              crypto payments through our Stripe integration.
            </p>
          </div>
        </div>
        <div
          data-w-id="4c8ef949-be1c-b16e-3b1a-8a751c5b8ff2"
          className="flex-left"
        >
          <div className="space-between row">
            <img
              src={arrow}
              loading="lazy"
              width="38"
              alt=""
              className="icon"
            />
            <div className="spacer10"></div>
            <p>How can I offer exclusive licensed music to my fans?</p>
          </div>
          <div className="spacer20"></div>
          <div className="p-answers">
            <p>
              VASTR is platform agnostic, while being open to digital music
              aggregators. With Deamle—our consumer app—you can create gated
              access to exclusive content. This allows you to offer special
              artist experiences while controlling how music is distributed and
              priced. From pre-releases to exclusive tracks, you’re in full
              control of getting your clients’ music into the hands of their
              fanbase.
            </p>
            <div className="card-rows">
              <img
                src={ios1}
                loading="lazy"
                sizes="100vw"
                //srcset="../assets/iOS_TuneGevity-p-500.png 500w, ../assets/iOS_TuneGevity-p-800.png 800w, ../assets/iOS_TuneGevity-p-1080.png 1080w, ../assets/iOS_TuneGevity.png 1432w"
                alt=""
                className="image"
              />
              <img
                src={ios2}
                loading="lazy"
                sizes="100vw"
                //srcset="../assets/iOS_TuneGevity_2-p-500.png 500w, ../assets/iOS_TuneGevity_2-p-800.png 800w, ../assets/iOS_TuneGevity_2-p-1080.png 1080w, ../assets/iOS_TuneGevity_2.png 1432w"
                alt=""
                className="image"
              />
            </div>
          </div>
        </div>

        <div
          data-w-id="96a06a8b-ff0e-8c6f-abe3-9bef44a7af8e"
          className="flex-left"
        >
          <div className="space-between row">
            <img
              src={arrow}
              loading="lazy"
              width="38"
              alt=""
              className="icon"
            />
            <div className="spacer10"></div>
            <p>How much are Marketplace fees, and what are they?</p>
          </div>
          <div className="spacer20"></div>
          <div className="p-answers">
            <p>
              Marketplace fees are outside of VASTR’s control. They represent
              what companies like Apple and Google charge for sales through apps
              originating in their Marketplaces. Apple charges 30%, Google
              charges 3%, and all website sales will have no Marketplace fee
              (0%).{" "}
            </p>
          </div>
        </div>
        <div
          data-w-id="9c698a92-4450-cb4b-deb3-0e481a3af1b7"
          className="flex-left"
        >
          <div className="space-between row">
            <img
              src={arrow}
              loading="lazy"
              width="38"
              alt=""
              className="icon"
            />
            <div className="spacer10"></div>
            <p>How does VASTR work for fans? </p>
          </div>
          <div className="spacer20"></div>
          <div className="p-answers">
            <p>
              Songs and artwork are uploaded to VASTR servers along with
              metadata and split info. Licenses for single use are then created
              and distributed to approved applications like Deamle. Fans may log
              into any approved app and fund their accounts. Account balances
              are available to consumers in all of the approved apps, i.e.
              funding in one app still provides tokens in the other.{" "}
            </p>
          </div>
        </div>
        <div
          data-w-id="ca232112-93d1-8c8d-1d64-0babbec5f5ba"
          className="flex-left"
        >
          <div className="space-between row">
            <img
              src={arrow}
              loading="lazy"
              width="38"
              alt="Songs and artwork are uploaded to VASTR"
              className="icon"
            />
            <div className="spacer10"></div>
            <p>When are digital stores paid? </p>
          </div>
          <div className="spacer20"></div>
          <div className="p-answers">
            <p>
              Digital stores receive their share at the time of sale of a
              license (when a fan listens).{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
