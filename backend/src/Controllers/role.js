const Role = require('../Model/role');
require('dotenv').config();

exports.createRole = async (req, res) => {
  try {
    const { name, menus } = req.body;

    if (!name || !Array.isArray(menus)) {
      return res.status(400).json({ message: 'Invalid input data' });
    }

    // Check if the role already exists
    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return res.status(400).json({ message: 'Role already exists' });
    }

    // Create a new role
    const newRole = new Role({ name, menus });

    await newRole.save();

    return res.status(201).json({ message: 'Role created successfully', role: newRole });
  } catch (error) {
    console.error('Error creating role:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateRole = async (req, res) => {
    try {
      const { id, name, menus } = req.body;
  
      if (!id || !name || !Array.isArray(menus)) {
        return res.status(400).json({ message: 'Invalid input data' });
      }
  
      const existingRole = await Role.findById(id);
      if (!existingRole) {
        return res.status(404).json({ message: 'Role not found' });
      }
  
      // Check if another role with the same name exists (excluding the current role)
      const roleWithSameName = await Role.findOne({ name, _id: { $ne: id } });
      if (roleWithSameName) {
        return res.status(400).json({ message: 'Another role with the same name already exists' });
      }
  
      // Update the role
      existingRole.name = name;
      existingRole.menus = menus;
  
      await existingRole.save();
  
      return res.status(200).json({ message: 'Role updated successfully', role: existingRole });
    } catch (error) {
      console.error('Error updating role:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

exports.getAllRoleList = async (req, res) => {
  try {
    const roles = await Role.find({});

    return res.status(200).json({ message: 'Roles fetched successfully', roles });
  }
   catch (error) {
    console.error('Error fetching roles:', error);
    return res.status(500).json({ message: 'Internal server error',error });
  }
  };