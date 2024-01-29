const {
  getAllComments,
  addComment,
  updateComment,
  deleteComment,
} = require("../models/comment.model");

async function getAllCommentsController(req, res) {
  const id = req.params.id;
  const result = await getAllComments(id);
  res.send({ result });
}
async function addCommentController(req, res) {
  await addComment(req.body);
  res.send({ message: "Comment added successfully" });
}
async function updateCommentController(req, res) {
  const id = req.params.id;
  const body = req.body;
  await updateComment(id, body);
  res.send({ msg: "Comment updated successfully" });
}
async function deleteCommentController(req, res) {
  const id = req.params.id;
  await deleteComment(id);
  res.send({ msg: "Comment deleted successfully" });
}
module.exports = {
  getAllCommentsController,
  addCommentController,
  updateCommentController,
  deleteCommentController,
};
