const User = require('../Model/user');
require('dotenv').config();


exports.updateUserRole = async (req, res) => {
    try {
        const { userId, roleId } = req.body;
    
        if (!userId || !roleId) {
          return res.status(400).json({ message: 'Invalid input data' });
        }
    
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        const role = await Role.findById(roleId);
        if (!role) {
          return res.status(404).json({ message: 'Role not found' });
        }
    
        // Update the user's role
        user.role = roleId;
        await user.save();
    
        return res.status(200).json({ message: 'User role updated successfully', user });
      } catch (error) {
        console.error('Error updating user role:', error);
        return res.status(500).json({ message: 'Internal server error', error });
      }
  };

exports.getAllUserList = async (req, res) => {
    try {
      const users = await User.find({}).populate('role'); 
  
      return res.status(200).json({ message: 'Users fetched successfully', users });
    } catch (error) {
      console.error('Error fetching users:', error);
      return res.status(500).json({ message: 'Internal server error', error });
    }
  };