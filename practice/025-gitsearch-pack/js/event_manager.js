var ele = require('./element');
var share = require('./share');
var search = require('./search');
var render = require('./render');
var history = require('../plugin/history');
var pagination = require('../plugin/pagination');

//bind events to all related elements
function add_event() {
    search_submit();
    //activeLoadMore();
    activeHistory();
}

function activeHistory() {
    ele.input.addEventListener('focus', function () {
        ele.historyList.hidden = false;
        history.init({
            "el": 'history-list',
            "onclick": function (keyword) {
                ele.input.value = keyword;
                ele.form.querySelector('button[type=submit]').click();
            }
        });
    });
    document.addEventListener('click', function (e) {
        if (e.target == ele.input)
            return
        ele.historyList.hidden = true;
    });
}

function search_submit() {
    ele.form.addEventListener('submit', function (e) {
        e.preventDefault();
        var option = share.setKeyword(ele.input.value);
        search.user(option.keyword, function (data) {
            option = share.setAmount(data.total_count);
            ele.amount.innerText = 'Total: '+ option.amount;
            render.user(data.items);
            if (isLastPage())
                ele.placeholer.hidden = false;
            else
                ele.loadmore.hidden = false;

            //init pagination
            if (option.amount > 0)
                activePagination();
        });
        history.add(option.keyword);
    });
}

function activePagination() {
    ele.pagination.hidden = false;
    var option = share.updateOption();
    pagination.init({
        el: 'pagination-container',
        totalAmount: option.amount,
        limit: option.searchOption.limit,
        numOfButton: 5,
        currentPage: 1,
        onChange: function (current) {
            option = share.setCurrentPage(current);
            search.user(option.keyword, function (data) {
                render.user(data.items);
            }, {page: option.currentPage});
        }
    });
}

function activeLoadMore() {
    ele.loadmore.addEventListener('click', function () {
        var option = share.updateOption();
        option = share.setCurrentPage(++option.currentPage);
        search.user(option.keyword, function (data) {
            render.user(data.items);
            if (isLastPage()) {
                ele.loadmore.hidden = true;
                ele.placeholer.hidden = false;
            }
        }, {page: option.currentPage});
    });

}

function isLastPage() {
    var option = share.updateOption();
    if (option.totalPage > option.currentPage) {
        return false;
    }
    return true;
}

module.exports = {
    add_event: add_event
};