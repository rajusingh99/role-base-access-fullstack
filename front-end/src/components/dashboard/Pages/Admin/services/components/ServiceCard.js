import React from 'react'
import { Box,Grid, Typography } from '@mui/material'
import Divider from '@mui/material/Divider';
import { Constant } from '../../../../../constant/sidebarLinks';
import { Link } from 'react-router-dom';

const ServiceCard = ({item,index}) => {
  return (
   <Grid item xs={12} lg={6} key={index}>
    <Link to={item.path}>
        <Box sx={{display:'flex',flexDirection:'column', minHeight:'30vh',boxShadow:'initial',cursor:'pointer',border:'1px solid black',m:'10px',p:'20px',borderRadius:'10px'}}>
            <Box sx={{minHeight:'17vh'}}>
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Box sx={{display:'flex',justifyContent:'space-between',gap:'20px'}} className="pb-5"> 
                        {item.icon}
                        <Typography component={'h3'} className="text-bold" sx={{color:Constant.bgColor,fontSize: 'bold'}}>{item.title}</Typography>
                    </Box>
                    <Box>

                    </Box>
                </Box>
                
                <Box>
                    <Typography className='opacity-50 flex '>{item.description}</Typography>

                </Box>
            </Box>

            <Divider/>
        
        </Box> 
    </Link>
   </Grid>
  )
}

export default ServiceCard
