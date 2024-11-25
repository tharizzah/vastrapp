import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import { getWebsiteData } from "../data";

const PieChartW = () => {
  const [options, setOptions] = useState({
    data: getWebsiteData(),
    // theme: 'ag-material-dark',
    theme: "ag-material-dark",
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
        sectorLabelKey: "amount"
        // sectorLabel: {
        //   color: "white",
        //   fontWeight: "bold",
        //   formatter: ({ value }) => `${(params.value * 100).toFixed(2)}%`
        // }
      }
    ]
  });

  return (
    <div className="drk">
      <h3 className="heading-3" style={{ textAlign: "center" }}>
        Website (no fee)
      </h3>
      <div className="ag-theme-material">
        <AgCharts options={options} className="chart" />
      </div>
    </div>
  );
};

export default PieChartW;
