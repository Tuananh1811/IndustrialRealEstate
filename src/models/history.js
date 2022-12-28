'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class History extends Model {

        static associate(models) {
            // define association here
        }
    };
    History.init({
        clientId: DataTypes.STRING, //=patientId
        employeeId: DataTypes.INTEGER, //=docterid
        description: DataTypes.TEXT,
        files: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'History',
    });
    return History;
};