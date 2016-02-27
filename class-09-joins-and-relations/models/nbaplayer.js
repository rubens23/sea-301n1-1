"use strict";

module.exports = function(sequelize, DataTypes) {
  var Cat = sequelize.define("nbaPlayer", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  })
  return nbaPlayer;
};
