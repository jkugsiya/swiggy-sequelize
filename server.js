const express = require('express')
const bodyParser = require('body-parser')
const app = express()
//use cors
const cors = require('cors')
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const models = require('./models')

models.sequelize.sync({ force: true }).then(function () {
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
