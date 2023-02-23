import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function TotalExpenses() {
  return (
    <React.Fragment>
      <Title>Expenses</Title>
      <Typography component="p" variant="h4" noWrap >
        K3,024.00
      </Typography>
    </React.Fragment>
  );
}