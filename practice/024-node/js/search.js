var http = require('http.js');

module.exports = search;

var search = {
    search_user: search_user,
    search_repo: search_repo,
};

function search_user(kwd, fn) {
    http.get("https://api.github.com/search/users?q=" + kwd, fn);
}

function search_repo(kwd, fn) {
    http.get("https://api.github.com/search/repositories?q=" + kwd, fn);
}


