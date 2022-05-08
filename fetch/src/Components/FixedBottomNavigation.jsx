import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Forum from "@mui/icons-material/Forum";
import ControlPoint from "@mui/icons-material/ControlPoint";
import Groups from "@mui/icons-material/Groups";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(1);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Add"
            icon={<ControlPoint />}
            component={Link}
            to="/add"
          />
          <BottomNavigationAction
            label="Browse"
            icon={<Groups />}
            component={Link}
            to="/Browse"
          />{" "}
          <BottomNavigationAction
            label="Chats"
            icon={<Forum />}
            component={Link}
            to="/chats"
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
{
  /* <BottomNavigation value={value} onChange={this.handleChange}>
    <BottomNavigationAction
        component={Link}
        to="/signal"
        label="signal"
        value="signal"
        icon={<ShowChart />}
        className={classes.content}
    /> */
}
