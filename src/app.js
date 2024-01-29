const express = require("express");
const app = express();
const morgan = require("morgan");
const userRouter = require("./routes/userRoute");
const blogRouter = require("./routes/blogRoute");
const commentRouter = require("./routes/commentRoute");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
//app.use(morgan("combined"));
app.use(express.json());

app.use("/api/comments", commentRouter);
app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);

module.exports = app;
