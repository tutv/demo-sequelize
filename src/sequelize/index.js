const {Sequelize: Index} = require('sequelize')


const POSTGRESQL_URI = process.env.POSTGRESQL_URI || ''
const sequelize = new Index(POSTGRESQL_URI)

const modelDefiners = [
    require('./models/Author'),
    require('./models/Post')
]

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize)
}

require('./extra-setup').applyExtraSetup(sequelize)

exports.sequelize = sequelize

