function BaseForm(el_form) {
    //如果传的是选择器
    if (typeof el_form === 'string')
        el_form = document.querySelector(el_form);
    this.form = el_form;
}

BaseForm.prototype.$set_form_data = set_form_data;
BaseForm.prototype.$get_form_data = get_form_data;
BaseForm.prototype.$clear_form_data = clear_form_data;

function set_form_data(data) {
    for (var key in data) {
        var input = this.form.querySelector('[name=' + key + ']');
        if (!input)
            return;
        var value = data[key];
        switch (typeof value) {
            case 'number':
            case 'string':
                input.value = value;
                break;
            case 'boolean':
                input.checked = value;
                break;
        }
    }
};

function get_form_data() {
    var data = {};
    var input = this.form.querySelectorAll('[name]');
    input.forEach(function (item) {
        switch (item.nodeName) {
            case 'INPUT':
                switch (item.type) {
                    case 'text':
                    case 'number':
                    case 'hidden':
                        data[item.name] = item.value;
                        break;
                    case 'checkbox':
                    case 'radio':
                        data[item.name] = item.checked;
                        break;
                }
                break;
            case 'SELECT':
                data[item.name] = item.value;
                break;
            case 'TEXTAREA':
                data[item.name] = item.value;
                break;
        }
    });
    return data;
};

function clear_form_data() {
    //这里不用form.reset是因为reset是恢复到表单原始状态 如果表单有默认值 就不会清空
    var input = this.form.querySelectorAll('[name]');
    input.forEach(function (item) {
        switch (item.nodeName) {
            case 'INPUT':
                switch (item.type) {
                    case 'text':
                    case 'number':
                    case 'hidden':
                        item.value = '';
                        break;
                    case 'checkbox':
                    case 'radio':
                        item.checked = false;
                        break;
                }
                break;
            case 'TEXTAREA':
                item.value = '';
                break;
        }
    });
}


function TaskUi(config) {
    var defaultConfig = {
        form: null,
        list: null,
        loadGroupSelect: null,
    };

    config = Object.assign({}, defaultConfig, config);

    BaseForm.call(this, config.form);

    this.list = document.querySelector(config.list);
    this.groupSelect = this.form.querySelector('[name=group]');
    this.config = config;
    this._todo = new Todo([
        {
            id: 1,
            title: 'eat',
            group: 1,
        },
        {
            id: 2,
            title: 'sleep',
            group: 2
        },
    ], 2);

}

TaskUi.prototype = Object.create(BaseForm.prototype);
TaskUi.prototype.constructor = TaskUi;

TaskUi.prototype.init = function () {
    this.render();
    this.activeEvents();
}

TaskUi.prototype.render = function (group_id) {
    var todos = null;
    this.list.innerHTML = '';

    // render by group
    if (group_id) {
        todos = this._todo.filterByGroupID(group_id);
    } else {
        todos = this._todo.$query(); // render all todos
    }
    renderHTML(todos, this);

    // render group select
    if (this.config.loadGroupSelect) {
        var html = '';
        var data = this.config.loadGroupSelect();
        data.forEach(function (groupItem) {
            html += `
                <option value="${groupItem.id}">${groupItem.title}</option>
            `;
        });
        this.groupSelect.innerHTML = html;
    }
}

function renderHTML(todos, _this) {
    if (todos.length == 0) {
        var div = document.createElement('div');
        div.classList.add('todo-item');
        div.innerHTML = 'nothing here';
        _this.list.appendChild(div);
        return;
    }
    todos.forEach(function (todo) {
        var div = document.createElement('div');
        div.classList.add('row', 'todo-item');
        div.dataset.id = todo.id;
        div.innerHTML = `
            <div class="col checkbox">
                <input type="checkbox">
            </div>
            <div class="col detail">
                <div class="title">${todo.title}</div>
            </div>
            <div class="col tool-set">
                <button data-action="update">更新</button>
                <button data-action="remove">删除</button>
            </div>
        `;
        _this.list.appendChild(div);
    });
}

TaskUi.prototype.activeEvents = function () {
    var _this = this;

    //submit form event
    this.form.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = _this.$get_form_data();
        _this._todo.add(data);
        _this.$clear_form_data();
        _this.render();
    });

    //form click event
    this.list.addEventListener('click', function (e) {
        var target = e.target;
        var action = target.dataset.action;
        if (action == 'remove') {
            var id = target.closest('.todo-item').dataset.id;
            _this._todo.remove(id);
            _this.render();
        }
        if (action == 'update') {
            var id = target.closest('.todo-item').dataset.id;
            var row = _this._todo.query(id);
            _this.$set_form_data(row);
        }
    });

}


