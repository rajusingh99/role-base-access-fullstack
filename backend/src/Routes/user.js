const express = require("express");

const { auth } = require("../middlewares/auth");
const { updateUserRole, getAllUserList } = require("../Controllers/user");
const router = express.Router();



router.put('/update-user-role', auth, updateUserRole);

router.get('user-list', auth, getAllUserList);



module.exports = router;
