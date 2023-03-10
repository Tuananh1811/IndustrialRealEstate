'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {

        static associate(models) {
            // define association here
        }
    };
    Allcode.init({
        key: DataTypes.STRING,
        type: DataTypes.STRING,
        valueEn: DataTypes.STRING,
        valueVi: DataTypes.STRING,
        valueJa: DataTypes.STRING,
        valueKr: DataTypes.STRING,
        valueZh: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Allcode',
    });
    return Allcode;
};