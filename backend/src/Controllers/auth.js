const User = require("../Model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Register endpoint
exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    console.log("Data::", firstName);
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        msg: "All Fields are Required",
      });
    }

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({
        success: false,
        msg: "User Already Registered",
      });
    }

    // Correct use of bcrypt to hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    const response = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    if (response) {
      return res.status(200).json({
        success: true,
        msg: "User Registered Successfully!",
      });
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
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
    if (matchPassword) {
      const options = {
        id: user._id,
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
        });
    } else {
      return res.status(401).json({
        success: false,
        msg: "Invalid Credentials",
      });
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
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
