const {Model, DataTypes} = require("sequelize")


module.exports = (sequelize) => {
    class Post extends Model {

    }

    Post.init({
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT
        },

        title: {
            allowNull: false,
            type: DataTypes.STRING
        },

        created_at: {
            type: DataTypes.DATE,
        },

        updated_at: {
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

    return Post
}

