var Form = require('./Form');
var Tag = require('../api/Tag');

function TagUI(config) {
    var defaultConfig = {
        form: document.querySelector('.tag-form'),
        list: document.querySelector('.tag-list'),
        add_button: document.getElementById('add'),
        onClickList: null,
    };
    var data = [
        {
            id: 1,
            title: 'ungroup',
        },{
            id: 2,
            title: 'study',
        },{
            id: 3,
            title: 'daily',
        },{
            id: 4,
            title: 'sports',
        }
    ];

    config = Object.assign({}, defaultConfig, config);
    Form.call(this, config.form);
    this.config = config;
    this.form = config.form;
    this.list = config.list;
    this._tag = new Tag(data, 4);
    this.data = this._tag.query();
}

TagUI.prototype = Object.create(Form.prototype);
TagUI.constructor = TagUI;

TagUI.prototype.init = function () {
    this.render();
    this.bindEvents();
}

TagUI.prototype.bindEvents = function() {
    var _this = this;
    this.form.addEventListener('submit', function (e) {
        e.preventDefault();
        var row = _this.$$getFormData();
        _this._tag.update(row);
        _this.render();
        _this.$$clearFormData();
        _this.form.hidden = true;
        _this.config.add_button.style.display = 'inline-block';
    });

    this.config.add_button.addEventListener('click', function () {
        _this.form.hidden = !_this.form.hidden;
        this.style.display = 'none';
    });
    
    this.form.addEventListener('click', function (e) {
        var target = e.target;
        if (target.dataset.action == 'add') {
            var row = _this.$$getFormData();
            _this._tag.update(row);
            _this.$$clearFormData();
            this.hidden = true;
            _this.config.add_button.style.display = 'inline-block';
        }
        if (target.dataset.action == 'cancel') {
            this.hidden = true;
            _this.config.add_button.style.display = 'inline-block';
        }
    });

    this.list.addEventListener('click', function (e) {
        var target = e.target;
        var id = target.closest('.tag').dataset.id;
        if (target.dataset.action == 'update') {
            var row = _this._tag.query(id);
            _this.form.hidden = false;
            _this.$$setFormData(row);
        } else if (target.dataset.action == 'remove') {
            _this._tag.remove(id);
            _this.render();
        } else {
            //load tag list
            if (_this.config.onClickList)
                _this.config.onClickList(id);
        }
    });
}

TagUI.prototype.render  =function () {
    this.list.innerHTML = `<div class="tag item" style="background-color: #5eb8db;">All</div>`;
    var _this = this;
    this.data.forEach(function (row) {
        var div = document.createElement('div');
        div.classList.add('row', 'item', 'tag');
        div.dataset.id = row.id;
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

module.exports = TagUI;