var ele = require('./element');
var search = require('./search');
var render = require('./render');
var history = require('../plugin/history/history');

var option = {
    keyword: null
};

function activeSearchForm() {
    ele.searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        option.keyword = ele.searchInput.value;
        search.user(option, function (data) {
            ele.totalAmount.innerHTML = 'Total <b>'+data.total_count+'</b> information';
            render.user(data.items);
            history.add(option.keyword);
        });
        console.log('submit');
    });
}

function activeHistoryList() {
    ele.searchInput.addEventListener('focus', function () {
        history.init({
            root: 'history-list',
            onClick: function (keyword) {
                ele.searchInput.value = keyword;
                ele.searchButton.click();
            }
        });
    });
    ele.searchInput.addEventListener('blur', function () {
        setTimeout(function () {
            ele.historyList.hidden = true;
        }, 300);
    });
}

function activeAllEvent() {
    activeSearchForm();
    activeHistoryList();
}

module.exports = {
    activeAllEvent: activeAllEvent
};