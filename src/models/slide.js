'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Slide extends Model {

        static associate(models) {

        }
    };
    Slide.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Slide',
    });
    return Slide;
};