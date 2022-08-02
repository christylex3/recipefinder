const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');
class Recipes extends Model {}

Recipes.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,

        },

        user_id: DataTypes.INT,
        references: {
            model: "user",
            key: "id",
        }
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Recipes',
    });

module.exports = Recipes;