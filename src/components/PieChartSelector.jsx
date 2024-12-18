import { React, useState } from "react";
import PieChart from "./PieChart";
import PieChartG from "./PieChart_g";
import PieChartW from "./PieChart_w";
import { SelectField } from "@aws-amplify/ui-react";

const PieChartSelector = () => {
  const [value, setValue] = useState("web");

  return (
    <section id="keyfeatures" className="section drk">
      <div className="w-layout-blockcontainer container w-container">
        <h1 className="heading center">Split Selector</h1>
        <div className="card-rows">
          <div
            data-w-id="4ce1a558-00d1-b404-ba6e-55e4331257eb"
            style={{ opacity: 50 }}
            className="card"
          >
            <div className="center nmb">
              {value === "apple" && <PieChart />}
              {value === "web" && <PieChartW />}
              {value === "google" && <PieChartG />}
            </div>
          </div>
          <div
            data-w-id="4ce1a558-00d1-b404-ba6e-55e4331257d9"
            style={{ opacity: 0 }}
            className="cards drk"
          >
            <SelectField
              className="drktheme"
              label="Select Marketplace"
              labelHidden
              //placeholder="Web based sales (no marketplace fee)"
              value={value}
              onChange={e => setValue(e.target.value)}
            >
              <option value="web">Computer (web) - 0%</option>
              <option value="google">Google(Android) - 3%</option>
              <option value="apple">Apple (iOS) - 30%</option>
            </SelectField>
            {/* <div className="card-title">Select Marketplace</div> */}
            <div className="spacer-20"></div>
            <p>
              Consumers use different methods to access music including
              computers, iOS devices and Android devices. iOS and Android
              originating streams carry a 'Marketplace Fee'- an override % on
              the sale of credits a consumer may use to stream a song.
            </p>
            <div style={{ paddingTop: "5%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PieChartSelector;
