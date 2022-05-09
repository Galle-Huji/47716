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

function ProfileCard({ userId }) {
  const [userData, setUsersData] = useState([]);
  const [profilePictures, setProfilePictures] = useState([]);
  useEffect(() => {
    getProfilePictures();
    getUserData();
  }, []);

  const getUserData = async () => {
    const response = await fetch(`./FakeData/UsersData.json`);
    const data = await response.json();
    console.log(data);
    const users = data.Users;
    console.log(users);

    for (var i in users) {
      // console.log(users[i]);
      if (users[i].UserId == userId) {
        // console.log(`found user ${userId}`);
        // console.log(users[i]);
        setUsersData(users[i]);
      }
    }
  };

  const getProfilePictures = async () => {
    console.log("getting profile pictures");
    const response = await fetch(`./FakeData/ProfilePictures.json`);
    const data = await response.json();
    setProfilePictures(data.ProfilePictures);
  };

  let hobbies = [];
  for (let i in userData.Hobbies) {
    console.log(userData.Hobbies[i]);
    hobbies.push(userData.Hobbies[i]);
  }

  let history = [];
  for (let i in userData.History) {
    history.push(userData.History[i]);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Splide
        aria-label="ProfilePictures"
        options={{
          rewind: true,
        }}
      >
        {profilePictures.map((pic) => (
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
              {userData.UserName}
            </Typography>
          </SplideSlide>
        ))}
      </Splide>
      <CardContent style={{ padding: 7 }}>
        <Typography color="text.secondary">
          <h4>About me:</h4>
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {userData.Bio}
        </Typography>
        <Typography color="text.secondary">
          <br />
          <h4>Hobbies:</h4>
        </Typography>
        <Box
        // sx={{
        //   width: 0.999,
        //   display: "block",
        //   border: 0.5,
        // }}
        >
          {hobbies.map((hobby) => (
            <Chip label={hobby} size="small" sx={{ m: 0.5 }} />
          ))}
          <Typography color="text.secondary">
            <br />
            <h4>Fetches made happen:</h4>
          </Typography>
          <Box>
            <List dense={true}>
              {history.map((item) => (
                <ListItem
                  disablePadding
                  sx={{
                    textAlign: "left",
                  }}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography color="text.secondary" variant="body2">
                        {item}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
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
