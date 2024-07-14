import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Select, MenuItem, Button, TextField, FormControl, InputLabel, Chip, OutlinedInput, CircularProgress } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import axios from "axios";
import '../style.css'
import { sidebarLinks } from "../../../../../constant/sidebarLinks";

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

const RoleList = ({ rows }) => {
  const theme = useTheme();
  const [editId, setEditId] = useState(null);
  const [editRole, setEditRole] = useState([]);
  const [editName, setEditName] = useState("");
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleEditClick = (id, currentName, currentRole) => {
    setEditId(id);
    setEditName(currentName);
    setEditRole(currentRole);
  };

  const handleRoleChange = (event) => {
    const { target: { value } } = event;
    setEditRole(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleNameChange = (event) => {
    setEditName(event.target.value);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        "http://localhost:4000/api/update-role",
        { id: editId, name: editName, menus: editRole },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );
      if (response.status === 200) {
        const updatedRoles = roles.map(role =>
          role._id === editId ? { ...role, name: editName, menus: editRole } : role
        );
        setRoles(updatedRoles);
        setEditId(null);
      } else {
        console.error("Failed to update role:", response.data);
        alert("Failed to update role.");
      }
    } catch (error) {
      console.error("An error occurred while updating the role:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    {
      field: "name", headerName: "Name", flex: 1, renderCell: (params) => (
        editId === params.row._id ? (
          <TextField value={editName} onChange={handleNameChange} />
        ) : (
          params.value
        )
      )
    },
    {
      field: "menus", headerName: "Menus", flex: 2, renderCell: (params) => (
        editId === params.row._id ? (
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Menus</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={editRole}
              onChange={handleRoleChange}
              input={<OutlinedInput id="select-multiple-chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} sx={{textTransform:"capitalize"}}/>
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {sidebarLinks.map((role) => (
                <MenuItem
                  key={role}
                  value={role.value}
                  style={getStyles(role.value, editRole, theme)}
                  sx={{ textTransform: 'capitalize' }}
                >
                  {role.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          params.row.menus.map((item, key) =>
            <Chip key={key} label={item} sx={{ textTransform: 'capitalize' }} />
          )
        )
      )
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ marginTop: '5px', gap: "20px", display: 'flex' }}>
          {editId === params.row._id ? (
            <>
              <Button variant="contained" onClick={() => handleSave()}>
                Save
              </Button>
              <Button variant="contained" color="error" onClick={handleCancel}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <IconButton color="primary" aria-label="edit" onClick={() => handleEditClick(params.row._id, params.row.name, params.row.menus)}>
                <EditIcon />
              </IconButton>
            </>
          )}
        </Box>
      ),
    },
  ];

  useEffect(() => {
    const fetchRoleList = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("http://localhost:4000/api/role-list", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response,'response')
        const dataWithId = response.data.roles.map((role) => ({ ...role, id: role._id }));
        setRoles(dataWithId);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching role data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchRoleList();
  }, []);

  if (loading) {
    return <CircularProgress color="success"/>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box mt={'15px'}>
      <DataGrid
        rows={roles}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
  );
};

export default RoleList;

