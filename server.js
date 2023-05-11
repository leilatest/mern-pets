const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();

const URI = process.env.URI;
mongoose
  .connect(URI)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/myapp", require("./routes/user"));

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server is running at ${PORT}`);
});
