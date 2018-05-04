module.exports = http;

var http = {
    get: get,
    post: post,
};

function get(url, fn) {
    send('get', url, function (data) {
        fn(data);
    });
}

function post(url, fn) {
    send('post', url, fn);
}

function send(method, url, fn) {
    var http = new XMLHttpRequest();
    http.open(method, url);
    http.send();
    http.addEventListener('load', function () {
        var data = this.responseText;
        fn(data);
    })
}
