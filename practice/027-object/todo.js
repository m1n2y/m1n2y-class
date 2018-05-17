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

function add(row) {
    row.id = ++max_id;
    todo_list.push(row);
}

function remove(id) {
    var index = get_index_by_id(todo_list, id);
    if (index < 0)
        return;
    todo_list.splice(index, 1);
}

function update(id, new_row) {
    var old_row = get_row_by_id(todo_list, id);
    var index = get_index_by_id(todo_list, id);
    todo_list[index] = Object.assign(old_row, new_row);
}

function query(arr, id) {
    if (id)
        return get_row_by_id(arr, id);
    return todo_list;
}

function get_index_by_id(arr, id) {
    return arr.findIndex(function (item) {
        return item.id == id;
    })
}

function get_row_by_id(arr, id) {
    return arr.find(function (item) {
        return item.id == id;
    })
}
