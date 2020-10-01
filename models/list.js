'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      List.belongsTo(models.User)
    }
  };
  List.init({
    genre: DataTypes.STRING,
    snack: DataTypes.STRING,
    imdbid:DataTypes.STRING,
    imdbrating:DataTypes.STRING,
    title:DataTypes.STRING,
    imgUrl:DataTypes.STRING,
    zomatoUrl:DataTypes.STRING,
    UserId:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};