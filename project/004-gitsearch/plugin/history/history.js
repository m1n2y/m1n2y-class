var arr,
    root;

function init(option) {
    if (!option.root)
        throw 'invalid root element';
    root = document.getElementById(option.root);
    if (!root)
        throw 'invalid root element';
    arr = get('history') || [];
    console.log(arr);
    if (arr.length == 0) {
        root.hidden = true;
        return;
    }
    root.hidden = false;
    render(arr);
    bindClickEvent(option);
}

function addHistory(val) {
    arr = find_and_delete(val, arr);
    arr.unshift(val);
    set('history', arr);
    render(arr);
}

function deleteHistory(val) {
    arr = find_and_delete(val, arr);
    set('history', arr);
    render(arr);
}

function clearAllHistory() {
    arr = [];
    set('history', arr);
    render(arr);
}

function find_and_delete(val, arr) {
        var index = arr.indexOf(val);
        if (index >= 0) {
            arr.splice(index, 1);
        }
    return arr;
}

function render(items) {
    if (items.length == 0) {
        root.innerHTML = '';
        root.hidden = true;
    }
    var html = '';

    items.forEach(function (item) {
        html += '<div class="history-item" data-val="'+item+'">' +
            '       <label class="history-text">'+item+'</label>' +
            '       <span class="del">delete</span>' +
            '    </div>';
    });
    html += '<div class="clear">clear all</div>';
    root.innerHTML = html;
}

function bindClickEvent(option) {
    root.addEventListener('click', function (e) {
        var target = e.target;
        if (target.classList.contains('history-text')) {
            if (option.onClick)
                option.onClick(target.closest('.history-item').dataset.val);
        }
        if (target.classList.contains('del')) {
            var tmp = target.closest('.history-item').dataset.val;
            deleteHistory(tmp);
            render(arr);
        }
        if (target.classList.contains('clear')) {
            clearAllHistory();
            render(arr);
        }
    });
}

function get(key) {
    var tmp = localStorage.getItem(key);
    return JSON.parse(tmp);
}

function set(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

module.exports = {
    init: init,
    add: addHistory,
    del: deleteHistory,
    clear: clearAllHistory
};