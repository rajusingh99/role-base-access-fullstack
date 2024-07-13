import { Box, Button, Divider, Grid, InputAdornment, Tab, Tabs, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SideBar from '../../../sidebar'
import TopRoutes from '../TopRoutes/TopRoutes'
import SearchIcon from '@mui/icons-material/Search';
import { Constant } from '../../../../constant/sidebarLinks';
import AssessmentCard from './components/AssessmentCard';
import CopyRight from '../components/CopyRight';
import NotFound from '../../../../Common/NotFound';

const About = () => {
  const route={
    title:"About",
 }
  const [tabValue, setTabValue] = useState('likelihood'); 
  const [activeScenario, setActiveScenario] = useState(null); 
  const [selectedScore, setSelectedScore] = useState({likelihood:'0',businessImpact:'0'});

  console.log(activeScenario,'activeScenarioactiveScenario')
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleScoreSelection = (key, score) => {
    setSelectedScore((prevScores) => ({
      ...prevScores,
      [key]: score
    }));
  };

  const handleSendToBackend = () => {
    console.log('Sending to backend:', activeScenario,selectedScore);
  };

  return (
    <Box sx={{display:'flex'}}>
      <SideBar/>
        <Box  component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
         <TopRoutes route={route}/>
         <NotFound text="About"/>

        </Box>
    </Box>
  )
}

export default About
