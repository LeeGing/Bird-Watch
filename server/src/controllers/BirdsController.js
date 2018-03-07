// with this import, we can use the user object that we defined in models, inside of our callback
const {Bird} = require('../models')

module.exports = {
	async index (req, res) {
			try {
				const birds = await Bird.findAll()
				res.send(birds)
			} catch (err) {
				res.status(403).send({
					error: 'An error has occured trying to load bird data.'
				})
			}
	},
	async show (req, res) {
			try {
				const bird = await Bird.findById(req.params.birdId)
					res.send(bird)
			} catch (err) {
				res.status(403).send({
					error: 'An error has occured trying to load bird data.'
				})
			}
	},
	async post (req, res) {
			try {
				const bird = await Bird.create(req.body)
        console.log("HEOOLO", req.body)
				res.send(bird)
			} catch (err) {
				res.status(403).send({
					error: 'An error has occured trying to create a bird data.'
				})
			}
	},
	async put (req, res) {
			try {
				// console.log("we at put")
				// call update on req.body, the second param is to declare where we want to updated,
				// we are only updating the bird that matches the bird id
				const bird = await Bird.update(req.body, {
					where: {
						id: req.params.birdId
					}
				})
				res.send(req.body)
			} catch (err) {
				res.status(403).send({
					error: 'An error has occured trying to update bird data.'
				})
			}
	},
	async delete (req, res) {
			try {
				// THIS WORKS BUT THERE IS SOME KIND OF BUG. FIGURE OUT WHAT req.params says. it returns object.
				const {birdId} = req.params
				const bird = await Bird.findById(birdId)
				await bird.destroy()
				res.send(bird)
			} catch (err) {
				res.status(403).send({
					error: 'An error has occured trying to delete bird data.'
				})
			}
	}
}
