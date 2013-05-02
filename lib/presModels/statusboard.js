var gitHubAPI = require("github");

var api = {};


/*
  callback(err, result)
*/
api.commitCount = function(data, callback) {

  callback(null, {
    "Ross Kukulinski": {
      count: 5
    },
    "Matt Whittemore": {
      count: 10
    }
  });
};