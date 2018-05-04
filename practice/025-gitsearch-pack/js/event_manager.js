var ele = require('./element');
var search = require('./search');

//bind events to all related elements
function add_event() {
    search_submit();
}

function search_submit() {
    ele.form.addEventListener('submit', function (e) {
        e.preventDefault();
        var keyword = ele.input.value;
        search.user(keyword, function (data) {
            console.log(data);
            //render_user();
        });
    });
}

module.exports = {
    add_event: add_event
};