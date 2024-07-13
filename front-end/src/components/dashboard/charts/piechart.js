import React from "react";
import { Pie } from 'react-chartjs-2';
import { CategoryScale, Chart } from "chart.js/auto"; // Correct import
import { Grid } from "@mui/material";

Chart.register(CategoryScale);

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "All Registered User",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const PieChart = () => {
  return (
    <Grid item xs={12} lg={4} className='cursor-pointer border' sx={{borderRadius:'10px'}}>
      <Pie data={data} />
    </Grid>
  );
};

export default PieChart;
