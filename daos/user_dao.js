
const models = require("../models");
const User = models.users;

exports.getAllUsers = async () => {
  const result = await User.findAll();
  return result;
};

exports.getUser = async (params) => {
  const { userId } = params;
    const result = await User.findOne({
      where: {
        id: userId,
      },
    });
    return result
};

exports.deleteUser = async (params) => {
    const { userId } = params;
    const result = await User.findOne({
      where: {
        id: userId,
      },
    });
    await result.destroy();
    return { message: "user deleted" };
};

exports.newUser = async (params) => {
  const {
    personal_image,
    full_name,
    address,
    gender,
    mobile,
    email,
    jop,
    salary,
  } = params;
    const result = await User.create({
      personal_image,
      full_name,
      address,
      gender,
      mobile,
      email,
      jop,
      salary,
    });
    return result
};

exports.updateUser = async (params) => {
  const {
    userId,
    personal_image,
    full_name,
    address,
    gender,
    mobile,
    email,
    jop,
    salary,
  } = params;
    const result = await User.update(
      {
        userId,
        personal_image,
        full_name,
        address,
        gender,
        mobile,
        email,
        jop,
        salary,
      },
      {
        where: {
          id: userId,
        },
      }
    );
    return {message:"user updated"}
};

