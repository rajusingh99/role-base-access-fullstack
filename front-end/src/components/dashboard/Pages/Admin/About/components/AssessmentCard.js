import { Box, Grid, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AssessmentCard = ({ item,index,setActiveScenario ,activeScenario}) => {
  const [showFullText, setShowFullText] = useState(false);
  const handleToggleText = () => {
    setShowFullText((prev) => !prev);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  const riskScenarioText = showFullText ? item.risk_scenario : truncateText(item.risk_scenario, 4);
  
  const handleScenario =(index)=>{
    setActiveScenario(index)
  }
  return (
    <Grid item xs={12} key={index} onClick={()=>handleScenario(index)} sx={{borderLeft :(index === activeScenario && index!= null)? "4px solid #5A87B5" :"",backgroundColor:(index === activeScenario && index!= null) ? "#EFF2FA":""}}>
      <Box className="flex items-center justify-between border p-5 cursor-pointer">
        <Box className='flex items-center justify-between'>
          <Typography className='text-wrap' variant='p'>{riskScenarioText}</Typography>
          <Typography>
            {item.risk_scenario.split(' ').length > 4 && (
                <Button
                onClick={handleToggleText}
                sx={{ textTransform: 'capitalize', marginTop: 1 }}
                >
                {showFullText ? 'View Less' : 'View More'}
                </Button>
            )}
          </Typography>
        </Box>
        <Box className="flex gap-5">
          <CheckCircleIcon sx={{color:'green'}}/>
          <CheckCircleIcon sx={{color:'green'}}/>
        </Box>
      </Box>
    </Grid>
  );
};

export default AssessmentCard;

