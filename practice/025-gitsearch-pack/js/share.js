var ele = require('./element');

var keyword = '',
    currentPage = 1,
    totalPage = 0,
    amount = 0
;

var searchOption = {
    limit: 5,
    page: 1
};

function setKeyword(val) {
    keyword = val;
    return updateOption();
}

function getKeyword() {
    return keyword;
}

function setCurrentPage(val) {
    currentPage = val;
    return updateOption();
}

function getCurrentPage() {
    return currentPage;
}

function setAmount(val) {
    amount = val;
    totalPage = Math.ceil(amount / searchOption.limit);
    return updateOption();
}

function getAmount() {
    return amount;
}

function getTotalPage() {
    return totalPage;
}

function setSearchOption(newOption) {
    searchOption = Object.assign(searchOption, newOption);
    return updateOption();
}

function getSearchOption() {
    return searchOption;
}

function updateOption() {
    var option = {
        keyword: getKeyword(),
        currentPage: getCurrentPage(),
        amount: getAmount(),
        totalPage: getTotalPage(),
        searchOption: getSearchOption()
    };
    return option;
}

module.exports = {
    updateOption: updateOption,
    setKeyword: setKeyword,
    getKeyword: getKeyword,
    setCurrentPage: setCurrentPage,
    getCurrentPage: getCurrentPage,
    setAmount: setAmount,
    getAmount: getAmount,
    getTotalPage: getTotalPage,
    setSearchOption: setSearchOption,
    getSearchOption: getSearchOption
};