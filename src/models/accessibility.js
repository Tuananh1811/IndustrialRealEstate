'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Accessibility extends Model {

        static associate(models) {
                // define association here
                // 
            }
            //
    };
    Accessibility.init({
        Title: DataTypes.STRING,
        parameter: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Accessibility',
    });
    // 
    return Accessibility;

};