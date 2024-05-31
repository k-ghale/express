const express = require("express");
const router = express.Router();
const { auth } = require("../controllers/auth.js");

// router.post("/", auth);

//Router Route method
router.route("/").post(auth);

module.exports = router;
