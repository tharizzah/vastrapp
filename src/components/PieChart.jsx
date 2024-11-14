import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import { getAppleData } from "../data.js";

const PieChart = () => {
  const [options, setOptions] = useState({
    data: getAppleData(),
    theme: "ag-material-dark",
    title: {
      text: ""
    },
    legend: {
      position: "left"
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
      <h3 className="heading-3" style={{ textAlign: "center" }}>
        Apple Marketplace
      </h3>
      <AgCharts
        options={options}
        className="chart"
        style={{ width: "800px", height: "400px" }}
      />
    </div>
  );
};

export default PieChart;
