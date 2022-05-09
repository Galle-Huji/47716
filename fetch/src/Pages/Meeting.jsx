import React from 'react'
// import MyMap from '../Components/Map'
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import TimeDatePick from '../Components/TimeDatePick';
import SelectChips from '../Components/SelectChips';
import { Button } from '@mui/material';
import { Dialog } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import CardMedia from "@mui/material/CardMedia";




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


export default function Meeting() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  



    return(
        <Box>
                
            <Typography
                display={'flex'}
                paddingTop={'5vh'}
                alignItems={'center'}
                justifyContent={'center'}
                textAlign={'center'}
                fontSize={18}>click on the location of the meeting:
            </Typography>

            <Box paddingTop="1vh" display="flex" flexDirection="column" >
                {/* <MyMap /> */}
                <CardMedia
                component="img"
                height="200"
                 image={'.\\thestupidmap.jpg'}></CardMedia>
            </Box>

            <Typography
                display={'flex'}
                paddingTop={'3vh'}
                alignItems={'center'}
                justifyContent={'center'}
                textAlign={'center'}
                fontSize={18}>When are you meet?
            </Typography>

            <Box   paddingLeft={'1vh'} style={{alignItems: 'center',display: 'flex',  justifyContent:'center'}}>
                <TimeDatePick />
            </Box>


            <Typography
                display={'flex'}
                paddingTop={'3vh'}
                alignItems={'center'}
                justifyContent={'center'}
                textAlign={'center'}
                fontSize={18}>What are you doing?
            </Typography>
              


            <Box  style={{alignItems: 'center',display: 'flex',  justifyContent:'center'}}>
                <SelectChips />
            </Box>

            <Box paddingTop={'3vh'} style={{alignItems: 'center',display: 'flex',  justifyContent:'center'}}>
            
            <Button variant="contained" onClick={handleClickOpen}>
              Scedule Your Event!
            </Button>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >

              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                <Typography
                display={'flex'}
                paddingTop={'1vh'}
                alignItems={'left'}
                justifyContent={'left'}
                textAlign={'left'}
                variant="h5">
                That's so Fetch!!!
                
            </Typography>
                <Typography
                display={'flex'}
                paddingTop={'1vh'}
                alignItems={'left'}
                justifyContent={'left'}
                textAlign={'left'}
                fontSize={18}>
                You're going to enjoy coffee together, awesome!               
            </Typography>
            <Typography
                display={'flex'}
                paddingTop={'1vh'}
                alignItems={'left'}
                justifyContent={'left'}
                textAlign={'left'}
                fontSize={18}>   
                <br/>         
                feel free to keep chatting.
            </Typography>

                </DialogContentText>
              </DialogContent>
              <DialogActions>
               
                <Button onClick={event =>  window.location.href='/Chat'}>Go Back To Chat</Button>
              </DialogActions>
            </Dialog>
          
        </Box>



      </Box>
    )

};
