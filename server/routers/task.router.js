const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/task.controller.js')

router.post('/board/:id/task', TaskController.createTask)
router.delete('/task/:taskId', TaskController.deleteTask)

module.exports = router
