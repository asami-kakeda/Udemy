import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Transaction } from "../../types";
import { calculateDailyBalances } from "../../utils/financeCalculations";
import { useTheme } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  monthlyTransactions: Transaction[];
}

const BarChart = ({ monthlyTransactions }: BarChartProps) => {
  const theme = useTheme();
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      //   legend: {
      //     position: "top" as const,
      //   },
      title: {
        display: true,
        text: "日別収支",
      },
    },
  };

  const dailyBalances = calculateDailyBalances(monthlyTransactions);

  const dateLabels = Object.keys(dailyBalances).sort();
  console.log(dateLabels);
  const expenseData = dateLabels.map((day) => dailyBalances[day].expense);
  const incomeData = dateLabels.map((day) => dailyBalances[day].income);

  const labels = [
    "2024-01-10",
    "2024-01-14",
    "2024-01-16",
    "2024-01-20",
    "2024-01-26",
    "2024-01-28",
    "2024-01-30",
  ];

  const data: ChartData<"bar"> = {
    labels: dateLabels,
    datasets: [
      {
        label: "支出",
        data: expenseData,
        backgroundColor: theme.palette.expenseColor.light,
      },
      {
        label: "収入",
        data: incomeData,
        backgroundColor: theme.palette.incomeColor.light,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default BarChart;
