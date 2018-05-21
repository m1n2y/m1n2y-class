function Todo(lists, max_id) {
    Editable.call(this, lists, max_id);
}

Todo.prototype = Object.create(Editable.prototype);

Todo.prototype.add = function (data) {
    if (data.title.length > 20)
        return;
    this.$add(data);
}

Todo.prototype.remove = function (id) {
    this.$remove(id);
}

Todo.prototype.update = function (id, new_row) {
    this.$update(id, new_row);
}

Todo.prototype.query = function (id) {
    this.$query(id);
}