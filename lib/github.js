var gitHubAPI = require("github");

var api = {};

var GitHubStats = function(user, repo) {
  if (!user || !repo) {
    throw new Error('death!');
  }
  this.user = user;
  this.repo = repo;
  this.defMsg = {
    user: this.user,
    repo: this.repo,
    page: 1,
    per_page: 100
  };
  this.github = new gitHubAPI({
    version: "3.0.0",
    timeout: 5000
  });
};

GitHubStats.prototype = {
  commits: function(callback) {
    this.github.repos.getCommits(this.defMsg, callback);
  }
};

module.exports = GitHubStats;