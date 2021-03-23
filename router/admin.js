const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("admin page");
});

router.get("/product", (req, res) => {
  res.send("admin product page");
});

module.exports = router;
