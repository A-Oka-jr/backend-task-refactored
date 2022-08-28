'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post}) {
      // define association here
      this.hasMany(Post,{foreignKey:'userId'})
    }
  }
  user.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
      },
      personal_image: DataTypes.STRING,
      full_name: DataTypes.STRING,
      address: DataTypes.STRING,
      gender: DataTypes.STRING,
      mobile: DataTypes.STRING,
      email: DataTypes.STRING,
      jop: DataTypes.STRING,
      salary: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return user;
};