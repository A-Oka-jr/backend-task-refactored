const models = require("../models");
const { Post, users } = models;

exports.getAllPosts = async () => {
  const query = {
    include: [{ model: users, as: "user" }],
  };
  const result = await Post.findAll(query);
  return result;
};

exports.newPost = async (params) => {
  const { userUuid, body } = params;
  const query = {
    where: { uuid: userUuid },
  };
  const user = await users.findOne(query);

  const result = await Post.create({
    body,
    userId: user.id,
  });
  return result;
};
