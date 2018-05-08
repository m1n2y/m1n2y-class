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
        var keyword = share.setKeyword(ele.input.value);
        var currentPage = share.setCurrentPage(1);
        search.user(keyword, function (data) {
            var amount = data.total_count
            ele.amount.innerText = 'Total: '+ amount;
            render.user(data.items);
            if (!isLastPage(amount)) {
                ele.loadmore.hidden = false;
            }
        });
    });
}

function activeLoadMore() {
    var currentPage = share.setCurrentPage(++currentPage);
    var keyword = share.getCurrentPage();
    ele.loadmore.addEventListener('click', function () {
        search.user(keyword, function (data) {
            render.user(data.items);
            if (isLastPage(data.total_count)) {
                ele.loadmore.hidden = true;
                ele.placeholer.hidden = false;
            }
        }, {page: currentPage});
    });

}

function isLastPage(total) {
    var currentPage = share.getCurrentPage();
    var totalPages = share.setTotalPage(Math.ceil(total / 5));
    if (totalPages > currentPage) {
        return false;
    }
    return true;
}

module.exports = {
    add_event: add_event
};