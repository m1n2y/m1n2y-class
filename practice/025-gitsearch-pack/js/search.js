function user(keyword, on_success) {
    var http = new XMLHttpRequest();
    http.open('get', 'https://api.github.com/search/users?q='+ keyword);
    http.send();
    http.addEventListener('load', function () {
        on_success(this.responseText);
    });
}

module.exports = {
    user: user
};