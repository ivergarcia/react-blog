const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://dealth123:dealth123@myfirtscluster-3ndah.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

// router
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000);
