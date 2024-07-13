import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Select, MenuItem, Button, TextField, FormControl, InputLabel, Chip, OutlinedInput } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import {sidebarLinks} from "../../../../../constant/sidebarLinks";
import '../style.css'

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

  const handleSave = (id) => {
    console.log(`Save changes for role with ID: ${id}, new name: ${editName}, and new menus: ${editRole}`);
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 10 },
    { field: "name", headerName: "Name", flex: 10, renderCell: (params) => (
        editId === params.row.id ? (
          <TextField value={editName} onChange={handleNameChange} />
        ) : (
          params.value
        )
      )
    },
    { field: "menus", headerName: "Menus", flex: 20, renderCell: (params) => (
        editId === params.row.id ? (
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Menus</InputLabel>
            <Select
              sx={{ }}
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={editRole}
              onChange={handleRoleChange}
              input={<OutlinedInput id="select-multiple-chip"  />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                    ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {sidebarLinks.map((role) => (
                <MenuItem
                key={role.title}
                value={role.value}
                style={getStyles(role.title, editRole, theme)}
                >
                  {role.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          
          <>
           {
            params.value.map((item,key)=>
               <Chip key={key} label={item} />            
        
            )
           }         
          </>

          
        )
        
      )
    },
    {
      field: "action",
      headerName: "Action",
      flex: 10,
      renderCell: (params) => (
        <Box sx={{ marginTop: '5px', gap: "20px", display: 'flex' }}>
          {editId === params.row.id ? (
            <>
              <Button variant="contained" onClick={() => handleSave(params.row.id)}>
                Save
              </Button>
              <Button variant="contained" color="error" onClick={handleCancel}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <IconButton color="primary" aria-label="edit" onClick={() => handleEditClick(params.row.id, params.row.name, params.row.menus)}>
                <EditIcon />
              </IconButton>
              {/* <IconButton color="error" aria-label="delete">
                <DeleteIcon />
              </IconButton> */}
            </>
          )}
        </Box>
      ),
    },
  ];

  return (
    <Box mt={'15px'}>
      <DataGrid
        rows={rows}
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
