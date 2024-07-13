import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import {
  ExpenseCategory,
  IncomeCategory,
  Transaction,
  TransactionType,
} from "../../types";

ChartJS.register(ArcElement, Tooltip, Legend);

interface CategoryChartProps {
  monthlyTransactions: Transaction[];
}

const CategoryChart = ({ monthlyTransactions }: CategoryChartProps) => {
  const [selectedType, setSelectedType] = useState<TransactionType>("expense");

  const handleChange = (e: SelectChangeEvent<TransactionType>) => {
    setSelectedType(e.target.value as TransactionType);
  };

  const categorySums = monthlyTransactions
    .filter((transaction) => transaction.type === selectedType)
    .reduce<Record<IncomeCategory | ExpenseCategory, number>>(
      (acc, transaction) => {
        if (!acc[transaction.category]) {
          acc[transaction.category] = 0;
        }
        acc[transaction.category] += transaction.amount;
        return acc;
      },
      {} as Record<IncomeCategory | ExpenseCategory, number>
    );
  console.log(categorySums);
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

  return (
    <Box>
      {/* <TextField
        label="収支の種類"
        select
        fullWidth
        value={selectedType}
        onChange={handleChange}
      > */}

      <FormControl fullWidth>
        <InputLabel id="type-select-label">収支の種類</InputLabel>
        <Select
          labelId="type-select-label"
          id="type-select"
          value={selectedType}
          label="収支の種類"
          onChange={handleChange}
        >
          <MenuItem value={"income"}>収入</MenuItem>
          <MenuItem value={"expense"}>支出</MenuItem>
        </Select>
      </FormControl>
      <Pie data={data} />
    </Box>
  );
};

export default CategoryChart;
