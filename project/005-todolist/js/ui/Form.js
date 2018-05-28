function Form(form) {
    this.form = form;
}

Form.prototype.$$getFormData = function () {
    var data = {};
    var inputs = this.form.querySelectorAll('[name]');
    inputs.forEach(function (item) {
        switch (item.nodeName) {
            case 'INPUT':
                switch (item.type) {
                    case 'hidden':
                    case 'text':
                        data[item.name] = item.value;
                        break;
                    case 'checkbox':
                        data[item.name] = item.checked;
                        break;
                }
            case 'SELECT':
                data[item.name] = item.value;
                break;
        }
    });
    return data;
}

Form.prototype.$$setFormData = function (item) {
    for (var key in item) {
        var input = this.form.querySelector(`[name=${key}]`);
        switch (input.nodeName) {
            case 'INPUT':
                switch (input.type) {
                    case 'hidden':
                    case 'text':
                        input.value = item[key];
                        break;
                    case 'checkbox':
                        input.checked = item[key];
                        break;
                }
            case 'SELECT':
                input.value = item[key];
                break;
        }
    }
}

Form.prototype.$$clearFormData = function () {
    var inputs = this.form.querySelectorAll('[name]');
    inputs.forEach(function (item) {
        switch (item.nodeName) {
            case 'INPUT':
                switch (item.type) {
                    case 'hidden':
                    case 'text':
                        item.value = '';
                        break;
                    case 'checkbox':
                        item.checked = false;
                        break;
                }
            case 'SELECT':
                item.value = '';
                break;
        }
    });
}

module.exports = Form;