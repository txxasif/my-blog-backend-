const {
  getAllBlog,
  getBlogDetails,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../models/blog.model");
async function getAllBlogsController(req, res) {
  const page = req.query.page || 1;
  const result = await getAllBlog(page);
  res.send({ result });
}
async function getBlogDetailsController(req, res) {
  const id = req.params.id;
  const result = await getBlogDetails(id);
  res.send({ result });
}
async function createBlogController(req, res) {
  const body = req.body;

  await createBlog(body);
  res.send({ msg: "done" });
}
async function deleteBlogController(req, res) {
  const id = req.params.id;

  await deleteBlog(id);
  return res.send({ msg: "done" });
}
async function updateBlogController(req, res) {
  const body = req.body;
  const id = req.params.id;
  await updateBlog(id, body);
  res.send({ msg: "done" });
}
module.exports = {
  getAllBlogsController,
  getBlogDetailsController,
  createBlogController,
  deleteBlogController,
  updateBlogController,
};
