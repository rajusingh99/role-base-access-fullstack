

import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import CardHeader from './CardHeader';

const SummaryInput = () => {
  return (
    <Box className='cursor-pointer' sx={{ borderRadius: '10px',width: "100%" }}>
      <CardHeader title={"Summary"} />
      
    </Box>
  );
};

export default SummaryInput;
