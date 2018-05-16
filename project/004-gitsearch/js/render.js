var ele = require('./element');

function user(users) {
    var html = '';
    users.forEach(function (user) {
        html += '<div class="item">' +
            '       <a class="avatar" target="_blank"><img src="'+user.avatar_url+'"></a>' +
            '       <div class="item-info">' +
            '           <div>'+user.login+'</div>' +
            '           <div>'+user.html_url+'</div>' +
            '       </div>' +
            '    </div>';
    });
    ele.itemContainer.innerHTML = html;
}

module.exports = {
    user: user
};