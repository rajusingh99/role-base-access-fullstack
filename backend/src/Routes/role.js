const express = require("express");

const { auth } = require("../middlewares/auth");
const { createRole, updateRole, getAllRoleList } = require("../Controllers/role");
const router = express.Router();


router.post("/role-create",auth, createRole);

router.put('/update-role', auth, updateRole);

router.get('/role-list', auth, getAllRoleList);



module.exports = router;
