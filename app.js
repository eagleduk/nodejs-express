const express = require("express");
const admin = require("./router/admin");
const contact = require("./router/contact");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use("/admin", admin);
app.use("/contact", contact);

app.listen(PORT, () => {
  console.log("start express...");
});
