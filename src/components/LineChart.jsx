// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { data, options } from "./LineChartData";

// Register required components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
