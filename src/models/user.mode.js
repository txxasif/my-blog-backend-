const User = require("./user.schema.");

async function addUser(user) {
  //https://i.ibb.co/4R0z9Hm/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg
  const name = user.get("name");
  const photo = user.get("photo");
  const email = user.get("email");
  const userNew = new User({ name: name, email: email, photo: photo });
  await userNew.save();
}
async function getAllUsers() {
  const result = await User.find({});

  return result;
}

async function getAllUsers2() {
  const result = await User.find({}).select("email _id");

  return result;
}
module.exports = {
  addUser,
  getAllUsers,
  getAllUsers2,
};
