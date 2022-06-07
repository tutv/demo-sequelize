'use strict'

const {DataTypes} = require("sequelize")

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('Posts', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.BIGINT
            },

            author_id: {
                type: DataTypes.BIGINT
            },

            title: {
                allowNull: false,
                type: DataTypes.STRING
            },

            created_at: {
                type: DataTypes.DATE
            },

            updated_at: {
                type: DataTypes.DATE
            }
        })
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable('Posts')
    }
}
