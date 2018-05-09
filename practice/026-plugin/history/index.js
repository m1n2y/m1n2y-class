var history = require('./history');

history.init({
    el: 'history-list',
    onclick: function (keyword) {
        console.log(keyword);
    },
    onDelete: function (keyword) {
        console.log(keyword);
    }
});

history.add('aa');