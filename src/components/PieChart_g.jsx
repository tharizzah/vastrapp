import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import { getGoogleData } from "../data.js";

const PieChartG = () => {
  const [options, setOptions] = useState({
    data: getGoogleData(),
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
        Google Marketplace
      </h3>
      <AgCharts options={options} className="chart" />
    </div>
  );
};

export default PieChartG;
