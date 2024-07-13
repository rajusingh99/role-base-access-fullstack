import React, { useCallback, useState } from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  Grid,

} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Constant } from "../constant/sidebarLinks";
import CopyRight from "../dashboard/Pages/Admin/components/CopyRight";

const ForgotPassword = () => {
  const navigate = useNavigate();
    const [formData,setFormData] = useState({
        email:'',
    })

  const handleChange = useCallback((e,name) => {
    setFormData((prev) =>({
        ...prev,
        [name] : e.target.value
    }))
  },[])

  const handleForgotPassword = () => {   
    if (formData.email) {
      navigate('/update-password');
    } else {
      alert("Please enter your email.");
    }
  }

  return (
    <Grid container m={2}>
      <Grid item xs={12} lg={6} sx={{backgroundColor:"#D9D9D9",width:"60%",borderRadius:'5px'}}>

      </Grid>
      <Grid item xs={12} lg={6}>
        <Box
          sx={{
            minHeight: "93vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 0",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
          }}
        >
          <Paper
            component="form"
            sx={{
              p: "2rem",
              width: "24rem",
              maxWidth: "95%",
              zIndex: "1"
            }}
          >
            <Stack spacing={2}>
              <Typography align="center" component="h1" variant="h5" sx={{ mb: 1 }}>
                Forgot Password
              </Typography>
              <TextField
                size="small"
                value={formData.email}
                onChange={(e) => {handleChange(e,'email')}}
                name="email"
                label="Email"
                variant="outlined"
                required
                sx={{mb:"20px",mt:'20px'}}
              />
              <Button onClick={handleForgotPassword} variant="contained" 
              sx={{
                backgroundColor: Constant.bgColor,
                "&:hover": {
                  backgroundColor:  Constant.bgColor,
                },
              }}
                  type="submit">
                Send
              </Button>
              <Link
                to='/login'
                align="right"
                variant="subtitle2"
                underline="hover"
                sx={{
                  cursor: "pointer"
                }}
              >
                Back
              </Link>
            </Stack>
          </Paper>
        
        </Box>
      </Grid>
      <CopyRight/>
    </Grid>
  );
};

export default ForgotPassword;
