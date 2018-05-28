var TodoUI = require('./ui/ToDoUI');

var todo_ui = new TodoUI({
    form: '.todo-form',
    list: '.todo-list',
});
todo_ui.init();

// var tag_ui = new TagUI({
//     form: 'tag',
// });