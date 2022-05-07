import React from "react";
import Chip from "@mui/material/Chip";
import CoffeeIcon from "@mui/icons-material/Coffee";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

let iconDict = {
  Coffee: <CoffeeIcon />,
  Beers: <SportsBarIcon />,
  Workout: <FitnessCenterIcon />,
  Attraction: <AccountBalanceIcon />,
  Eating: <DinnerDiningIcon />,
  Market: <StorefrontIcon />,
  Anything: <ThumbUpIcon />,
};

function ActivityChip({ activity }) {
  return (
    <Chip
      icon={iconDict[activity]}
      // icon={<ThumbUpIcon />}
      sx={{ m: 0.5 }}
      size="small"
      label={activity}
    />
  );
}

export default ActivityChip;
