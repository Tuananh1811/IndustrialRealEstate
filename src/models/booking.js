'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {

        static associate(models) {

        }
    };
    //
    Booking.init({
        statusId: DataTypes.STRING,
        employeeId: DataTypes.INTEGER,
        clientId: DataTypes.STRING, //bảng user
        date: DataTypes.DATE,
        timeType: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};