import { React, useState } from "react";
import PieChart from "./PieChart";
import PieChartG from "./PieChart_g";
import PieChartW from "./PieChart_w";
import { SelectField } from "@aws-amplify/ui-react";

const PieChartSelector = () => {
  const [value, setValue] = useState("web");

  return (
    <section id="keyfeatures" className="section pb">
      <div className="w-layout-blockcontainer container w-container">
        <h1 className="heading center">Split Selector</h1>
        <div className="card-rows">
          <div
            data-w-id="4ce1a558-00d1-b404-ba6e-55e4331257eb"
            style={{ opacity: 0 }}
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
            className="cards"
          >
            <SelectField
              label="Select Marketplace"
              labelHidden
              //placeholder="Web based sales (no marketplace fee)"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="web">Web based Sales (no fee)</option>
              <option value="google">Google (Android)</option>
              <option value="apple">Apple (iOS)</option>
            </SelectField>
            {/* <div className="card-title">Select Marketplace</div> */}
            <div className="spacer"></div>
            <p className="paragraph-3">
              Some hardware platforms that a consumer may use to purchase
              licenses carry a marketplace fee. Pie charts represent
              revenue split from playbacks originating from specific marketplaces:
            </p>
            <div style={{ paddingTop: "5%" }}></div>
            <p className="paragraph-3">
              Web - No Fee
            </p>
            <p className="paragraph-3">
              Google - 3% Marketplace Fee
            </p>
            <p className="paragraph-3">
              Apple - 30% Marketplace Fee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PieChartSelector;
