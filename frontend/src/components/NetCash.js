import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import './netcash.css'


export default function NetCash({detail}) {
  return (
    <React.Fragment>
      <div className='titlebox'>
        <Title>{detail.title}</Title>
      </div>
      <Typography component="p" variant="h4" noWrap >
        K{detail.amount}
      </Typography>
    </React.Fragment>
  );
}