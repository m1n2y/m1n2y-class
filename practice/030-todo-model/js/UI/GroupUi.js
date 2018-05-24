function GroupUi(config) {

    var defaultConfig = {
        form: null,
        list: null,
        onItemClick: null,
    };
    config = Object.assign({}, defaultConfig, config);
    var form = config.form,
        list = config.list;

    if (config.onItemClick)
        this.onItemClick = config.onItemClick;

    BaseForm.call(this, form);

    if (typeof form === 'string')
        form = document.querySelector(form);
    if (typeof list === 'string')
        list = document.querySelector(list);

    this.form = form;
    this.list = list;
    this.isUpdating = null; //记录当前是否处于更新状态
    this._group = new Group([
        {
            id: 1,
            title: 'default'
        },
        {
            id: 2,
            title: 'study'
        },
        {
            id: 3,
            title: 'daily'
        }
    ], 3);
}

GroupUi.prototype = Object.create(BaseForm.prototype);
GroupUi.constructor = GroupUi;

GroupUi.prototype.init = function () {
    this.render();
    this.activeEvents();
}

GroupUi.prototype.activeEvents = function () {

    var _this = this;
    var add_button = document.getElementById('add-cat');

    // bind add button
    add_button.addEventListener('click', function () {
        this.hidden = true; // hide button
        _this.form.hidden = false; // show form
        _this.$clear_form_data();
    });

    //bind form click event
    this.form.addEventListener('click', function (e) {
        if (e.target.dataset.action == 'cancel') {
            add_button.hidden = false; // show button
            _this.form.hidden = true; // hide form
            // reposition form
            _this.list.insertAdjacentElement('afterend', _this.form);
        }
    });
    //bind form submit event
    this.form.addEventListener('submit', function (e) {
        e.preventDefault();
        var row = _this.$get_form_data();
        _this._group.add(row);
        _this.$clear_form_data();
        // reposition form
        _this.list.insertAdjacentElement('afterend', _this.form);
        if (_this.isUpdating) {
            _this.form.hidden = true;
            _this.isUpdating = false;
        }
        _this.render();
    });

    //bind list tools events
    this.list.addEventListener('click', function (e) {
        var target = e.target;
        var isUpdate = target.classList.contains('update');
        var isDelete = target.classList.contains('delete');
        var isGroup = target.classList.contains('group');
        if (isDelete) {
            _this.isUpdating = false;
            var id = target.closest('.cat-item').dataset.id;
            _this._group.remove(id);
            _this.render();
        }
        if (isUpdate) {
            _this.isUpdating = true;
            add_button.hidden = false;
            _this.form.hidden = false;
            target.closest('.cat-item').insertAdjacentElement('afterend', _this.form);
            var id = target.closest('.cat-item').dataset.id;
            var row = _this._group.query(id);
            _this.$set_form_data(row);
        }
        if (isGroup) {
            // get click group id and pass out
            var group_id = target.closest('.cat-item').dataset.id;
            _this.onItemClick(group_id);
        }
    });

}

GroupUi.prototype.render = function () {
    var _this = this;
    this.list.innerHTML = '';
    var tags = this._group.query();
    tags.forEach(function (tag) {
        var div = document.createElement('div');
        div.classList.add('cat-item', 'row');
        div.dataset.id = tag.id;

        div.innerHTML = `
            <div class="title">
                <div class="group">${tag.title}</div>
            </div>
            <div class="tool-set">
                ${ tag.id == 1 ? '' : '<span class="update">更新</span><span class="delete">删除</span>' }
            </div>
        `;
        _this.list.appendChild(div);
    });
}
