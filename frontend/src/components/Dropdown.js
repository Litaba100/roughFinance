import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './datepicker.css'


export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className='dropdown'>
      <InputLabel id="demo-select-small">Period</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Period"
        onChange={handleChange}
      >
        <MenuItem value={10}>Current Month</MenuItem>
        <MenuItem value={20}>Last Month</MenuItem>
        <MenuItem value={30}>Last Year</MenuItem>
      </Select>
    </FormControl>
  );
}