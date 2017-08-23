var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = {
	getAll: function(req, res) {
		Poll.find({})
		.then(polls => {
			res.json(polls);
		})
		.catch(errors => { console.log(errors) });
	},
	getOne: function(req, res) {
		Poll.findOne({_id: req.params.id})
		.then(poll => {
			res.json(poll);
		})
		.catch(errors => { console.log(errors) });
	},
	create: function(req, res) {
		var poll = new Poll(req.body);
		poll.save()
		.then( () => {
			console.log("successfully created a question");
			res.json(true);
		})
		.catch(errors => { console.log(errors) });
	},
	upvote: function(req, res) {
		var option = req.params.opt
		Poll.findOne({_id: req.params.id}, function(errors, poll){
			if (errors){
				console.log(errors);
				res.status(500).json(errors);
			} else {
				poll[option].vote++;
				poll.save(errors => {
					if (errors){
						res.status(500).json(erorrs);
					} else {
						res.json(true);
					}
				})
			}
		})
	},
	delete: function(req, res){
		Poll.remove({_id: req.params.id}, function(errors, results){
			if (errors){
				console.log(errors);
				res.status(500).json(errors);
			} else {
				console.log('Deleted', req.params.id);
				res.json(true);
			}
		})
	}
}