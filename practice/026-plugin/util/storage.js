function set(key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
}

function get(key) {
    var data = localStorage.getItem(key);
    return JSON.parse(data);
}

module.exports = {
    set: set,
    get: get
};