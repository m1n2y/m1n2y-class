var ele = require('./element');
var share = require('./share');
var search = require('./search');
var render = require('./render');

//bind events to all related elements
function add_event() {
    search_submit();
    activeLoadMore();
}

function updateOption() {
    var option = {
        keyword: share.getKeyword(),
        currentPage: share.getCurrentPage(),
        amount: share.getAmount(),
        totalPage: share.getTotalPage(),
        searchOption: share.getSearchOption()
    };
    return option;
}

function search_submit() {
    ele.form.addEventListener('submit', function (e) {
        e.preventDefault();
        share.setKeyword(ele.input.value);
        var option = updateOption();
        search.user(option.keyword, function (data) {
            share.setAmount(data.total_count);
            var option = updateOption();
            ele.amount.innerText = 'Total: '+ option.amount;
            render.user(data.items);
            console.log(option.totalPage, option.currentPage);

            if (!isLastPage()) {
                ele.loadmore.hidden = false;
            }
        });
    });
}

function activeLoadMore() {
    ele.loadmore.addEventListener('click', function () {
        var option = updateOption();
        share.setCurrentPage(++option.currentPage);
        option = updateOption();
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
    var option = updateOption();
    if (option.totalPage > option.currentPage) {
        return false;
    }
    return true;
}

module.exports = {
    add_event: add_event
};