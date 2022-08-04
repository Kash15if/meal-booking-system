import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        grid: {
          display: false,
          // color: "rgba(217,143,7,0.1)",
        },
      },
    },
  };

  const labels = ["January", "February", "March", "April"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 14, 56, 24],
        backgroundColor: "#097969",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
