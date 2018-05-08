function findAndDelete(arr, item) {
    if (arr.indexOf(item)) {
        delete arr[arr.indexOf(item)];
    }
}

module.exports = {
    findAndDelete: findAndDelete
};