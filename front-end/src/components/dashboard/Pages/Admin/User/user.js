
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Select, MenuItem, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Constant from "../../../../constant/Constant";

const Users = ({ rows }) => {
    console.log(rows,'rows')
  const [editId, setEditId] = useState(null);
  const [editRole, setEditRole] = useState("User");

  const handleEditClick = (id, currentRole) => {
    setEditId(id);
    setEditRole(currentRole);
  };

  const handleRoleChange = (event) => {
    setEditRole(event.target.value);
  };

  const handleSave = (id) => {
    console.log(`Save changes for user with ID: ${id} and new role: ${editRole}`);
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 10 },
    { field: "firstName", headerName: "First Name", flex: 15 },
    { field: "lastName", headerName: "Last Name", flex: 15 },
    { field: "role", headerName: "Role", flex: 16, renderCell: (params) => (
        editId === params.row.id ? (
          <Select value={editRole} onChange={handleRoleChange}>
            {
              Constant.Roles.map((item)=> 
              <MenuItem value={item.value}>{item.name}</MenuItem>
              )
            }
          </Select>
        ) : (
          params.value
        )
      )
    },
    { field: "email", headerName: "Email", flex: 30 },
    {
      field: "action",
      headerName: "Action",
      flex: 20,
      renderCell: (params) => (
        <Box sx={{marginTop:'5px', gap: "20px", display: 'flex' }}>
          {editId === params.row.id ? (
            <>
              <Button variant="contained"  onClick={() => handleSave(params.row.id)}>
                Save
              </Button>
              <Button variant="contained" color="error" onClick={handleCancel}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <IconButton color="primary" aria-label="edit" onClick={() => handleEditClick(params.row.id, params.row.role)}>
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
      <Box>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          disableSelectionOnClick
        />
      </Box>
  );
};

export default Users;
