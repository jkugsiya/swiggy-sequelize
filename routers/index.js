const UserController = require('../controllers/user.controller')
module.exports = app => {
  app.get('/', (req, res) => {
    res.status(200).send({ message: 'hey there' })
  }),
    app.get('/getUsers', UserController.findAll),
    app.post('/createUser', UserController.create)
}
