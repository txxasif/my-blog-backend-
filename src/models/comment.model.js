const Comment = require("./comment.schema");
const User = require("./user.schema");

async function addComment(data) {
  const newComment = new Comment({ ...data });
  await newComment.save();
  return true;
}
async function updateComment(id, data) {
  await Comment.updateOne({ _id: id }, { ...data });
  return true;
}
async function deleteComment(id) {
  await Comment.deleteOne({ _id: id });
  return true;
}
async function getAllComments(blogId) {
  const result = await Comment.find({ blogId: blogId });
  return result;
}
module.exports = {
  addComment,
  getAllComments,
  updateComment,
  deleteComment,
};
