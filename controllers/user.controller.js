const User = require('../models').User
module.exports = {
  create: async (req, res) => {
    console.log(req.body)
    if (!req.body.firstName) {
      return res.status(400).send({ message: 'name is required' })
    }
    await User.create({
      firstName: req.body.firstName
    })
    return res.status(200).json({ message: 'User created' })
  },
  findAll: async (req, res) => {
    return res.status(200).json(await User.findAll())
  }
}
