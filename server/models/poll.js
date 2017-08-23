var mongoose = require('mongoose');

var PollSchema = mongoose.Schema({
	user: String,
	q_text: String,
	option0: {text: String, vote: Number},
	option1: {text: String, vote: Number},
	option2: {text: String, vote: Number},
	option3: {text: String, vote: Number},
},{ timestamps: true })

mongoose.model('Poll', PollSchema)