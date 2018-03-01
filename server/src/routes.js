const AuthenticationController = require ('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const BirdsController = require('./controllers/BirdsController')

const BirdsControllerPolicy = require('./policies/BirdsControllerPolicy')

module.exports = (app) => {
	app.post('/register', 
		AuthenticationControllerPolicy.register, 
		AuthenticationController.register),

	app.post('/login', 
		AuthenticationController.login),

	app.get('/birds', 
		BirdsController.index),

	app.post('/birds',
    // BirdsControllerPolicy.post,
		BirdsController.post),

	app.get('/birds/:birdId',
		BirdsController.show),

	app.put('/birds/:birdId',
    // BirdsControllerPolicy.put,
		BirdsController.put),

	app.delete('/birds/:birdId',
		BirdsController.delete)
}

