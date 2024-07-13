import { Box, Typography } from '@mui/material'
import React from 'react'

const CardHeader = ({title}) => {
  return (
    <Box className="flex items-start p-3 w-full" sx={{borderTopRightRadius:'10px',borderTopLeftRadius:'10px', backgroundColor:'#F1F2FB'}}>
        <Typography>{title}</Typography>
  </Box>
  )
}

export default CardHeader
