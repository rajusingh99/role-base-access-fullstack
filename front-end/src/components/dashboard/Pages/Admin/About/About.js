import { Box,} from '@mui/material'
import React from 'react'
import SideBar from '../../../sidebar'
import TopRoutes from '../TopRoutes/TopRoutes'
import CopyRight from '../components/CopyRight';
import NotFound from '../../../../Common/NotFound';

const About = () => {
  const route={
    title:"About",
 }

  return (
    <Box sx={{display:'flex'}}>
      <SideBar/>
        <Box  component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
         <TopRoutes route={route}/>
         <NotFound text="About"/>
          <CopyRight/>
        </Box>
    </Box>
  )
}

export default About
