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
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Stack from '@mui/material/Stack';
import { Grid } from "@mui/material";

export default function Profile() {
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
    <Box paddingTop={"3vh"}>


            <CardMedia
              component="img"
              height="200"
              image={'.\\FakeData\\avatars\\Gal.jpg'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            />




          <Stack
          paddingTop={"1vh"}
          direction = 'row'
          spacing = {1}
          >
            <ThumbUpIcon />
            <h4>5 people liked me</h4>
          </Stack>
      


          <Stack
          paddingTop={"2vh"}
          direction = 'row'
          spacing = {1}
          >
            <h4>Age: </h4>
            <p>24</p>
          </Stack>

          <Stack
          paddingTop={"1vh"}
          direction = 'row'
          spacing = {1}
          >
            <h4>From: </h4>
            <p>France</p>
          </Stack>



          <Stack
          paddingTop={"1vh"}
          spacing = {0.5}
          >
            <h4>About me:</h4>
            <p>I like to to travel and meet new people i'm so uniqe and special</p>
          </Stack>


          <Stack
          paddingTop={"1vh"}
          spacing = {1}
          >
            <h4>My Hobbies:</h4>
            <Grid container
                justifyContent="center"
                alignItems="center"
                wrap="nowrap"
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

              <Grid item xs={4}>
                <Chip icon={<CoffeeIcon />} size="small" label="Coffee" />
              </Grid>
              <Grid item xs={4}>
                <Chip icon={<CoffeeIcon />} size="small" label="Coffee" />
              </Grid>
              <Grid item xs={4}>
                <Chip icon={<CoffeeIcon />} size="small" label="Coffee" />
              </Grid>
                <Grid item xs={4}>
              <Chip icon={<CoffeeIcon />} size="small" label="Coffee" />
              </Grid>
            </Grid>
          </Stack>

          <Stack
            paddingTop={"1vh"}
            paddingBottom={"2vh"}
            spacing = {1}

          >
            <h4>Fetches made happen:</h4>

            <Stack
 
              direction= 'row'
            >
              <CoffeeIcon fontSize="small" />
              <h5>Fetched coffee with Yoav</h5>
            </Stack>

            <Stack

              direction= 'row'
            >
              <CoffeeIcon fontSize="small" />
              <h5>Fetched beer with Inbar</h5>
            </Stack>

          </Stack>



            
          <h4>My Gallery:</h4>
          <Box padding={"1vh"}>
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
              height="200"
              image={pic.Path}
            />
          </SplideSlide>
        ))}
          </Splide>
          </Box>


        </Box>

  );
}