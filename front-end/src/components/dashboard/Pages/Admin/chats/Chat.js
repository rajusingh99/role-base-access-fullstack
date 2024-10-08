import { Box, Grid } from '@mui/material'
import React from 'react'
import NotFound from '../../../../Common/NotFound'
import SideBar from '../../../sidebar'
import TopRoutes from '../TopRoutes/TopRoutes'
import CopyRight from '../components/CopyRight';

const Chat = () => {
  const route ={
    title :'Chats'
}
  return (
    <Grid container>
         <SideBar/>
         <Box mt={'75px'} ml={'20px'}>
            <TopRoutes route={route}/>
         </Box>
        <NotFound text="Chats"/>
        <CopyRight/>
    </Grid>
  )
}

export default Chat
