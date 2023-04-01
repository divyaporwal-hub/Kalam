var mongoose = require('mongoose');
var commentSchema = mongoose.Schema({
    postId: {
        type: String,
        default: 1
    },
    blogId: {
        type: String,
        default: null
    },
    postedDate: { type: Date, default: Date.now },

    commentText: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Comments', commentSchema);