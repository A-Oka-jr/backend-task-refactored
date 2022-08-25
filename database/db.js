const Sequelize = require("sequelize");

const sequelize = new Sequelize("user", "root", "12345678", {
  host: "localhost",
  dialect: "mysql",
//   operatorsAliases: false,
  
});



module.exports = sequelize;
global.sequelize = sequelize;
 