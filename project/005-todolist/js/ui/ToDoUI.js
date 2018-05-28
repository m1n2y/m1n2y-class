var Form = require('./Form');
var Todo = require('../api/ToDo');

function TodoUI(config) {

    var defaultConfig = {
        form: null,
        list: null,
    };
    config = Object.assign({}, defaultConfig, config);

    if (typeof config.form === 'string')
        config.form = document.querySelector(config.form);
    if (typeof config.list === 'string')
        config.list = document.querySelector(config.list);

    Form.call(this, config.form);
    this.form = config.form;
    this.list = config.list;

    this.data = [
        {
            id: 1,
            title: 'eat',
            tag: 1,
            completed: true,
        },
        {
            id: 2,
            title: 'sleep',
            tag: 1,
            completed: false,
        },
        {
            id: 3,
            title: 'sports',
            tag: 1,
            completed: false,
        },
    ];
    this._todo = new Todo(this.data, 3);

}

TodoUI.prototype = Object.create(Form.prototype);
TodoUI.constructor = TodoUI;

TodoUI.prototype.init = function() {
    this.render();
    this.bindEvents();
}

TodoUI.prototype.render = function () {
    this.list.innerHTML = '';
    var _this = this;
    this.data.forEach(function (row) {
        var div = document.createElement('div');
        div.classList.add('row', 'item', 'todo-item');
        div.dataset.id = row.id;
        div.dataset.tag = row.tag;
        div.innerHTML = `
            <span class="col title">${row.title}</span>
            <span class="col tool">
                <span data-action="update">update</span>
                <span data-action="remove">delete</span>
            </span>
        `;
        _this.list.appendChild(div);
    });
}

TodoUI.prototype.bindEvents = function() {

    var _this = this;

    this.form.addEventListener('submit', function (e) {
        e.preventDefault();
        var row = _this.$$getFormData();
        _this._todo.update(row);
        _this.render();
        //_this.$$clearFormData();
        this.reset(); //keep the default select value
    });

    this.list.addEventListener('click', function (e) {
        var target = e.target;
        if (target.dataset.action == 'update') {
            var todo_item = target.closest('.todo-item');
            var row = {
                id: todo_item.dataset.id,
                title: todo_item.querySelector('.title').innerHTML,
                tag: todo_item.dataset.tag,
            };
            _this.$$setFormData(row);
        }
        if (target.dataset.action == 'remove') {
            var todo_item = target.closest('.todo-item');
            var id = todo_item.dataset.id;
            _this._todo.remove(id);
            _this.render();
        }
    });
}

module.exports = TodoUI;