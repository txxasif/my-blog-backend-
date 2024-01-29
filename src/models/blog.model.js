const mongoose = require("mongoose");
const Blog = require("./blog.schema");
const itemsPerPage = 6;
async function createBlog(blog) {
  const newBlog = new Blog({ ...blog });
  await newBlog.save();
}

async function getAllBlog(page) {
  ///  const blogs = await Blog.find({}).select("title photo createdAt userId");
  const totalItems = await Blog.find({}).countDocuments();
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const limit = itemsPerPage;
  const skip = Math.max(0, (page - 1) * itemsPerPage);
  const blogs = await Blog.aggregate([
    {
      $match: {},
    },

    {
      $lookup: {
        from: "users",
        as: "userDetails",
        localField: "userId",
        foreignField: "_id",
      },
    },
    {
      $unwind: "$userDetails",
    },
    {
      $sort: { createdAt: -1 },
    },
    { $skip: skip },
    { $limit: limit },
  ]);
  console.log(blogs, totalPages);
  return { blogs, totalPages };
}
async function getBlogDetails(id) {
  const nId = new mongoose.Types.ObjectId(id);
  const blog = await Blog.aggregate([
    {
      $match: { _id: nId },
    },

    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "userDetails",
      },
    },
    {
      $unwind: "$userDetails",
    },
  ]);
  return blog[0];
}
async function updateBlog(id, body) {
  await Blog.updateOne({ _id: id }, { ...body });
  return true;
}
async function deleteBlog(id) {
  await Blog.deleteOne({ _id: id });
  return true;
}
module.exports = {
  createBlog,
  getAllBlog,
  getBlogDetails,
  deleteBlog,
  updateBlog,
};
