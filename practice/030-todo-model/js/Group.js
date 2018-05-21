function Group(lists, max_id) {
    Editable.call(this, lists, max_id);
}

Group.prototype = Object.create(Editable.prototype);

Group.prototype.add = function (data) {
    this.$add(data);
}

Group.prototype.remove = function (id) {
    this.$remove(id);
}

Group.prototype.update = function (id, new_row) {
    this.$update(id, new_row);
}

Group.prototype.query = function (id) {
    this.$query(id);
}