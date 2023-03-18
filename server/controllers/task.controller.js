const Task = require('../model/task.model.js')
const Board = require('../model/board.model.js')

class TaskController {
	async createTask(req, res) {
		try {
			const id = req.params.id

			const task = new Task({
				name: req.body.name,
				board: id,
			})

			await task.save()

			const postRelated = await Board.findById(id)

			postRelated.tasks.push(task)

			await postRelated
				.save()
				.then(() => {
					res.json({ message: 'newBoard created!', result: task })
				})
				.catch(error => {
					res.status(500).json({ error })
				})
		} catch (error) {
			res.send({ error: 'Error' })
		}
	}

	async deleteTask(req, res) {
		try {
			const { taskId } = req.params

			let removeTask = await Task.findOneAndRemove({ _id: taskId })
			res.send(removeTask)
		} catch (error) {
			res.send({ error: 'Error' })
		}
	}
}

module.exports = new TaskController()
