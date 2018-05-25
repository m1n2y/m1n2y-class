function Editable(list, max_id) {
    // if (!list)
    //     throw 'list required';
    this.list = list || [];
    this.max_id = max_id || 1;
}

Editable.prototype.$add = function (data) {
    data.id = ++this.max_id;
    this.list.push(data);
}

Editable.prototype.$remove = function (id) {
    var index = getIndexByID(this.list, id);
    this.list.splice(index, 1);
}

Editable.prototype.$update = function (id, new_row) {
    var index = getIndexByID(this.list, id);
    var row = getRowByID(this.list, id);
    this.list[index] = Object.assign({}, row, new_row);
}

Editable.prototype.$query = function (id) {
    if (id)
        return getRowByID(this.list, id);
    return this.list;
}

function getIndexByID(arr, id) {
    return arr.findIndex(function (item) {
        return item.id == id;
    });
}

function getRowByID(arr, id) {
    return arr.find(function (item) {
        return item.id == id;
    });
}