const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Upload extends Model {}

Upload.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        },
        avatar: {
            type: DataTypes.STRING,
        },
        cloudinary_id: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'upload'
    }
);

module.exports = Upload;