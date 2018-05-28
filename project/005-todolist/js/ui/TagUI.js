var Form = require('./Form');

function TagUI(config) {
    var defaultConfig = {
        form: null,
        list: null,
    };
    if (typeof config.form === 'string')
        config.form = document.querySelector(config.form);
    if (typeof config.list === 'string')
        config.list = document.querySelector(config.list);

    config = Object.assign({}, defaultConfig, config);
    Form.call(this, form);
    this.form = config.form;
    this.list = config.list;
}