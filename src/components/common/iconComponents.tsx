import React from "react";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddHomeIcon from "@mui/icons-material/AddHome";
import FastFoodIcon from "@mui/icons-material/Fastfood";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import TrainIcon from "@mui/icons-material/Train";
import WorkIconIcon from "@mui/icons-material/Work";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import SavingsIcon from "@mui/icons-material/Savings";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import { ExpenseCategory, IncomeCategory } from "../../types";

const iconComponents: Record<IncomeCategory | ExpenseCategory, JSX.Element> = {
  食費: <FastFoodIcon fontSize="small" />,
  日用品: <AlarmIcon fontSize="small" />,
  住居費: <AddHomeIcon fontSize="small" />,
  交際費: <Diversity3Icon fontSize="small" />,
  交通費: <TrainIcon fontSize="small" />,
  給与: <WorkIconIcon fontSize="small" />,
  副収入: <AddBusinessIcon fontSize="small" />,
  銀行振込: <HouseSidingIcon fontSize="small" />,
  お小遣い: <SavingsIcon fontSize="small" />,
  娯楽: <SportsTennisIcon fontSize="small" />,
};

export default iconComponents;
