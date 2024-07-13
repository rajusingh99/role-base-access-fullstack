import { Box, Typography, Grid, Link } from '@mui/material'
import React from 'react'

const Footer = () => {
    const cursor = {
        cursor:'pointer',
    }
  return (
    <div className=''>
      <Grid container className='text-white bg-black text-center pt-10 pb-5' >
        <Grid item xs={12} sm={6} md={3} > 
            <Typography className='pb-5' variant='h6'>Company</Typography>
            <Box className='flex flex-col' >
                <Typography className='pb-5' variant='subtitle1' sx={cursor}>About</Typography>
                <Typography className='pb-5' variant='subtitle1' sx={cursor}>Blogs</Typography>
                <Typography className='pb-5' variant='subtitle1' sx={cursor}>Jobs</Typography>
                <Typography className='pb-5' variant='subtitle1' sx={cursor}>Press</Typography>
                <Typography className='pb-5' variant='subtitle1' sx={cursor}>Partners</Typography>
            </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Solutions</Typography>
            <Box className='flex flex-col'>
                <Typography className='pb-5' variant='subtitle1' sx={cursor}>Marketing</Typography>
                <Typography className='pb-5' variant='subtitle1' sx={cursor}>Analytics</Typography>
                <Typography className='pb-5' variant='subtitle1' sx={cursor}>Commerce</Typography>
                <Typography className='pb-5' variant='subtitle1' sx={cursor}>InSights</Typography>
                <Typography className='pb-5' variant='subtitle1' sx={cursor}>Support</Typography>
            </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Documentation</Typography>
            <Box className='flex flex-col'>
                <Typography className='pb-5' variant='subtitle1' sx={cursor}>Guides</Typography>
                <Typography className='pb-5' variant='subtitle1' sx={cursor}>Api Status</Typography>
            </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Legal</Typography>
            <Box className='flex flex-col'>
                <Typography className='pb-5' variant='subtitle1' sx={cursor}>Claims</Typography>
                <Typography className='pb-5' variant='subtitle1' sx={cursor}>Privacy</Typography>
                <Typography className='pb-5' variant='subtitle1' sx={cursor}>Terms</Typography>
            </Box>
        </Grid>
       
       <Grid item xs={12}>
           <Typography variant='body2' component={"p"} align='center'>&copy; 2024 My Company. All Rights Reserved.</Typography>
           {/* <Typography variant='body2' component={"p"} align='center'>Made with ❤️
                <Link target='blank' href={"https://www.linkedin.com/in/29159rajusingh/"} color={'inherit'} >Raju.</Link>
            </Typography> */}
           <Typography variant='body2' component={"p"} align='center'>Icons Made by {' '}
                <Link target='blank' href={"https://id.freepikcompany.com/v2/log-in?client_id=freepik&lang=en#from_element=freepik_designer_landing"} color={'inherit'} underline='always'>freepic</Link>{' '} from {' '}
                <Link target='blank' href={"https://www.flaticon.com/"} color={'inherit'} >www.flaticon.com</Link>
            </Typography>
       </Grid>
      </Grid>
    </div>
  )
}

export default Footer
