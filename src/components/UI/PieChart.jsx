import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const budgetData = [
  { category: "Entertainment", maximum: 50.0, theme: "#277C78" },
  { category: "Bills", maximum: 750.0, theme: "#82C9D7" },
  { category: "Dining Out", maximum: 75.0, theme: "#F2CDAC" },
  { category: "Personal Care", maximum: 100.0, theme: "#626070" },
];

const data = {
  labels: budgetData.map((item) => item.category),
  datasets: [
    {
      label: "Budget Allocation",
      data: budgetData.map((item) => item.maximum),
      backgroundColor: budgetData.map((item) => item.theme),
      hoverOffset: 8,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true, // Allow container to control height
  resizeDelay: 0,
  cutout: '60%',
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Budget Breakdown",
    },
  },
};

const PieChart = () => {
  return (
    <div className="w-full max-w-full mx-auto relative">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieChart;
