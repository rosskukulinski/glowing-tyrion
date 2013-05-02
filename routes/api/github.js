var GithubStats = require('../../lib/github');

var PresModels = {
	statusboard: require('../../lib/presModels/statusboard'),
	json: require('../../lib/presModels/statusboard')
}

var countCommitsByUserInRepo = function(req, res){

	console.log("I AM HERE");

	var stats = new GithubStats(req.params.user_id, req.params.repo);
	stats.commits(function(err, data){
		//GITHUB ERROR
		if(err){
			githubError(res, err);
		}
		else{
			toPresModel(req, res, data, "commitCount");
		}
	});
}

var githubError = function(res, err){
	var data = {
		msg: "GITHUB ERROR",
		err: err
	}
	res.json(500, data);
}

var toPresModel = function(req, res, data, collection){
	//TRANSFORM THIS INTO THE WISHED FOR PRES MODEL
	
	var type = req.query.type;

	var presModel = PresModels[type];

	if(presModel==undefined){
		var data = {
			msg: "TYPE "+type+" IS NOT VALID",
			err: undefined
		}
		res.json(500, data);
	}
	else{
		//transform data into the right collection of this pres model
		presModel[collection](data, function(err, result){
			
			var output = {
				graph: {
					title: req.params.repo,
					datasequences: [
						{
							title: req.params.user_id,
							datapoints:[

							]
						}
					]
				}
			}

			var users = Object.keys(result);
			for(var i=0; i<users.length; i++){
				output.graph.datasequences[0].datapoints[i] = {title:users[i], value:result[users[i]].numCommits};
			}

			res.json(output);

		});
	}
}


//ROUTES
module.exports = function(app){
	app.get('/github/:user_id/:repo', countCommitsByUserInRepo);
}