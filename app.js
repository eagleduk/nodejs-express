const express = require("express");
const nunjucks = require("nunjucks");
const logger = require("morgan");
const bodyParser = require("body-parser");

const admin = require("./routes/admin");
const contact = require("./routes/contact");

const app = express();
const PORT = 3000;

nunjucks.configure("template", {
  autoescape: true,
  express: app,
});

// Morgan 미들웨어 = 현재 요청하는 URL 주소를 출력한다.
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/images", express.static("uploads"));

app.use((req, res, next) => {
  app.locals.isLogin = false;
  app.locals.url_path = req.path;
  next();
});

app.get("/", (req, res) => {
  res.send("hello express");
});

function adminMiddleware(req, res, next) {
  console.log("adminMiddleware");
  next();
}

app.use("/admin", adminMiddleware, admin);
app.use("/contact", contact);

app.use((req, res, next) => {
  res.status(400).render("common/404.html");
});

app.use((req, res, next) => {
  res.status(500).render("common/500.html");
});

app.listen(PORT, () => {
  console.log("start express...");
});
