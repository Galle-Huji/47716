import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


export default function CitySelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  

  return (
    <div>

      <Box
      style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '90vh'}}

      >
          <Grid >
        <Typography paddingBottom='30px' style={{fontSize:24, justifyContent:'center', textAlign:'center'}}>
            Choose the city of your fetching meeting:
        </Typography>

        <Box style={{alignItems: 'center',display: 'flex',  justifyContent:'center'}}>
            <FormControl style = {{minWidth: 175}}>
                <InputLabel id="demo-simple-select-autowidth-label"
                style={{fontSize: 20}}>City</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                autoWidth = {true}
                label="City"
                style={{fontSize:20}}
                >
                <MenuItem value={10}>Jerusalem</MenuItem>
                <MenuItem value={21}>Paris</MenuItem>
                <MenuItem value={22}>New York</MenuItem>
                <MenuItem value={23}>London</MenuItem>
                <MenuItem value={24}>Sydny</MenuItem>
                <MenuItem value={25}>Tokyo</MenuItem>
                </Select>
            </FormControl>
        </Box>


        <Box paddingTop={'60px'} style={{alignItems: 'center',display: 'flex',  justifyContent:'center'}}>
            <Button variant="contained" onClick={event => window.location.href='/Browse'}>continue</Button>
        </Box>
        
        </Grid>
        </Box>
    </div>

  );
}
