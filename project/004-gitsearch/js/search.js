var render = require('./render');

function send(method, url, success) {
    var http = new XMLHttpRequest();
    http.open(method, url);
    http.send();
    http.addEventListener('load', function () {
        var data = JSON.parse(this.responseText);
        success(data);
    });
}

// var option = {
//     keyword: 'chiwo',
//     page: 1,
//     per_page: 5
// };

function user(option) {
    var url = 'https://api.github.com/search/users?q='+option.keyword+'&page='+option.page+'&per_page='+option.per_page;
    send('get', url, function (data) {
        console.log(data);
        render.user(data.items);
    });
}

module.exports = {
    user: user
};