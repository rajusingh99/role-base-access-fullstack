import React, { useCallback, useState } from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Constant } from "../constant/sidebarLinks";

const UpdatePassword = () => {
  const navigate = useNavigate();
    const [formData,setFormData] = useState({
        password:'',
        confirmPassword:''
    })
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = useCallback((e,name) => {
    setFormData((prev) =>({
        ...prev,
        [name] : e.target.value
    }))
  },[])

  const handleSign = () => {
    navigate('/login')
  }

  return (
    <Grid container m={2}>
    <Grid item xs={12} lg={6} sx={{backgroundColor:"#D9D9D9",width:"60%",borderRadius:'5px'}}>

    </Grid>
    <Grid item xs={12} lg={6}>
        <Box
          sx={{
            minHeight: "100vh",
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
                Update Password
              </Typography>
              <TextField
                size="small"
                name="password"
                label="Password"
                variant="outlined"
                value={formData.password}
                onChange={(e) => {handleChange(e,'password')}}
                required
              />
              <TextField
                size="small"
                name="password"
                label="Confirm Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) => {handleChange(e,'confirmPassword')}}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                required
              />

              <Button onClick={handleSign} variant="contained" 
                sx={{
                  backgroundColor: Constant.bgColor,
                  "&:hover": {
                    backgroundColor:  Constant.bgColor,
                  },
                }}
                 type="submit">
                Update
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
  </Grid>
  );
};

export default UpdatePassword;
