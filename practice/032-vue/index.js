window.root = new Vue({
    el: '#root',
    data: {
        current: null,
        memo_list: [
            {
                id: 1,
                title: 'A',
                content: 'this is A'
            },
            {
                id: 2,
                title: 'B',
                content: 'this is B'
            },
            {
                id: 3,
                title: 'C',
                content: 'this is C'
            },
        ],
    },
    watch: {
        memo_list: {
            deep: true,
            handler: function (n, o) {
                console.log(n);
            },
        }
    },
    methods: {
        add() {
            if (this.current == null)
                this.current = {};
            if (!this.current.title)
                return;

            this.memo_list.push(this.current);
            this.current = {};
        },
    },
});