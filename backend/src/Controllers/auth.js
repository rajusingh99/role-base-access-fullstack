const User = require("../Model/user");
const Role = require("../Model/role");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	try {
		let user = await User.findOne({ email });

		if (!firstName || !lastName || !email || !password) {
			return res.status(400).json({ msg: "All Fields are required" });
		}
		if (user) {
			return res.status(400).json({ msg: "User already Registered" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const userRoleId = await Role.findOne({ name: "user" }, { _id: 1 });

		user = new User({
			firstName,
			lastName,
			email,
			password: hashedPassword,
			roleId: userRoleId,
		});

		const savedUser = await user.save();

		if (savedUser) {
			res.status(200).send("User Registered Successfully!");
		}
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server error");
	}
};

// Login endpoint
exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({
				success: false,
				msg: "All fields are Required",
			});
		}

		const user = await User.findOne({ email });

		if (!user) {
			return res.status(404).json({
				success: false,
				msg: "User Not Registered",
			});
		}

		const matchPassword = await bcrypt.compare(password, user.password);

		const role = await Role.findById(user?.roleId).exec();

		if (matchPassword) {
			const options = {
				id: user?._id,
				firstName: user?.firstName,
				lastName: user?.lastName,
				email: user?.email,
				roleId: role? role?._id : null,
				role: role ? role?.name : null,
				menu: role ? role?.menus : null,
			};

			const token = await jwt.sign(options, process.env.JWT_SECRET, {
				expiresIn: "2d",
			});

			return res
				.cookie("token", token, {
					expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
					httpOnly: true,
				})
				.json({
					success: true,
					token: token,
					msg: "User Logged In Successfully!",
          user : {
            id: user?._id,
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            roleId: role? role?._id : null,
            role: role ? role?.name : null,
            menus: role ? role?.menus : null,
          }
		});
		} else {
			return res.status(401).json({
				success: false,
				msg: "Invalid Credentials",
			});
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			msg: "Internal Server Error",
		});
	}
};

// Logout endpoint
exports.logout = (req, res) => {
	try {
		res.cookie("token", "", { expires: new Date(0), httpOnly: true });
		return res.status(200).json({
			success: true,
			msg: "User Logged Out Successfully!",
		});
	} catch (error) {
		console.error(error); // Log the error for debugging
		return res.status(500).json({
			success: false,
			msg: "Internal Server Error",
		});
	}
};

