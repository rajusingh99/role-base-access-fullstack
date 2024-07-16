
import { Box,} from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from '../../../sidebar';
import TopRoutes from '../TopRoutes/TopRoutes';
import Constant  from '../../../../constant/Constant';
import CopyRight from '../components/CopyRight';
import RoleList from './components/RoleList';

const RoleManagement = () => {
  const route = {
    title: "Roles",
  };
  
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <TopRoutes route={route} />
        
        <RoleList/>

        <Box className="flex items-center">
          <CopyRight />
        </Box>
      </Box>
    </Box>
  );
}

export default RoleManagement;

