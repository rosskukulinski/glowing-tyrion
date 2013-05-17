var api = {};

/*
  callback(err, result)
*/
api.commitCount = function(data, callback) {

  if (!data)
  {
    callback(new Error('you must give me data to process!'));
  }

  // Iterate over commits, counting commits for each user
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

  // Put data into [{user: 'rossk', numCommits: '50'}] format
  var results = [];
  var users = Object.keys(counts);
  for(i=0; i<users.length; i++){
    var user = users[i];
    var count = counts[users[i]].numCommits;
    results.push({user: user, numCommits: count});
  }

  // Custom sort function by numCommits, most to fewest.
  results.sort(function(a,b){
    if(a.numCommits === b.numCommits) {
      return 0;
    }
    if(a.numCommits < b.numCommits) {
      return 1;
    }
    if(a.numCommits > b.numCommits) {
      return -1;
    }
  });

  callback(null, results);
};

module.exports = api;
