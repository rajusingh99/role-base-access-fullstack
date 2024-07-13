import { Grid, Typography } from '@mui/material'
import React from 'react'
import CardHeader from './CardHeader'

const CustomBudget = () => {
  return (
    <Grid item xs={12} lg={4} className='cursor-pointer border' sx={{borderRadius:'10px'}}>
        <CardHeader title={"Top 10 Risks Scenarios"}/>
        

    </Grid>
  )
}

export default CustomBudget
