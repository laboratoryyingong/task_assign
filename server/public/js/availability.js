new Vue({
    el: '#app',
    data: {
        days : [
            {date: "20/05/2020"},
            {date: "21/05/2020"},
            {date: "22/05/2020"},
        ],
        times : [
            {name: "9:00-10:00", day1: true, day2: false, day3:true},
            {name: "10:00-11:00", day1: true, day2: false, day3:true},
            {name: "11:00-12:00", day1: true, day2: false, day3:true},
            {name: "12:00-13:00", day1: true, day2: false, day3:true},
            {name: "13:00-14:00", day1: false, day2: false, day3:true},
            {name: "14:00-15:00", day1: true, day2: false, day3:true},
            {name: "15:00-16:00", day1: true, day2: false, day3:true},
            {name: "16:00-17:00", day1: true, day2: true, day3:true}
        ],
    }
})

