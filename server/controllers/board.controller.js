const Board = require('../model/board.model.js')
const Task = require('../model/task.model.js')
class BoardController {
	async createBoard(req, res) {
		try {
			let newBoard = new Board(req.body)

			let saveBoard = await newBoard
				.save()
				.then(result => {
					res.json({ message: 'newBoard created!', result })
				})
				.catch(error => {
					res.status(500).json({ error })
				})
		} catch (error) {
			res.send({ error: 'Error' })
		}
	}
	async getAllBoards(req, res) {
		try {
			Board.find()
				.populate('tasks')
				.then(result => {
					res.send(result)
				})
				.catch(error => {
					res.status(500).json({ error })
				})
		} catch (error) {
			res.send({ error: 'Error' })
		}
	}

	async deleteBoard(req, res, next) {
		try {
			const id = req.params.id

			Board.findByIdAndDelete({ _id: id }).then(async removeDashBoard => {
				await Task.deleteMany({ board: id })
				res.send(removeDashBoard)
			})
		} catch (error) {
			res.send({ error: 'Error' })
		}
	}
}

module.exports = new BoardController()
