var GithubStats = require('../../lib/github');

var PresModels = {
	statusboard: require('../../lib/presModels/statusboard'),
	json: require('../../lib/presModels/statusboard')
};

var countCommitsByUserInRepo = function(req, res){
  var apiKey = req.query.apiKey;
	var stats = new GithubStats(req.params.user_id, req.params.repo, apiKey);
  console.log('Request: user: '+req.params.user_id +', repo: '+req.params.repo+', apiKey: '+apiKey);
	stats.commits(function(err, data){
		//GITHUB ERROR
		if(err){
			githubError(res, err);
		}
		else{
      console.log('x-ratelimit-limit: '+data.meta['x-ratelimit-limit']);
      console.log('x-ratelimit-remaining: '+data.meta['x-ratelimit-remaining']);
			toPresModel(req, res, data, "commitCount");
		}
	});
};

var githubError = function(res, err){
	var data = {
		msg: "GITHUB ERROR",
		err: err
	};
	res.json(500, data);
};

var toPresModel = function(req, res, data, collection){
	//TRANSFORM THIS INTO THE WISHED FOR PRES MODEL

	var type = req.query.type;

	var presModel = PresModels[type];

	if(presModel===undefined){
		var response = {
			msg: "TYPE "+type+" IS NOT VALID",
			err: undefined
		};
		res.json(500, response);
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
			};

			for(var i=0; i<result.length; i++){
        var user = result[i];
				output.graph.datasequences[0].datapoints[i] = {title:user.user, value:user.numCommits};
			}

			res.json(output);

		});
	}
};


//ROUTES
module.exports = function(app){
	app.get('/github/:user_id/:repo', countCommitsByUserInRepo);
};
