import React from "react";

const FaqHero = () => {
  return (
    <section id="faqs" className="hero-faq">
      <div
        data-w-id="bc5235f1-57b2-5979-a8f0-1398bec7d6b0"
        style={{ opacity: 0 }}
        className="w-layout-blockcontainer container w-container"
      >
        <div id="keyfeatures" className="center">
          <h1 className="heading center">
            FAQs About Music
            <br />
            Licensing and Royalties
          </h1>
        </div>
        <div className="space-between vh">
          <div className="div-grow">
            <h2 className="heading-5">What is music licensing?</h2>
            <p>
              Music licensing is the process of obtaining legal permission to
              use music in various forms such as films, commercials, streaming
              services, or live events. A music license ensures that artists,
              publishers, and other rights holders are compensated for the use
              of their music. DML.solutions simplifies this process by allowing
              labels and asset holders to easily create licenses that align with
              their terms.
            </p>
            <div className="btn-container">
              <a href="#faq" className="button rev w-inline-block">
                <div>Learn More</div>
              </a>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="fifty"></div>
        </div>
      </div>
    </section>
  );
};

export default FaqHero;
