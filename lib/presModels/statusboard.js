var api = {};

/*
  callback(err, result)
*/
api.commitCount = function(data, callback) {

  if (!data)
  {
    callback(new Error('you must give me data to process!'));
  }
  var counts = {};
  for (var i=0; i<data.length; i++) {
    var committer = data[i].committer.login;
    // User already in dict, increment
    if (counts.hasOwnProperty(committer)) {
      counts[committer].numCommits++;
    }
    else {
      counts[committer] = { numCommits: 1 };
    }
  }

  callback(null, counts);
};

module.exports = api;