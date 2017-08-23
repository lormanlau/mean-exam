var path = require('path');
var poll = require('./../controllers/polls.js');

module.exports = function(app){
	app.get('/polls', poll.getAll);
	app.get('/polls/:id', poll.getOne);
	app.post('/polls', poll.create);
	app.get('/polls/:id/:opt', poll.upvote);
	app.delete('/polls/:id', poll.delete);
	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve("./../public/dist/index.html"))
	});
}