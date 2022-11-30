require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const designs = require("./api/designs/design.routers.js");

app.use(
  cors({
    origin: true,
  })
);
app.use(express.json());
app.use("/upload", express.static(__dirname + "/upload"));

app.use("/api/designs", designs);

app.all("*", (req, res, next) => {
  throw new AppError("Requested URL ${req.path} not found!", 404);
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
