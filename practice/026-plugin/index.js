// var history = require('./history/history');
//
// history.init({
//     el: 'history-list',
//     onclick: function (keyword) {
//         console.log(keyword);
//     },
//     onDelete: function (keyword) {
//         console.log(keyword);
//     }
// });

var pagination = require('./pagination/pagination');

pagination.init({
    el: 'pagitation',
    limit: 1, // per page
    numOfButton: 5,
    firstPage: true,
    lastPage: true,
    previousPage: true,
    nextPage: true
});