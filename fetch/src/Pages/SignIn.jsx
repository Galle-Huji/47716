<<<<<<< HEAD
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


=======
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
>>>>>>> c08b79e6afc9f64917fb6c6492280c1c90f71138
import { FacebookLoginButton } from "react-social-login-buttons";
import { InstagramLoginButton } from "react-social-login-buttons";
import styled, { css } from "styled-components";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Fetch
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  const Wrapper = styled.div`
    @media only screen and (max-width: 399px) {
      width: 10%;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            marginBottom: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <img src="./logo.png" alt="" width="250" height="auto" />
          {/* <Typography variant="h3" mb={3} fontSize>
            Sign in
          </Typography> */}
          <Box sx={{ mt: 1 }}>
            <Typography variant="h4" align="center" mb={1}>
              We care about you!
            </Typography>
            <Typography fontSize={14} align="center" mb={1}>
              Safety is first, so please log in with a social media acount.
              Don't worry, you don't have to share your social media info with
              users.
            </Typography>
            <Grid container>
              <Grid item xs>
                <Box mb={2}>
                  <FacebookLoginButton
                    align="center"
                    onClick={() => alert("Hello")}
                  >
                    <span>Sign in with Facebook</span>
                  </FacebookLoginButton>
                </Box>

                <InstagramLoginButton
                  align="center"
                  onClick={() => alert("Hello")}
                >
                  <span>Sign in with Instagram</span>
                </InstagramLoginButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <FormControlLabel
          mt={3}
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
