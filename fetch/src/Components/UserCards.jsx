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

import CoffeeIcon from "@mui/icons-material/Coffee";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { ListItem } from "@mui/material";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function UserCards({
  Name,
  Age,
  LastSeen,
  ProfilePicture,
  Activities,
  Id,
}) {
  // const [expanded, setExpanded] = React.useState(false);
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <ListItem>
      <Card sx={{ maxWidth: 350 }}>
        {/* <box
          display="inline-block"
          gridTemplateColumns="repeat(auto-fill.50px)"
          gap={2}
          sx={{ justifyContent: "space-between" }}
        > */}
        <CardHeader title={Name} subheader={`Last seen: ${LastSeen}`} />
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
            <Chip
              icon={<CoffeeIcon />}
              sx={{ m: 0.5 }}
              size="small"
              label="Coffee"
            />
            <Chip
              icon={<SportsBarIcon />}
              sx={{ m: 0.5 }}
              size="small"
              label="Beers"
              padding={10}
            />
            <Chip
              icon={<FitnessCenterIcon />}
              sx={{ m: 0.5 }}
              size="small"
              label="Workout"
            />
            <Chip
              icon={<AccountBalanceIcon />}
              sx={{ m: 0.5 }}
              size="small"
              label="Attraction"
            />
            <Chip
              icon={<DinnerDiningIcon />}
              sx={{ m: 0.5 }}
              size="small"
              label="Eating out"
            />
            <Chip
              icon={<StorefrontIcon />}
              sx={{ m: 0.5 }}
              size="small"
              label="Market"
            />
            <Chip
              icon={<ThumbUpIcon />}
              sx={{ m: 0.5 }}
              size="small"
              label="Anything"
            />
          </Box>
        </CardContent>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <CardActions disableSpacing>
            <Button variant="outlined" align="center">
              Get To Know Me
            </Button>
          </CardActions>
        </Box>
      </Card>
    </ListItem>
  );
}
