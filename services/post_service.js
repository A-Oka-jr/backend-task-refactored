const postDao = require("../daos/post_dao.js")
const db = require("../database/db");
const models = require("../models");
const Post = models.Post;

exports.getAllPosts = async () => {
  return postDao.getAllPosts();
};

exports.newPost = async (params) => {
  return postDao.newPost(params);
};

