var history = require('./history');

(function () {

    history.init({
        "el": 'history-list',
        "onclick": function () {
            console.log("click");
        },
        "onDelete": function () {
            console.log("delete");
        }
    });

})();