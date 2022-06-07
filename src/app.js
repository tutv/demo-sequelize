const express = require('express')
const {sequelize} = require('./sequelize')


const _run = async () => {
    await sequelize.authenticate()

    const app = express()

    app.get('/authors', async (req, res) => {
        try {
            const {Author} = sequelize.models

            // const author = await Author.create({
            //     name: 'Tu TV'
            // })

            const authors = await Author.findAll({
                where: {
                    id: 3
                },
                raw: true
            })

            res.send({authors})
        } catch (error) {
            console.error(error)

            res.send('NOT OK')
        }
    })

    app.get('/', (req, res) => {
        res.send('hello world')
    })

    const port = process.env.PORT || 9000
    app.listen(port, () => {
        console.log(`App is listening on port ${port}`)
    })
}

setImmediate(_run)

