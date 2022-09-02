
const models = require("../models");
const User = models.users;

exports.getAllUsers = async () => {
  const result = await User.findAll();
  return result;
};

exports.getUser = async (params) => {
  const { userId } = params;
  const query = {
    where: {
      id: userId,
    },
  };
    const result = await User.findOne(query);
    return result
};

exports.deleteUser = async (params) => {
  const { userId } = params;
  const query = {
    where: {
      id:userId
    }
  }
    const result = await User.findOne(query);
    await result.destroy();
    return { message: "user deleted" };
};

exports.newUser = async (params) => {
    const result = await User.create(params);
    return result
};

exports.updateUser = async (params) => {
  const query = {
    where: {
      id: params.userId,
    },
  };
    const result = await User.update(params,query);
    return {message:"user updated"}
};
