import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import CoffeeIcon from "@mui/icons-material/Coffee";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PropTypes from "prop-types";
import ProfileCard from "./ProfileCard";
import { ListItem } from "@mui/material";
import ActivityChip from "./ActivityChip";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <ProfileCard />
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function UserCards({
  Name,
  Age,
  LastSeen,
  ProfilePicture,
  Activities,
  Id,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <ListItem>
      <Card
        sx={{
          maxWidth: 350,
          margin: 0.5,
          width: 0.999,
          // border: 1,
          p: 1,
          display: "block",
        }}
      >
        {/* <box
          display="inline-block"
          gridTemplateColumns="repeat(auto-fill.50px)"
          gap={2}
          sx={{ justifyContent: "space-between" }}
        > */}
        <CardHeader title={Name} subheader={`Last seen: ${LastSeen}`} />
        {/* <Card sx={{ maxWidth: 350 }}>
      <box
        display="inline-block"
        gridTemplateColumns="repeat(auto-fill.50px)"
        gap={2}
        sx={{ justifyContent: "space-between" }}
      >
        <CardHeader title="Erez Segev" subheader="September 14, 2016" /> */}
        <Typography
          mr={3}
          sx={{
            marginTop: -8.5,
            float: "right",
            fontSize: "1.2rem",
            fontWeight: "medium",
          }}
        >
          {Age}
        </Typography>
        {/* </box> */}
        <CardMedia
          component="img"
          height="194"
          image={ProfilePicture}
          alt={Name}
        />
        <CardContent style={{ padding: 7 }}>
          <Typography sx={{ m: 0.5 }} variant="body2" color="text.secondary">
            Fetch me for:
          </Typography>
          <Box
            sx={{
              margin: 0.5,
              width: 0.999,
              //  border: 1,
              p: 1,
              display: "block",
            }}
          >
            {Activities.map((activity) => (
              <ActivityChip activity={activity} />
            ))}
          </Box>
        </CardContent>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <CardActions disableSpacing>
            <Button align="center" onClick={handleClickOpen}>
              Get To Know Me
            </Button>
          </CardActions>
          <SimpleDialog open={open} onClose={handleClose} />
        </Box>
      </Card>
    </ListItem>
  );
}
