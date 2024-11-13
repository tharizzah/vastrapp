import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { getBarChartData } from "../data.js";

// React Chart Component
import { AgCharts } from "ag-charts-react";

const BarChart = ({ rev1, rev2, rev3, rev4 }) => {
  // Chart Options: Control & configure the chart
  const [chartOptions, setChartOptions] = useState({
    // Data: Data to be displayed in the chart
    data: getBarChartData(rev1, rev2, rev3, rev4),
    // Series: Defines which chart type and data to use
    series: [
      {
        type: "bar",
        xKey: "service", // x-axis key for music streaming services
        yKey: "revenue", // y-axis key for revenue values
        label: {
          formatter: params => `$${params.value.toLocaleString()}` // Format revenue as currency
        }
      }
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        title: {
          text: "Streaming Apps"
        },
        label: {
          rotation: 0 // Adjusts label orientation for clarity
        }
      },
      {
        type: "number",
        position: "left",
        title: {
          text: "Revenue ($)"
        }
      }
    ]
  });

  // React Chart Component
  return (
    // AgCharts component with options passed as prop
    <div style={{ width: "100%" }}>
      <h3 className="heading-3" style={{ textAlign: "center" }}>
        Potential Artist Revenue
      </h3>
      <AgCharts options={chartOptions} />
    </div>
  );
};

export default BarChart;
