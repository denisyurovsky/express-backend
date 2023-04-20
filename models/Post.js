import mongoose from "mongoose";

const Post = mongoose.Schema({
    author: {type: String, required: true},
    Title: {type: String, required: true},
    content: {type: String, required: true},
    picture: {type: String}
})

export default mongoose.model('Post', Post);