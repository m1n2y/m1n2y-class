var history = require('./history/history');

history.init({
    el: 'history-list',
    onclick: function (keyword) {
        console.log(keyword);
    },
    onDelete: function (keyword) {
        console.log(keyword);
    }
});

var pagination = require('./pagination/pagination');

pagination.init({
    el: 'pagination',
    totalAmount: 10,
    limit: 2,
    numOfButton: 5,
    currentPage: 3,
    onChange: function (current) {
        console.log(current);
    }
});