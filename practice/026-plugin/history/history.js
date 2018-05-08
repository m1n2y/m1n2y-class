var helper = require('../util/helper');
var storage = require('../util/storage');

var el, arr;

function init(config) {
    el = document.getElementById(config.el);
    on_click = config.onclick;
    on_delete = config.onDelete;
    add(11);
}

function add(val) {
    arr = storage.get('history') || [];
    helper.findAndDelete(arr, val);
    arr.push(val);
    storage.set('history', arr);
    render(arr);
}

function remove(val) {
    arr = storage.get('history');
    helper.findAndDelete(arr, vale);
    if (arr.length !== 0)
        storage.set('history', arr);
    render(arr);
}

function clear() {
    storage.set('history', []);
    render(arr);
}

function render(arr) {
    el.innerHTML = '';
    if (arr.length == 0)
        return;
    arr.forEach(function (keyword) {
        var el_history = document.createElement('div');
        el_history.classList.add('history');
        el_history.innerHTML = '<div class="text">'+keyword+'</div>\n' +
            '            <div class="tool"><span class="delete">delete</span></div>';
        el.appendChild(el_history);
        el_history.addEventListener('click', function (e) {
            on_click(keyword, e);
        });
        el_history.getElementsByClassName('delete').[0].addEventListener('click', function (e) {
            remove(keyword);
            on_delete(keyword, e);
        });
    });
}

module.exports = {
    init: init,
};