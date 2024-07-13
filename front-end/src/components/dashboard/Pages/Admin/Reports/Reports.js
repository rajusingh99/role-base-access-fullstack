import { Box,  Grid } from '@mui/material'
import React,{useState} from 'react'
import SideBar from '../../../sidebar'
import TopRoutes from '../TopRoutes/TopRoutes'
import ReportBarChart from './components/ReportBarChart'
import ReportPiChart from './components/ReportPichart'
import CopyRight from '../components/CopyRight'
import PieChart from '../../../charts/piechart'

const Reports = () => {
  const route={
    title:"Reports",
 }

  return (
    <Box sx={{display:'flex'}} >
    <SideBar/>
      <Box  component="main" sx={{ flexGrow: 1 ,marginTop:"55px",p:5}}>
        <TopRoutes route={route}/>
          <Grid container  mt ={3} >
            <ReportBarChart/>
            <ReportPiChart/>
            <PieChart/>
            
          </Grid>
          <Box className="flex items-center justify-between gap-5 mt-5">
            <Box className="flex">
                <CopyRight/>
            </Box>
        </Box>
      </Box>
  </Box>
  )
}

export default Reports
