window.Model = Model;

function Model() {
    this.max_id = 2;
    this.list = [{
        id: 1,
        title: 'eat',
        completed: true
    },{
        id: 2,
        title: 'sleep',
        completed: false
    }];
}

Model.prototype.add = add;
Model.prototype.remove = remove;
Model.prototype.update = update;
Model.prototype.query = query;
Model.prototype.get_row_by_id = get_row_by_id;
Model.prototype.get_index_by_id = get_index_by_id;

function add(data) {
    data.id = ++this.max_id;
    this.list.push(data);
}

function remove(id) {
    var index = get_index_by_id(this.list, id);
    this.list.splice(index, 1);
}

function update(data) {
    var index = get_index_by_id(this.list, data.id);
    var row = get_row_by_id(this.list, data.id);
    this.list[index] = Object.assign(row, data);
}

function query(id) {
    if (id) {
        var item = get_row_by_id(this.list, id);
        return item;
    }
    return this.list;
}

function get_index_by_id(arr, id) {
    // arr.forEach(function (item, index) {
    //     if (item.id == id) {
    //         return index;
    //     }
    // });

    arr.findIndex(function (item) {
        return item.id == id;
    });
}

function get_row_by_id(arr, id) {
    // arr.forEach(function (item, index) {
    //     return item.id == id;
    // });

    return arr.find(function (item) {
        return item.id == id;
    });
}