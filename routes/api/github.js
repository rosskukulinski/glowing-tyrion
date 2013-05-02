module.exports = function(app){
	app.get('/github/:user_id/repo', function(req, res){
  	res.json({test:"test"});
  });
}