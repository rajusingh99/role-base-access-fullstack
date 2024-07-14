
import { Box, Button, Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Popover, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import { Constant, sidebarLinks } from '../../../../constant/sidebarLinks'; // Assuming Constant and sidebarLinks are exported from the same file
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useNavigate } from 'react-router-dom';

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const TopRoutes = ({ route }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    menus: []
  });
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleMenusChange = (event) => {
    const { target: { value } } = event;
    setFormData({
      ...formData,
      menus: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const roleData = {
      ...formData,
    };

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post('http://localhost:4000/api/role-create', roleData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      });

      if (response.status === 200) {
        navigate('/roles');
        console.log('Role created successfully:', response.data);
      } else {
        console.error('Failed to create role:', response.data);
      }
    } catch (error) {
      console.error('An error occurred while creating the role:', error);
    }

    handleClose(); 
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h2>{route.title}</h2>
      <div className='flex' style={{ alignItems: 'end', justifyContent: 'end' }}>
        {route.title === 'Roles' &&
          <Button
            variant="contained"
            aria-describedby={id}
            onClick={handleClick}
            sx={{ textTransform: "capitalize", backgroundColor: Constant.bgColor, ":hover": { backgroundColor: Constant.bgColor } }}
          >
            Create Role
          </Button>
        }
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'center', horizontal: 'center', }}
          transformOrigin={{ vertical: 'center', horizontal: 'center', }}
          PaperProps={{
            style: { position: 'fixed', transform: 'translate(-50%, 10%)', maxHeight: '100vh', width: '50vw', },
          }}
        >
          <Box className="p-8">
            <Box className="flex p-3" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant='h6'>Create Role</Typography>
              <CloseOutlinedIcon onClick={handleClose} className='cursor-pointer' />
            </Box>
            <form onSubmit={handleSubmit}>
              <Grid container sx={{ maxHeight: '60vh', overflowY: 'auto', pr: 2, pt: 2, boxShadow: "initial" }}>
                <Grid item xs={12} mb={3}>
                  <TextField  required  id='name'  name='name'  label='Name'  fullWidth  autoComplete='given-name'  value={formData.name}  onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} mb={3}>
                  <FormControl sx={{ minWidth:'100%', maxWidth:'100%' }}>
                    <InputLabel id="menus-multiple-chip-label">Menus</InputLabel>
                    <Select
                      labelId="menus-multiple-chip-label"
                      id="menus-multiple-chip-label"
                      multiple
                      value={formData.menus}
                      onChange={handleMenusChange}
                      input={<OutlinedInput id="select-multiple-chip" />}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'no-wrap', gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {sidebarLinks.map((menu) => (
                        <MenuItem
                          key={menu.title}
                          value={menu.title}
                          style={{...getStyles(menu.title, formData.menus, theme), }}
                        >
                          {menu.title}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Box className="flex items-center justify-between">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={handleClose}
                      sx={{ textTransform: 'capitalize', }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type='submit'
                      size='large'
                      variant='contained'
                      sx={{ backgroundColor: Constant.bgColor, ':hover': { backgroundColor: Constant.bgColor } }}
                    >
                      Create
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Popover>
      </div>
    </div>
  );
};

export default TopRoutes;


