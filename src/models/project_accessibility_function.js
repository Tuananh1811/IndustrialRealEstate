 'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class project_accessibility_function extends Model {

        static associate(models) {

        }
    };
    project_accessibility_function.init({
        projectId: DataTypes.INTEGER,
        accessibilityId: DataTypes.INTEGER,
        functionId: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'project_accessibility_function',
    });
    return project_accessibility_function;
};