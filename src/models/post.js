'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {

        static associate(models) {

        }
    };
    Post.init({
        title: DataTypes.STRING,
        descriptionShort: DataTypes.STRING,
        descriptionTall: DataTypes.STRING,
        image: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Post',
    });
    return Post;
};