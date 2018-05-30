var TodoUI = require('./ui/ToDoUI');
var TagUI = require('./ui/TagUI');

var todo_ui = new TodoUI({
    form: '.todo-form',
    list: '.todo-list',
});
todo_ui.init();

var tag_ui = new TagUI({
    onClickList: function (id) {
        todo_ui.render(id);
    },
});
tag_ui.init();