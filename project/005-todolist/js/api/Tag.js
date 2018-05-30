var BasicModel = require('./BasicModel');

function Tag(list, max_id) {
    BasicModel.call(this, list);
    this.max_id = max_id || 1;
}

Tag.prototype = Object.create(BasicModel.prototype);
Tag.constructor = Tag;

Tag.prototype.update = function (tag) {
    if (!tag.title || tag.id == 1)
        return;

    if (tag.id) {
        this.$$update(tag);
    } else {
        tag.id = ++this.max_id;
        this.$$add(tag);
    }
}

Tag.prototype.remove = function (id) {
    if (id == 1)
        return;
    if (this.$$getIndexByID(id) != -1)
        this.$$remove(id);
}

Tag.prototype.query = function (id) {
    if (id) {
        return this.$$find(id);
    }

    return this.$$read();
}

module.exports = Tag;