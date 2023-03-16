const express = require('express')
const morgan = require('morgan')

const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

// routes
const BoardController = require('./controllers/board.controller.js')
const TaskController = require('./controllers/task.controller.js')

app.post('/board', BoardController.createBoard)
app.get('/board', BoardController.getAllBoards)
app.post('/board/:id/task', TaskController.createTask)
const start = async () => {
	try {
		app.listen(8080)
		await mongoose.connect(
			'mongodb+srv://admin:admin@cluster0.l0lvqbn.mongodb.net/test?retryWrites=true&w=majority'
		)
		console.log(`Server run 8080`)
	} catch (err) {
		console.error(`Error on server startup: ${err.message}`)
	}
}

start()
