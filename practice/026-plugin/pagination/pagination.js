var el,
    current = 1,
    numOfButton,
    totalPage,
    el_pagesPagination;
;

var config = {
    totalAmount: null,
    limit: null,
    numOfButton: 5,
    currentPage: 1,
    firstPage: true,
    lastPage: true,
    previousPage: true,
    nextPage: true
};

function init(userConfig) {
    config = Object.assign(config, userConfig);
    if (!config.el)
        throw "invalid element";
    el = document.getElementById(config.el);
    if (!el)
        throw "invalid element";
    totalPage = Math.ceil(config.totalAmount / config.limit);
    numOfButton = config.numOfButton;
    if (numOfButton > totalPage)
        numOfButton = totalPage;

    renderFrame();
    current = config.currentPage || 1;
    generateMainButtons(current, totalPage);

    el.addEventListener('click', function (e) {
        var target = e.target;

        if (target.classList.contains('prevPagination')) {
            current--;
        } else if (target.classList.contains('nextPagination')) {
            current++;
        } else if (target.classList.contains('firstPagination')) {
            current = 1;
        } else if (target.classList.contains('lastPagination')) {
            current = totalPage;
        } else {
            current = parseInt(target.value);
        }
        generateMainButtons();
    });
}

function renderFrame() {
    var html = '';

    html += '<div class="headPagination">';
    if (config.firstPage)
        html += '<button class="firstPagination">First</button>';
    if (config.previousPage)
        html += '<button class="prevPagination">Prev</button>';
    html += '</div><div id="pagesPagination" class="pagesPagination"></div><div class="tailPagination">';
    if (config.nextPage)
        html += '<button class="nextPagination">Next</button>';
    if (config.lastPage)
        html += '<button class="lastPagination">Last</button>';
    html += '</div>';

    el.innerHTML = html;
    el_pagesPagination = document.getElementById('pagesPagination');
}

function generateMainButtons() {
    el_pagesPagination.innerHTML = '';

    var mean = Math.ceil(numOfButton / 2);

    if (current < 1) {
        current = 1;
    }
    if (current > totalPage)
        current = totalPage;

    var start = current - mean + 1,
        end = current + mean - 1;

    if (start < 1 || numOfButton == totalPage) {
        start = 1;
        end = numOfButton;
    }
    if (end > totalPage) {
        start = totalPage - numOfButton + 1;
        end = totalPage;
    }

    for (var i = start; i <= end; i++) {
        createButton(i);
    }
}

function createButton(val) {
    var btn = document.createElement('button');
    btn.value = val;
    btn.innerText = val;
    if (val == current)
        btn.classList.add('active');
    el_pagesPagination.append(btn);
}

module.exports = {
    init: init,
    config: config
};