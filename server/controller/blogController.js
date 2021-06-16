
import { response } from "express";
import BlogExport from "../models/blogs.js";

export const getBlogs = async (req, res) => {
    try {
        const blogs = await BlogExport.find();
        return res.status(200).json({
            data: blogs,
            sucess: true,
            message: "get data sucess"
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}

export const postBlogs = async (req, res) => {
    var data = req.body;
    var blog = new BlogExport(data)
    blog.save((err, result) => {
        if (err) {
            return res.status(505).send({
                message: "Blog isn't add",
                sucess:false,
            });
        }
        else {
            return res.status(201).send({ 
                message: "blog saving", sucess: true 
            })
        }
    })
}

