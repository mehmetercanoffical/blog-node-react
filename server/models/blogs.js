import mongoose from "mongoose";

var blogSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    content: String,
    image: String,
    createAt: {
        type: Date,
        default: new Date()
    }
})

var BlogExport = mongoose.model('BlogModel', blogSchema);
export default BlogExport;