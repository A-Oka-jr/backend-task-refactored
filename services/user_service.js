const userDao = require("../daos/user_dao.js")
const {
  updateUserValidation,
  newUserValidation,
} = require("../middleware/validation");
const db = require("../database/db");
const models = require("../models");
const User = models.users;

exports.getAllUsers = async () => {
  return userDao.getAllUsers();
};

exports.getUser = async (params) => {
  const { userId } = params;
  if (!userId) throw { message: "userId was not provided", statusCode: 400 };
    return userDao.getUser(params);
};

exports.deleteUser = async (params) => {
  const { userId } = params;
  if (!userId) throw { message: "userId was not provided", statusCode: 400 };
   return userDao.deleteUser(params)
};

exports.newUser = async (params) => {
  const { error } = newUserValidation(params);
  if (error) throw { message: error.details[0].message, statusCode: 400 };
  return userDao.newUser(params);
};

exports.updateUser = async (params) => {
  const { error } = updateUserValidation(params);
  if (error) throw { message: error.details[0].message, statusCode: 400 };
  console.log(params + " this is params");
    return userDao.updateUser(params);
};
