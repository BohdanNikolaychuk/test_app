const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

// app
const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

// router

const Board_Router = require('./routers/board.router.js')
const Task_Router = require('./routers/task.router.js')

app.use('/', Board_Router)
app.use('/', Task_Router)
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
