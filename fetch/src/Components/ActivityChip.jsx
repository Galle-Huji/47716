import React from "react";
import Chip from "@mui/material/Chip";

let iconDict = {
  coffee: [<CoffeeIcon />],
};

function ActivityChip({ activity }) {
  return (
    <Chip
      icon={iconDict[activity]}
      sx={{ m: 0.5 }}
      size="small"
      label="Coffee"
    />
  );
}

export default ActivityChip;
