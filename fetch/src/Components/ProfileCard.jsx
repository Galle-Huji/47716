import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Paper, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Chip from "@mui/material/Chip";
import CoffeeIcon from "@mui/icons-material/Coffee";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";

function ProfileCard() {
  const [ProfilePictures, setProfilePictures] = useState([]);
  useEffect(() => {
    getProfilePictures();
  }, []);

  const getProfilePictures = async () => {
    const response = await fetch(`./FakeData/ProfilePictures.json`);
    const data = await response.json();
    setProfilePictures(data.ProfilePictures);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Splide
        aria-label="ProfilePictures"
        options={{
          rewind: true,
        }}
      >
        {ProfilePictures.map((pic) => (
          <SplideSlide>
            <CardMedia
              component="img"
              alt={pic.PictureTitle}
              height="140"
              image={pic.Path}
            />
            <Typography
              variant="h5"
              sx={{
                position: "absolute",
                bottom: "10px",
                left: "20px",
                color: "White",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
              }}
            >
              The Fetch Team
            </Typography>
          </SplideSlide>
        ))}
      </Splide>
      <CardContent style={{ padding: 7 }}>
        <Typography variant="body2" color="text.secondary">
          <h3>About me:</h3>
          <h4>Can’t seem to recall where I stole this bio from or why.</h4>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <br />
          <h3>Hobbies:</h3>
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
          <Chip icon={<CoffeeIcon />} size="small" label="Coffee" />
          <Chip icon={<CoffeeIcon />} size="small" label="Coffee" />
          <Chip icon={<CoffeeIcon />} size="small" label="Coffee" />
          <Chip icon={<CoffeeIcon />} size="small" label="Coffee" />
          <Chip icon={<CoffeeIcon />} size="small" label="Coffee" />
          <Typography variant="body2" color="text.secondary">
            <br />
            <h3>Fetches made happen:</h3>
          </Typography>
          <List dense="True">
            <ListItem>
              <ListItemIcon>
                <CoffeeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" color="text.secondary">
                    <h4>Fetched coffee with Yoav</h4>
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SportsBarIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" color="text.secondary">
                    <h4>Fetched beer with Inbar</h4>
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button component={Link} to="/chat" variant="contained">
            Fetch Chat!
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
