function Group(lists, max_id) {
    Editable.call(this, lists, max_id);
}

Group.prototype = Object.create(Editable.prototype);
Group.prototype.constructor = Group;

Group.prototype.add = function (data) {
    if (data.id == 1)
        return;
    if (data.title == ''){
        return;
    }
    if (data.id && data.id != '') {
        // update
        this.$update(data.id, data);
    } else {
        // add
        this.$add(data);
    }
}

Group.prototype.remove = function (id) {
    if (id == 1)
        return;
    this.$remove(id);
}

Group.prototype.update = function (id, new_row) {
    this.$update(id, new_row);
}

Group.prototype.query = function (id) {
    if (id)
        return this.$query(id);
    else
        return this.$query();

}