var ele = require('./element.js');

var html = '';

function user(data) {
    data.forEach(function (user) {
        html += '<div class="user">' +
            '    <a class="avatar" target="_blank" href="'+user.html_url+'">' +
            '    <img src="'+user.avatar_url+'">' +
            '    </a>' +
            '    <div class="info">' +
            '    <div class="username">'+user.login+'</div>' +
            '    <div><a target="_blank" href="'+user.repos_url+'"></a></div>' +
            '</div>' +
            '</div>'
        ele.userList.innerHTML = html;
    });
}

module.exports = {
    user: user
}