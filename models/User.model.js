'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userImage: DataTypes.BLOB('long')
  })

  return User
}
