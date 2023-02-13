const express = require("express");
const mongoose = require("mongoose");
require("./db/config.js");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const userRouter = require("./routes/user.js");
const blogRouter = require("./routes/blog.js");
const forgetRouter = require("./routes/forgetpassword.js");

//use the imported router
app.use("/user", userRouter);
app.use("/blog", blogRouter);
app.use("/forget", forgetRouter);

const PORT = 8000;
app.listen(PORT, () => console.log("Change Server is runnning"));
