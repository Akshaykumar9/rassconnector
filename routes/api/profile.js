const express = require("express");
const router = express.Router();

//@route  GET to api/profile/test
//@desc   tests profile route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "profile Works" }));
module.exports = router;
