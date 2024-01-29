const express = require("express");
const blogRouter = express.Router();
const {
  getAllBlogsController,
  getBlogDetailsController,
  createBlogController,
  deleteBlogController,
  updateBlogController,
} = require("./blogController");
const {
  getBlogDetails,
  createBlog,
  deleteBlog,
} = require("../models/blog.model");

blogRouter.put("/update/:id", updateBlogController);
blogRouter.delete("/delete/:id", deleteBlogController);
blogRouter.post("/create", createBlogController);

blogRouter.get("/:id", getBlogDetailsController);
blogRouter.get("/", getAllBlogsController);

module.exports = blogRouter;
