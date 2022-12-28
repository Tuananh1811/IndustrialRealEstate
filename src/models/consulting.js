//clinic
'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Consulting extends Model {

        static associate(models) {
            // define association here
        }
    };
    Consulting.init({
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        Description: DataTypes.STRING,
        image: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Consulting',
    });
    return Consulting;
};