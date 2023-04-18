const mongoose = require("mongoose");
const BlogSchema = new mongoose.Schema({
  blogHeading: {
    type: String,
    required: true,
  },
  blogTags:
  {
    type:String,
    required:false
  },
  blogText: {
    type: String,
    required: true,
  },
  blogSaveTime: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  minuteRead: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("blogs", BlogSchema);
module.exports = Blog;
