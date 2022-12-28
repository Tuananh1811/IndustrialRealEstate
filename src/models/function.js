'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Function extends Model {
        static associate(models) {}
    };
    Function.init({
        Name: DataTypes.STRING
            //projectId: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'Function',
    });
    return Function;
};