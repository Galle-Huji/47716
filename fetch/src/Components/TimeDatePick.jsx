

import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

  


export default function TimeDatePick() {
  const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));

return (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateTimePicker
        label = "When do you meet?"
        
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField sx={{ m: 1, width: 275 }} {...params} />}
      />
  </LocalizationProvider>
);
}
