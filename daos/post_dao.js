
const models = require("../models");
const {Post,users} = models;

exports.getAllPosts = async () => {
  const result = await Post.findAll({include:[{model:users,as:'user'}]});
  return result;
};


exports.newPost = async (params) => {
  const {
    userUuid,
    body,
  } = params;

  const user = await users.findOne({ where: { uuid: userUuid } })
  const result = await Post.create({
    body,
    userId:user.id,
  });
  return result;
};
