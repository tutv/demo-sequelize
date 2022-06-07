exports.applyExtraSetup = (sequelize) => {
    const {Author, Post} = sequelize.models

    Author.hasMany(Post)
}

