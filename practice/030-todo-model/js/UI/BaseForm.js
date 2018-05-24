window.BaseForm = BaseForm;

function BaseForm(el_form) {
    //如果传的是选择器
    if (typeof el_form === 'string')
        el_form = document.querySelector(el_form);
    this.form = el_form;
}

BaseForm.prototype.$set_form_data = set_form_data;
BaseForm.prototype.$get_form_data = get_form_data;
BaseForm.prototype.$clear_form_data = clear_form_data;

function set_form_data(data) {
    for (var key in data) {
        var input = this.form.querySelector('[name=' + key + ']');
        if (!input)
            return;
        var value = data[key];
        switch (typeof value) {
            case 'number':
            case 'string':
                input.value = value;
                break;
            case 'boolean':
                input.checked = value;
                break;
        }
    }
};

function get_form_data () {
    var data = {};
    var input = this.form.querySelectorAll('[name]');
    input.forEach(function (item) {
        switch (item.nodeName) {
            case 'INPUT':
                switch (item.type) {
                    case 'text':
                    case 'number':
                    case 'hidden':
                        data[item.name] = item.value;
                        break;
                    case 'checkbox':
                    case 'radio':
                        data[item.name] = item.checked;
                        break;
                }
                break;
            case 'SELECT':
                data[item.name] = item.value;
                break;
            case 'TEXTAREA':
                data[item.name] = item.value;
                break;
        }
    });
    return data;
};

function clear_form_data () {
    //这里不用form.reset是因为reset是恢复到表单原始状态 如果表单有默认值 就不会清空
    var input = this.form.querySelectorAll('[name]');
    input.forEach(function (item) {
        switch (item.nodeName) {
            case 'INPUT':
                switch (item.type) {
                    case 'text':
                    case 'number':
                    case 'hidden':
                        item.value = '';
                        break;
                    case 'checkbox':
                    case 'radio':
                        item.checked = false;
                        break;
                }
                break;
            case 'TEXTAREA':
                item.value = '';
                break;
        }
    });
}