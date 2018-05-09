function findAndDelete(arr, item) {
    if (arr.indexOf(item) !== -1) {
        arr.splice(arr.indexOf(item), 1);
    }
}

module.exports = {
    findAndDelete: findAndDelete
};