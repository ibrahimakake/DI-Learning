const express = require("express");
const cors = require("cors");
const app = express();
const port = 3003;


app.use(cors());
app.get("/api/hello", (req, res) => {
  res.send("Hello from server");
});

app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});
