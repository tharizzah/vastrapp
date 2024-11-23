import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import { getWebsiteData } from "../data.js";

const PieChart_w = () => {
  const [options, setOptions] = useState({
    data: getWebsiteData(),
    title: {
      text: ""
    },
    legend: {
      position: "bottom"
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        calloutLabelKey: "asset",
        sectorLabelKey: "amount",
        sectorLabel: {
          color: "white",
          fontWeight: "bold",
          formatter: ({ value }) => `${(params.value * 100).toFixed(2)}%`
        }
      }
    ]
  });

  return (
    <div className="">
      <h3 className="heading-3" style={{ textAlign: "center" }}>
        Website (no fee)
      </h3>
      <div>
        <AgCharts options={options} className="chart" />
      </div>
    </div>
  );
};

export default PieChart_w;
