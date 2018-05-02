(function () {
    "use strict"

    var el_input = document.getElementById('kwd'),
        el_form = document.getElementById('form');
    
    init();
    
    function init() {
        el_form.addEventListener('submit', function (e) {
            e.preventDefault();
            search.search_user(el_input.value, function (data) {
                console.log(1);
            });
            search.search_repo(el_input.value, function (data) {
                console.log(2);
            });
        })
    }
    


})();