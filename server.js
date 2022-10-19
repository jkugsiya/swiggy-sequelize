const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const models = require('./models')

models.sequelize.sync().then(function () {
  console.log('database connected')
})

require('./routers')(app)

app.get('*', (req, res) => {
  res.status(200).send({ message: 'Hello' })
})

app.listen(3000, () => {
  console.log('server is running on port 3000')
})

module.exports = app
