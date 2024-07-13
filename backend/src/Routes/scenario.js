const express = require("express");
const { scenario, getAllScenario,scenarioUpdate } = require("../Controllers/scenario");
const { auth } = require("../middlewares/auth");
const router = express.Router();
// Create scenario route.
router.post("/scenario/create", auth, scenario);
router.post("/scenario/update", auth, scenarioUpdate);
// Get All scenario data route.
router.get("/scenario", auth, getAllScenario);

module.exports = router;
