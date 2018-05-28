function BasicModel(list) {
    this.list = list || [];
}

BasicModel.prototype.$$add = function (row) {
    this.list.push(row);
}

BasicModel.prototype.$$remove = function (id) {
    var index = this.$$getIndexByID(id);
    this.list.splice(index, 1);
}

BasicModel.prototype.$$update = function (row) {
    var index = this.$$getIndexByID(row.id);
    this.list[index] = Object.assign({}, this.list[index], row);
}

BasicModel.prototype.$$read = function () {
    return this.list
}

BasicModel.prototype.$$find = function (id) {
    this.list.find(function (item) {
        return item.id == id;
    });
}

BasicModel.prototype.$$getIndexByID = function (id) {
    return this.list.findIndex(function (item) {
        return item.id == id;
    });
}

module.exports = BasicModel;