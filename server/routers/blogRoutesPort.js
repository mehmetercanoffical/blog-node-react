import express from "express";
import { getBlogs, postBlogs } from "../controller/blogController.js"

const router = express.Router();


router.get('/', getBlogs);
router.post('/addBlog', postBlogs);

export default router

