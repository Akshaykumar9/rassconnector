const express = require("express");
const router = express.Router();

//@route  GET to api/users/test
//@desc   tests user route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "User Works" }));
module.exports = router;
