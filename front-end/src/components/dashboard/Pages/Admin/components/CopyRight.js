
import React from 'react';
import { Box, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

const CopyRight = () => {
  return (
    <Box className="pt-1">
      <Typography variant='p' sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
        Copyright <CopyrightIcon sx={{ mx: 0.5 }} /> Coderootz Digital 2024.
      </Typography>
    </Box>
  );
}

export default CopyRight;
