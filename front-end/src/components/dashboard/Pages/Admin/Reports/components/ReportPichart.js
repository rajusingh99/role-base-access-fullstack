import { Grid } from '@mui/material'
import React from 'react'
import  {PieChart}  from '@mui/x-charts/PieChart';
import CardHeader from './CardHeader';

const ReportPiChart = () => {
    const data = [
        { id: 0, value: 10, label: 'Rare' },
        { id: 1, value: 15, label: 'Periodic' },
        { id: 2, value:  7, label: 'Frequent' },
        { id: 3, value: 14, label: 'Often' },
        { id: 4, value: 16, label: 'Always' },
      ];
      
  return (
    <Grid item xs={12} lg={4} className='cursor-pointer border' sx={{borderRadius:'10px'}}>
        <CardHeader title={"Recent Roles Created"}/>
        <PieChart
        series={[
            {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
        ]}
        height={200}
        />
    </Grid>
  )
}

export default ReportPiChart
