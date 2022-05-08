
import React from "react";
import { Box } from "@mui/system";
import Calender from "../Components/Calender";
import { Typography } from "@mui/material";
import SelectChips from "../Components/SelectChips";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function Add() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);}


  return(
    <Box>
      <Typography
        display={'flex'}
        paddingTop={'8vh'}
        alignItems={'center'}
        justifyContent={'center'}
        textAlign={'center'}
        fontSize={20}>Dates To Be Fetched
        </Typography>

      <Box 
        display={'flex'}
        paddingTop={'3vh'}
        alignItems={'center'}
        justifyContent={'center'}>

        <Calender
        ArrivingOrLeaving={"Arrival Date"}/>
        <Calender ArrivingOrLeaving={"Departue Date"}/>

      </Box>

      <Typography
        display={'flex'}
        paddingTop={'1vh'}
        alignItems={'center'}
        justifyContent={'center'}
        textAlign={'center'}
        fontSize={15}>Please try to give more than one day to increase your chances to be Fetched
        </Typography>



        <Typography
        display={'flex'}
        paddingTop={'4vh'}
        alignItems={'center'}
        justifyContent={'center'}
        textAlign={'center'}
        fontSize={20}>What are you up to do?
        </Typography>

        <SelectChips/>

        <Typography
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        textAlign={'center'}
        fontSize={14}>choose as many as you like
        </Typography>



        <Typography
        display={'flex'}
        paddingTop={'4vh'}
        alignItems={'center'}
        justifyContent={'center'}
        textAlign={'center'}
        fontSize={20}>Write About Your Fetching Self
        </Typography>


        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          component="form"
          sx={{
            '& .MuiTextField-root': { width: 275 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-textarea"
            label="About You"
            placeholder="About You"
            maxRows={5}
            multiline
            variant="standard"
          />
          
        </Box>


        <Box paddingTop={'2vh'} style={{alignItems: 'center',display: 'flex',  justifyContent:'center'}}>
            
              <Button variant="contained" onClick={handleClickOpen}>
                Suggest To Be Fetched
              </Button>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"You are Up for a Meeting!"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    We made your suggestion for a fetching event! 
                    Make sure to check your chat so you won't miss out a fetching opportunity!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                 
                  <Button onClick={event =>  window.location.href='/Browse'}>Continue To Browse</Button>
                </DialogActions>
              </Dialog>
            
        </Box>




    </Box>
    

  )
}

export default Add;
