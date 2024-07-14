const User = require("../Model/user");
require("dotenv").config();
const Role = require("../Model/role");

exports.updateUserRole = async (req, res) => {
	try {
		const { userId, roleId } = req.body;

		if (!userId || !roleId) {
			return res.status(400).json({ message: "Invalid input data" });
		}

		const user = await User.findById(userId);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const role = await Role.findById(roleId);
		if (!role) {
			return res.status(404).json({ message: "Role not found" });
		}

		// Update the user's role
		user.roleId = roleId;
		await user.save();

		return res
			.status(200)
			.json({ message: "User role updated successfully", user });
	} catch (error) {
		console.error("Error updating user role:", error);
		return res
			.status(500)
			.json({ message: "Internal server error", error });
	}
};

exports.getAllUserList = async (req, res) => {
	try {
			const users = await User.find().exec();

			if (!users || users.length === 0) {
					return res.json([]);
			}

			const result = await Promise.all(users.map(async (user) => {
					const role = await Role.findById(user.roleId).exec();
					return {
							id: user?._id,
							firstName: user?.firstName,
							lastName: user?.lastName,
							email: user?.email,
							role: role ? role?.name : null,
							menu: role ? role?.menus : null,
					};
			}));

			res.json(result);
	} catch (error) {
			console.error('Error fetching users data:', error);
			res.status(500).json({ message: 'Internal server error' });
	}
};