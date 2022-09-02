const userService = require("../services/user_service");

exports.getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  try {
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ error });
  }
};

exports.getOneUser = async (req, res) => {
  const { userId } = req.params;

  const user = await userService.getUser({ userId });
  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send({ message });
  }
};

exports.deleteUser = async (req, res, next) => {
  const { userId } = req.params;
  const user = await userService.deleteUser({ userId });
  try {
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error });
  }
};

exports.newUser = async (req, res) => {
  console.log(req.file);
  const personal_image = req.file.path;
  const { full_name, address, gender, mobile, email, jop, salary } = req.body;

  const user = await userService.newUser({
    personal_image,
    full_name,
    address,
    gender,
    mobile,
    email,
    jop,
    salary,
  });
  try {
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error });
  }
};

exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const { full_name, address, gender, mobile, email, jop, salary } = req.body;
  const personal_image = req.file.path;
  const user = await userService.updateUser({
    userId,
    personal_image,
    full_name,
    address,
    gender,
    mobile,
    email,
    jop,
    salary,
  });
  try {
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error });
  }
};
