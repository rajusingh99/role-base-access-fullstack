
import React, { useState,useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Select, MenuItem, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import axios from "axios";
const Users = () => {
   
  const [editId, setEditId] = useState(null);
  const [editRole, setEditRole] = useState("User");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [RoleList, setRoleList] = useState([])
 
  useEffect(()=>{
    const fetchRoleList = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("http://localhost:4000/api/role-list", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setRoleList(response.data?.roles);
        setLoading(false);
      } catch (error) {
        console.error('Error Role List data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchRoleList();
  },[])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("http://localhost:4000/api/user-list", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleEditClick = (id, currentRole) => {
    setEditId(id);
    setEditRole(currentRole);
  };

  const handleRoleChange = (event) => {
    setEditRole(event.target.value);
  };


  const handleSave = async (userId) => {
    try {
        const token = localStorage.getItem('token');
        const selectedRole = RoleList.find(role => role.name === editRole);
        const roleId = selectedRole?._id
       
        const response = await axios.put(
            "http://localhost:4000/api/update-user-role",
            { userId: userId, roleId: roleId },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            }
        );
        if (response.status === 200) {
              const updatedUsers = users.map(user =>
                user.id === userId ? { ...user, role: editRole } : user
            );
            setUsers(updatedUsers);
            setEditId(null);
        } else {
            console.error("Failed to update user role:", response.data);
            alert("Failed to update user role.");
        }
    } catch (error) {
        console.error("An error occurred while updating the user role:", error);
        alert("An error occurred. Please try again.");
    }
};

  const handleCancel = () => {
    setEditId(null);
  };
 
  const columns = [
    { field: "id", headerName: "ID", flex: 10 },
    { field: "firstName", headerName: "First Name", flex: 15 },
    { field: "lastName", headerName: "Last Name", flex: 15 },
    { field: "role", headerName: "Role", flex: 16, renderCell: (params,index) => (
        <>
      
         { editId === params.row.id ? (
              <Select value={editRole} onChange={handleRoleChange}>
                {
                RoleList &&  RoleList.map((item)=> 
                  <MenuItem value={item.name} sx={{ textTransform: "capitalize" }}>{item.name}</MenuItem>
                  )
                }
              </Select>
            ) : (
              params.value
            )}
        </>
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
            </>
          )}
        </Box>
      ),
    },
  ];

  return (
      <Box>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          disableSelectionOnClick
        />
      </Box>
  );
};

export default Users;
