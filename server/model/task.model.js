const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			minlength: 2,
			trim: true,
		},
		board: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Board',
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Task', TaskSchema)
