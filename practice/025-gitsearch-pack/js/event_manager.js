var ele = require('./element');
var share = require('./share');
var search = require('./search');
var render = require('./render');

//bind events to all related elements
function add_event() {
    search_submit();
    activeLoadMore();
}

function search_submit() {
    ele.form.addEventListener('submit', function (e) {
        e.preventDefault();
        share.setKeyword(ele.input.value);
        var option = share.updateOption();
        search.user(option.keyword, function (data) {
            share.setAmount(data.total_count);
            var option = share.updateOption();
            ele.amount.innerText = 'Total: '+ option.amount;
            render.user(data.items);
            if (isLastPage())
                ele.placeholer.hidden = false;
            else
                ele.loadmore.hidden = false;
        });
    });
}

function activeLoadMore() {
    ele.loadmore.addEventListener('click', function () {
        var option = share.updateOption();
        share.setCurrentPage(++option.currentPage);
        option = share.updateOption();
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

function loadHistory() {
    var historyList = localStorage.getItem()
}

module.exports = {
    add_event: add_event
};