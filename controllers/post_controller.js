const postService = require("../services/post_service");

exports.getAllPosts = async (req, res) => {
  const posts = await postService.getAllPosts();
  try {
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send({ error });
  }
};

exports.createPost = async (req, res) => {
  const { userUuid, body } = req.body;

  const post = await postService.newPost({
    userUuid,
    body,
  });
  try {
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send({ error });
  }
};
