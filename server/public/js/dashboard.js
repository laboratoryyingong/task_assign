new Vue({
    el: '#app',
    data: {
        "names": ["staff 1","staff 2","staff 3"],
        "period1": [
          {name: "task 1"},
          {name: "task 2"},
          {name: "task 3"}
        ],
        "period2": [
          {name: "task 1"},
          {name: ""},
          {name: "task 3"}
        ],
        "period3": [
          {name: "task 1"},
          {name: "task 2"},
          {name: ""}
        ],
        "period4": [
          {name: ""},
          {name: "task 2"},
          {name: "task 3"}
        ],
        "period5": [
          {name: "task 1"},
          {name: "task 2"},
          {name: "task 3"}
        ],
        "period6": [
          {name: "task 1"},
          {name: "task 2"},
          {name: "task 3"}
        ],
        "period7": [
          {name: "task 1"},
          {name: "task 2"},
          {name: "task 3"}
        ],
        "period8": [
          {name: "task 1"},
          {name: "task 2"},
          {name: "task 3"}
        ],
        "today": [
          {status: "occupied"},
          {status: ""},
          {status: "occupied"},
          {status: "occupied"},
          {status: ""},
          {status: "occupied"},
          {status: "occupied"},
          {status: ""}
        ],
        "tasks": [
          {name: "task 1", dueDate: "12/02/2020", isFinished: true},
          {name: "task 2", dueDate: "15/02/2020", isFinished: false}
        ]
    }
})