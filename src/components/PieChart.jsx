import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-material.css";
import { getAppleData } from "../data.js";

const PieChart = () => {
  const [options, setOptions] = useState({
    data: getAppleData(),
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
    <div className="">
      <h3 className="heading-3 whitetxt" style={{ textAlign: "center" }}>
        Apple Marketplace
      </h3>
      <div className="ag-theme-material">
        <AgCharts options={options} className="chart" />
      </div>
    </div>
  );
};

export default PieChart;
