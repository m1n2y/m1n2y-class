var ele = require('./element');

var keyword = '',
    currentPage = 1,
    totalPage = 0,
    amount = 0
;

var searchOption = {
    limit: 20,
    page: 1
};

function setKeyword(val) {
    keyword = val;
}

function getKeyword() {
    return keyword;
}

function setCurrentPage(val) {
    currentPage = val;
}

function getCurrentPage() {
    return currentPage;
}

function setAmount(val) {
    amount = val;
    totalPage = Math.ceil(amount / searchOption.limit);
}

function getAmount() {
    return amount;
}

function getTotalPage() {
    return totalPage;
}

function setSearchOption(newOption) {
    searchOption = Object.assign(searchOption, newOption);
}

function getSearchOption() {
    return searchOption;
}

module.exports = {
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