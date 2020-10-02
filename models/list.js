'use strict';
const axios = require('axios')
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
    imdbid: DataTypes.STRING,
    imdbrating: DataTypes.STRING,
    title: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    zomatoUrl: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'List',
  });
  List.beforeCreate(list => {
    let link = `https://www.imdb.com/title/${list.imdbid}/`

    axios({
      "method": "GET",
      "url": "https://shorturl-sfy-cx.p.rapidapi.com/",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "shorturl-sfy-cx.p.rapidapi.com",
        "x-rapidapi-key": "57d2b3a3acmshb7f10219925d6bfp197592jsnc6d6312c015e",
        "useQueryString": true
      }, "params": {
        "url": link
      }
    })
      .then((response) => {
        list.imdbid = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  })
  return List;
};