require('dotenv').config({
    path: require('path').join(__dirname, '.env')
})

setImmediate(() => {
    require('./src/app')
})