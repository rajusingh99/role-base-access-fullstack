const express = require("express");
const { register, login, logout, getProfile } = require("../Controllers/auth");
const { auth, verifyToken } = require("../middlewares/auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", auth, logout);
router.get('/profile', verifyToken, getProfile);

module.exports = router;
