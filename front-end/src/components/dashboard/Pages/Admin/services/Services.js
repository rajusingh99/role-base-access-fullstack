import { Box,Grid } from '@mui/material'
import React from 'react'
import SideBar from '../../../sidebar'
import TopRoutes from '../TopRoutes/TopRoutes'
import { Constant } from '../../../../constant/sidebarLinks'
import ServiceCard from './components/ServiceCard'
import CopyRight from '../components/CopyRight'

const Services = () => {
  const route={
    title:"Service",
 }
  return (
    <Box sx={{display:''}}>
       <Box className='flex'>
          <SideBar/>
          <Box  component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
            <TopRoutes route={route}/>
            
          <Grid container>
            {
              Constant.Service.map((item,index)=> <ServiceCard item={item} index={index} />)
            }
          </Grid>
          </Box>
       </Box>

       <Box className="flex items-center justify-center p-7">
          <CopyRight/>
       </Box>
    </Box>
  )
}

export default Services
