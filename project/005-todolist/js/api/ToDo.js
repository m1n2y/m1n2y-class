var BasicModel = require('./BasicModel');

function ToDo(list, max_id) {
    BasicModel.call(this, list);
    this.max_id = max_id || 1;
}

ToDo.prototype = Object.create(BasicModel.prototype);
ToDo.constructor = ToDo;

ToDo.prototype.update = function (todo) {
    if (!(todo.title && todo.title != ''))
        return;
    if (!todo.tag)
        todo.tag = 1;
    
    if (todo.id) {
        this.$$update(todo);
    } else {
        todo.id = ++this.max_id;
        this.$$add(todo);
    }
}

ToDo.prototype.remove = function (id) {
    if (this.$$getIndexByID(id) != -1)
        this.$$remove(id);
}

ToDo.prototype.query = function (id) {
    if (id) {
        return this.$$find(id);
    }

    return this.$$read();
}

ToDo.prototype.queryByTagID = function (tagID) {
    return this.list.filter(function (row) {
        row.tag_id = tagID;
    });
}

module.exports = ToDo;