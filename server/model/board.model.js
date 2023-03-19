const mongoose = require('mongoose')

const BoardSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,

			trim: true,
		},
		tasks: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Task',
			},
		],
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Board', BoardSchema)
