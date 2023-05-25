const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

const URI = process.env.URI;
mongoose
  .connect(URI)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/myapp", require("./routes/user"));
app.use("/api/myapp/post", require("./routes/post"));
app.use("/api/myapp/admin", require("./routes/admin"));
app.use("/api/myapp/visitor", require("./routes/visitor"));

const Port = 5000 || process.env.Port;
app.listen(Port, (err) => {
  if (err) throw err;
  console.log("server is running");
});
