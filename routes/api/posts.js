const express = require("express");
const router = express.Router();

//@route  GET to api/posts/test
//@desc   tests posts route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "posts Works" }));
module.exports = router;
