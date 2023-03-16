const Task = require('../model/task.model.js')
const Board = require('../model/board.model.js')

class TaskController {
	async createTask(req, res) {
		const id = req.params.id
		console.log(id)
		const task = new Task({
			name: req.body.name,
			board: id,
		})

		await task.save()

		const postRelated = await Board.findById(id)

		postRelated.tasks.push(task)

		await postRelated
			.save()
			.then(result => {
				res.json({ message: 'newBoard created!', result })
			})
			.catch(error => {
				res.status(500).json({ error })
			})
	}
}

module.exports = new TaskController()
