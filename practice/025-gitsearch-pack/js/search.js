function send(method, url, fn) {
    var http = new XMLHttpRequest();
    http.open(method, url);
    http.send();
    http.addEventListener('load', function () {
        fn(JSON.parse(this.responseText));
    });
}

function user(keyword, on_success, option) {
    option = Object.assign({
        limit: 5,
        page: 1
    }, option);
    var url = 'https://api.github.com/search/users?q='+keyword+'&page='+option.page+'&per_page='+option.limit;
    send('get', url, function (data) {
        on_success(data);
    });
}

module.exports = {
    user: user
};