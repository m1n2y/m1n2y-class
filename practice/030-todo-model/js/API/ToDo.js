function Todo(list, max_id) {
    Editable.call(this, list, max_id);
}

Todo.prototype = Object.create(Editable.prototype);
Todo.prototype.constructor = Todo;

Todo.prototype.add = function (data) {
    if (data.id && data.id != '') {
        // update
        this.update(data.id, data);
    } else {
        //add
        if (data.title.length > 20 || data.title.length <= 0)
            return;
        if (!data.group)
            data.group = 1;
        this.$add(data);
    }
}

Todo.prototype.remove = function (id) {
    this.$remove(id);
}

Todo.prototype.update = function (id, new_row) {
    this.$update(id, new_row);
}

Todo.prototype.query = function (id) {
    if (id) {
        return this.$query(id);
    }
    return this.$query();
}

Todo.prototype.filterByGroupID = function (group_id) {
    return this.list.filter(function (item) {
        return item.group == group_id;
    });
}

Todo.prototype.removeByGroupID = function (group_id) {
    this.list = this.list.filter(function (item) {
        return item.group != group_id;
    });
}

Todo.prototype.changGroupIDto = function (group_id, new_group_id) {
    var _this = this;
    var tmp_todos = this.list.filter(function (item) {
        return item.group == group_id;
    });
    tmp_todos.forEach(function (todo) {
        todo.group = new_group_id;
        _this.update(todo.id, todo);
    });
}

