const express = require("express");
const app = express();
const { router } = require("./routes/api");



app.use("/", (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    next();
  });
  
app.use("/", express.text());
app.use("/api", router);


app.listen(3001);