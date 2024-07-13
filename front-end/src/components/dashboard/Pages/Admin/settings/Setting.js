import { Box, Grid } from '@mui/material'
import React from 'react'
import NotFound from '../../../../Common/NotFound'
import SideBar from '../../../sidebar'
import TopRoutes from '../TopRoutes/TopRoutes'

const Setting = () => {
    const route ={
        title :'Setting'
    }
  return (
    <Grid container>
         <SideBar/>
         <Box mt={'75px'} ml={'20px'}>
            <TopRoutes route={route}/>
         </Box>
        <NotFound text="Setting"/>
    </Grid>
  )
}

export default Setting
