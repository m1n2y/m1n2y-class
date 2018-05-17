var max_id = 2;
var todo_list = [
    {
        id: 1,
        name: 'eat',
        completed: false
    },
    {
        id: 2,
        name: 'sleep',
        completed: false
    }
];

function Todo_item(name, completed) {
    this.name = name;
    this.completed = completed;
}

Todo_item.prototype.add = function () {
    this.id = ++max_id;
    todo_list.push(this);
}

Todo_item.prototype.remove = function () {
    var index = get_index_by_id(this.id);
    todo_list.splice(index, 1);
}

Todo_item.prototype.update = function (new_row) {
    //var row = get_row_by_id(this.id);
    var row = Object.assign(this, new_row);
    var index = get_index_by_id(this.id);
    todo_list[index] = row;
}

Todo_item.prototype.query = function (id) {
    if (id)
        return get_row_by_id(id);
    return todo_list;
}