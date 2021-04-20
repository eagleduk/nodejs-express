const express = require("express");
const router = express.Router();

function testMiddleware(req, res, next) {
  console.log("testMiddleware");
  next();
}

function testMiddleware2(req, res, next) {
  console.log("testMiddleware2");
  next();
}

router.get("/", testMiddleware, testMiddleware2, (req, res) => {
  res.send("admin page");
});

router.get("/products", (req, res) => {
  res.render("admin/products.html", {
    message: "Hello! admin product!!",
  });
});

router.get("/products/write", (req, res) => {
  res.render("admin/write.html");
});

router.post("/products/write", (req, res) => {
  res.send(req.body);
});

module.exports = router;
