import { Grid, Typography } from '@mui/material'
import React from 'react'

const NotFound = ({text}) => {
  return (
    <Grid item xs={12} m={20}>
       {text !=="About" && <Typography variant='h3'>Oops No {text} Found!</Typography>}
       {text ==="About" && <Typography variant='h3'>We Are Under Maintenance!</Typography>}
    </Grid>
  )
}

export default NotFound
