var el,
    currentPage = 10,
    totalPage = 20
;

var config = {
    limit: 5, // per page
    numOfButton: 5,
    firstPage: false,
    lastPage: false,
    previousPage: false,
    nextPage: false
};

function init(option) {
    config = Object.assign(config, option);
    if (!config.el)
        throw "invalid element";
    el = document.getElementById(config.el);
    if (!el)
        throw "invalid element";

    generateButtons(currentPage, totalPage);
}

function generateButtons(currentPage, totalPage) {
    el.innerHTML = '';

    if (config.firstPage)
        createButton('First');
    if (config.previousPage)
        createButton('Previous');

    generateMainButtons(currentPage, totalPage);

    if (config.nextPage)
        createButton('Next');
    if (config.lastPage)
        createButton('Last');
}

function generateMainButtons(currentPage, totalPage) {

    var numOfButton = config.numOfButton;
    var mean = Math.ceil(numOfButton / 2);

    if (currentPage <= mean) { //reaching left

        for (var i=1; i<=numOfButton; i++) {
            createButton(i, 'click', function (i) {
                currentPage = i;
                generateButtons(currentPage, totalPage);
            });
        }

    } else if (currentPage > totalPage - mean) { //reaching right

        for (var i = totalPage-numOfButton+1; i<=totalPage; i++) {
            createButton(i, 'click', function (i) {
                currentPage = i;
                generateButtons(currentPage, totalPage);
            });
        }

    } else {

        for (var i= currentPage+1-mean; i<=currentPage+mean-1; i++) { // in the middle
            createButton(i, 'click', function (i) {
                currentPage = i;
                generateButtons(currentPage, totalPage);
            });
        }

    }
}

function createButton(val, event, fn) {
    var btn = document.createElement('button');
    btn.value = val;
    btn.innerText = val;
    btn.addEventListener(event, function(){
        return function () {
            fn(val, btn);
        }
    }());
    el.appendChild(btn);
}

module.exports = {
    init: init,
    config: config
};