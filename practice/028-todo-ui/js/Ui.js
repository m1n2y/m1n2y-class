window.Ui = Ui;

function Ui(form_selector, list_selector) {
    this.form = document.querySelector(form_selector);
    this.list = document.querySelector(list_selector);
    this._model = new Model();
}

Ui.prototype.get_form_data = get_form_data;
Ui.prototype.set_form_data = set_form_data;
Ui.prototype.render = render;
Ui.prototype.init = init;
Ui.prototype.bind_form_submit = bind_form_submit;
Ui.prototype.bind_list_click = bind_list_click;

function init() {
    this.render();
    this.bind_form_submit();
    this.bind_list_click();
}

function bind_list_click() {
    var me = this;
    this.list.addEventListener('click', function (e) {
        var target = e.target;
        var is_delete_button = target.classList.contains('remove');
        var is_update_button = target.classList.contains('update');
        var id = target.closest('.todo-item').dataset.id;
        if (is_delete_button) {
            me._model.remove(id);
            me.render();
        }
        if (is_update_button) {
            var row = me._model.query(id);
            me.set_form_data(row);
        }
    });
}

function bind_form_submit() {
    var me = this;
    this.form.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = me.get_form_data();
        if (data.id)
            me._model.update(data);
        else
            me._model.add(data);
        me.form.reset();
        me.render();
    });
}

function render() {
    var me = this;
    this.list.innerHTML = '';
    this._model.list.forEach(function (item) {
        var child = document.createElement('div');
        var html = `
            <div class="row todo-item" data-id="${item.id}">
                <div class="col checkbox">
                    <input type="checkbox">
                </div>
                <div class="col detail">
                    <div class="title">${item.title}</div>
                </div>
                <div class="col tool-set">
                    <button class="update">更新</button>
                    <button class="remove">删除</button>
                </div>
            </div>
        `;
        child.innerHTML = html;
        me.list.appendChild(child);
    });
}

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
            case 'TEXTAREA':
                data[item.name] = item.value;
                break;
        }
    });
    return data;
}

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
}

