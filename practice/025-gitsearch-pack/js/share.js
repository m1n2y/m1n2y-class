var ele = require('./element');

var keyword, currentPage, totalPage;

function setKeyword(val) {
    keyword = val;
    return keyword;
}

function getKeyword() {
    return keyword;
}

function setCurrentPage(val) {
    currentPage = val;
    return currentPage;
}

function getCurrentPage() {
    return currentPage;
}

function setTotalPage(val) {
    totalPage = val;
    return totalPage;
}

function getTotalPage() {
    return totalPage;
}

module.exports = {
    setKeyword: setKeyword,
    getKeyword: getKeyword,
    setCurrentPage: setCurrentPage,
    getCurrentPage: getCurrentPage,
    setTotalPage: setTotalPage,
    getTotalPage: getCurrentPage,
};