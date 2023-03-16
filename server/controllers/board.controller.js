const Board = require('../model/board.model.js')

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
			res.send(error)
		}
	}
	async getAllBoards(req, res) {
		Board.find()
			.populate('tasks')
			.then(result => {
				res.json(result)
			})
			.catch(error => {
				res.status(500).json({ error })
			})
	}
}

module.exports = new BoardController()
