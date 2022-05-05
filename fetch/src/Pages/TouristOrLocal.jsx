import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CssBaseline from '@mui/material/CssBaseline';
import AirplaneTicketTwoToneIcon from '@mui/icons-material/AirplaneTicketTwoTone';
import HouseTwoToneIcon from '@mui/icons-material/HouseTwoTone';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function TouristOrLocal(){
    
    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',}}
                >
                    {/* <ButtonGroup variant="text" aria-label="text button group">
                    <Button>I'm a Tourist!</Button>
                    <Button>I'm Local!</Button>
                    </ButtonGroup> */}
                    <Grid container justifyContent="center" fontSize={30}>
                        <Grid item>
                            <div>I'm a Local!</div>
                            <HouseTwoToneIcon sx={{ fontSize: 140 }} onClick={event =>  window.location.href='/Browse'} ></HouseTwoToneIcon>
                        </Grid>
                        <Grid item>
                            <div>I'm a Tourist!</div>
                            <AirplaneTicketTwoToneIcon sx={{ fontSize: 140 }} onClick={event =>  window.location.href='/Browse'}></AirplaneTicketTwoToneIcon>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    )

}