const express = require('express')
const router = express.Router()
// routes
const BoardController = require('../controllers/board.controller.js')

router.post('/board', BoardController.createBoard)
router.get('/board', BoardController.getAllBoards)
router.delete('/board/:id', BoardController.deleteBoard)

module.exports = router
