
import { Box,} from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from '../../../sidebar';
import TopRoutes from '../TopRoutes/TopRoutes';
import Constant  from '../../../../constant/Constant';
import CopyRight from '../components/CopyRight';
import RoleList from './components/RoleList';

const RoleManagement = () => {
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [scenarios, setScenarios] = useState([]);

  const route = {
    title: "Roles",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/scenario');
        setScenarios(response.data);
      } catch (error) {
        console.error('Error fetching scenarios:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <TopRoutes route={route} />
        
        <RoleList rows={Constant.roleList}/>

        <Box className="flex items-center">
          <CopyRight />
        </Box>
      </Box>
    </Box>
  );
}

export default RoleManagement;

