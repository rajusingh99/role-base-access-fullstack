
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Bar } from "react-chartjs-2";
import { CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Chart } from "chart.js";
import CardHeader from './CardHeader';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReportBarChart = () => {
  const labels = ["Dec", "Nov", "Oct", "Sep", "Aug", "July"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Users",
        data: [4600, 4200, 3700, 3200, 3000, 2500, 1400],
        backgroundColor: "#F8836D",
      },
    ],
  };

  return (
    <Grid item xs={12} lg={4} className='cursor-pointer border' sx={{ borderRadius: '10px' }}>
      <CardHeader title={"All Registered Users"} />
      <Bar data={data} />
      <Typography className='flex items-center justify-center opacity-50 pb-2'>Recent Months Users</Typography>
    </Grid>
  );
};

export default ReportBarChart;
