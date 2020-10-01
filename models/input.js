'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Input extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Input.init({
    type: {
      type: DataTypes.STRING,
      validate: {
        notNull: {
          args: true,
          msg: 'cannot be empty'
        },
        notEmpty: {
          args: true,
          msg: 'cannot be empty'
        }
      }
    },
    snack: {
      type: DataTypes.STRING,
      validate: {
        notNull: {
          args: true,
          msg: 'cannot be empty'
        },
        notEmpty: {
          args: true,
          msg: 'cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Input',
  });
  return Input;
};