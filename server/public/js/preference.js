new Vue({
    el: '#app',
    data: {
        tasks: [
            {key: 1, name: "Task 1"},
            {key: 2, name: "Task 2"},
            {key: 3, name: "Task 3"},
            {key: 4, name: "Task 4"},
            {key: 5, name: "Task 5"},
            {key: 6, name: "Task 6"},
            {key: 7, name: "Task 7"}
        ],
        prefers: []
    },
    methods: {
        addTaskHandler: function (data) {
            console.log(data)
            this.prefers.push(data);
        }
      }
})
