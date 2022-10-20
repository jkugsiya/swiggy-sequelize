const User = require('../models').User
module.exports = {
  create: async (req, res) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.userImage) {
      return res
        .status(400)
        .send({ message: 'firstName, lastName and userImage are required' })
    }
    await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userImage: req.body.userImage
    })
    return res.status(200).json({ message: 'User created' })
  },
  findAll: async (req, res) => {
    return res.status(200).json(await User.findAll())
  }
}
