const express = require("express");
const { getAllComments, addComment } = require("../models/comment.model");
const { getAllBlogsController } = require("./blogController");
const {
  getAllCommentsController,
  addCommentController,
  updateCommentController,
  deleteCommentController,
} = require("./commentController");
const commentRouter = express.Router();

commentRouter.delete("/delete/:id", deleteCommentController);
commentRouter.put("/update/:id", updateCommentController);
commentRouter.post("/add", addCommentController);
commentRouter.get("/:id", getAllCommentsController);
module.exports = commentRouter;
