import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryChart = () => {
  const data = {
    labels: ["Windows", "Mac", "Linux"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#4169e1", "#ff1493", "#FFCE56"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        borderColor: ["transparent", "transparent", "transparent"],
      },
    ],
  };

  return <Pie data={data} />;
};

export default CategoryChart;
