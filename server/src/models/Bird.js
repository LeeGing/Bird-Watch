const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

module.exports = (sequelize, DataTypes) => {
	const Bird = sequelize.define('Bird', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    username: DataTypes.STRING
  })
  return Bird
}