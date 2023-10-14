require('dotenv').config();
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
const updateProfileRouter=require("./routes/profile.js");
const followerRouter = require("./routes/followers.js");
const likeRouter = require("./routes/likes.js");
const commentRouter=require("./routes/comment.js");

//use the imported router
app.use("/user", userRouter);
app.use("/blog", blogRouter);
app.use("/forget", forgetRouter);
app.use("/profile",updateProfileRouter);
app.use("/follower", followerRouter);
app.use("/like", likeRouter);
app.use("/comment",commentRouter);

app.get("/", (req, res) => {
    res.send("server is running...");
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Server is running on port 8000"));
