import React, { useEffect, useState } from 'react';
import { Grid, Paper,Box } from '@mui/material';
import Users from '../Pages/Admin/User/user';
import SideBar from '../sidebar';
import TopRoutes from '../Pages/Admin/TopRoutes/TopRoutes';
import Constant from '../../constant/Constant';
import CopyRight from '../Pages/Admin/components/CopyRight';

const UserList = () => {
  const [data, setData] = useState(Constant.rows)
 
  useEffect(()=>{
     
  },[])
  
  const route = {
    title: "Users",
  };

  const newLocal = <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
    <Grid container>
      <Grid sx={{ marginTop: '10px', }} xs='12' >
        <TopRoutes route={route} />

        <Paper elevation={2} sx={{marginTop: '10px',}}>
          <Users  rows={data}/>
        </Paper>
      </Grid>
    </Grid>
        <CopyRight/>
  </Box>;
  return (
    <Box sx={{display:'flex'}}>
      <SideBar/>
      {newLocal}
    </Box>
  );
};

export default UserList;
