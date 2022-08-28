const {
  getAllPosts,
  newPost,
} = require("../services/postService");

exports.get_All = async (req, res, next) => {
  getAllPosts()
    .then((result) => {
      const { message, data } = result;
      res.status(200).send(result);
    })
    .catch((err) => {
      const { statusCode = 400, message } = err;
      res.status(statusCode).send({ message }) && next(err);
    });
};


exports.create_post = async (req, res, next) => {
  const { userUuid, body} = req.body;

  newPost({
    userUuid,
    body,
  })
    .then((result) => {
      const { statusCode = 200, message, data } = result;
      res.status(statusCode).send(result);
    })
    .catch((err) => {
      const { statusCode = 400, message, data } = err;
      res.status(statusCode).send({ message, data }) && next(err);
    });
};

