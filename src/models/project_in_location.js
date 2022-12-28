'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class project_in_location extends Model {

        static associate(models) {

        }
    };
    project_in_location.init({
        projectId: DataTypes.INTEGER,
        locationId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'project_in_location',
    });
    return project_in_location;
};