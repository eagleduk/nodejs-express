const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("admin page");
});

router.get("/products", (req, res) => {
  res.render("admin/products.html", {
    message: "Hello! admin product!!",
  });
});

module.exports = router;
