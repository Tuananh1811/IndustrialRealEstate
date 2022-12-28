'use strict';
//clinic
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Project extends Model {

        static associate(models) {

        }
    };
    Project.init({

        name: DataTypes.STRING,

        description: DataTypes.STRING,
        area: DataTypes.STRING,
        location: DataTypes.STRING,
        vacantArea: DataTypes.STRING,
        commerce: DataTypes.STRING,
        technical: DataTypes.STRING,
        image: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Project',
    });
    return Project;
};