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
import { PersonPlus } from "react-bootstrap-icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Daily Total Meal Booked",
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

  const data = {
    labels: props.labels,
    datasets: [
      {
        label: "Lunch",
        data: props.data
          .filter((itemRow) => itemRow.Time === "Lunch")
          .map((item) => item.Meals),
        backgroundColor: "#097969",
      },
      {
        label: "Evening Snacks",
        data: props.data
          .filter((itemRow) => itemRow.Time === "ES")
          .map((item) => item.Meals),
        backgroundColor: "#0064FF",
      },
    ],
  };

  console.log(data);
  return <Bar options={options} data={data} />;
};

export default BarChart;
