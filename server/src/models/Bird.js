const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

module.exports = (sequelize, DataTypes) => {
	const Bird = sequelize.define('Bird', {
    birdname: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    userId: DataTypes.INTEGER
  })
  return Bird
}