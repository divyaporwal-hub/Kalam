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


app.get("/", (req, res) => {
    res.send("server is running...");
})

const PORT = 8000;
app.listen(PORT, () => console.log("Server is running on port 8000"));
