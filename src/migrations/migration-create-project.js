'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Projects', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },

            /*
            
            */
            description: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            area: {
                type: Sequelize.STRING
            },
            location: {
                type: Sequelize.STRING
            },
            vacantArea: {
                type: Sequelize.STRING
            },
            commerce: {
                type: Sequelize.STRING
            },
            technical: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Projects');
    }
};