import React from "react";
import atsymbol from "../assets/art-lotus_atsymbol.png";

const Licensing = () => {
  return (
    <div
      data-w-id="25d7b613-c891-3dec-69ac-b360188a5f48"
      style={{ opacity: 0 }}
      className="w-layout-blockcontainer container w-container"
    >
      <div className="center col">
        <img
          className="image"
          src={atsymbol}
          alt="VASTR Pay-Per-Stream"
          style={{ opacity: 0 }}
          sizes="(max-width: 767px) 90vw, 450px"
          data-w-id="927a63f6-5fb4-ab4d-f00c-78808c88510a"
          loading="lazy"
          //srcset="../assets/art-lotus_atsymbol-p-500.png 500w, ../assets/art-lotus_atsymbol-p-800.png 800w, ../assets/art-lotus_atsymbol.png 890w"
        />
        <h2>Your Pay-Per-Stream Solutions Partner</h2>
        <p>
          VASTR integrates easily with your existing accounting systems, making
          it easier for music labels and artists to manage complex royalty
          payments. Whether you're releasing a single or managing an entire
          catalog, our platform provides the flexibility, speed, and control you
          need.
        </p>
      </div>
      <div className="space-between stretch">
        <div>
          <div className="spacer"></div>
          <div className="space-between"></div>
        </div>
        <div className="spacer"></div>
        <div></div>
      </div>
    </div>
  );
};

export default Licensing;
