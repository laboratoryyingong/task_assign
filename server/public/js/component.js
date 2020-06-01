// Register custom component
Vue.component('header-component', {
    data: function () {
        return {
            home: function (event) {
                window.location.href = "/";
            },
            login: function (event) {
                window.location.href = "/login";
            },
            register: function (event) {
                window.location.href = "/register";
            }
        }
    },
    template: `<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 class="my-0 mr-md-auto font-weight-normal" v-on:click="home">Task system</h5>
                    <nav class="my-2 my-md-0 mr-md-3">
                        <a class="p-2 text-dark" v-on:click="login">Login</a>
                    </nav>
                    <a class="btn btn-outline-primary" v-on:click="register">Register</a>
                </div>`
})

Vue.component('banner-component', {
    data: function () {
        return {
            email: ''
        }
    },
    template: `
    <section>
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white">
            <h5 class="my-0 mr-md-auto font-weight-normal">Logo</h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <a class="btn btn-outline-primary p-2 text-dark" >How to use</a>
                <a class="btn btn-outline-primary p-2 text-dark" >About us</a>
            </nav>
        </div>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 font-weight-normal">Slogan</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Email" v-model="email">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Quick Login</button>
                </div>
            </div>
            </div>
        </div>
    </section>
    `
})

Vue.component('feature-component', {
    props: ['feature'],
    template: `
    <div class="col-lg-4">
        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
        <h2>{{ feature.heading }}</h2>
        <p>{{ feature.detail }}</p>
    </div>
    `
})

Vue.component('login-component', {
    data: function () {
        return {
            email: '',
            password: ''
        }
    },
    template: `
    <div class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Login</h1>
        <label for="inputEmail" class="sr-only">User Name/Email</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" v-model="email">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" v-model="password">
        <button class="btn btn-lg btn-primary btn-block">Start Roster</button>
        <p>Login via:</p>
        <button class="btn btn-lg btn-primary btn-block">Google Account</button>
    </div>
    `
})

Vue.component('register-component', {
    data: function () {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            rePassword: '',
            isManager: false
        }
    },
    template: `
    <div class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Register</h1>
        <input type="text" class="form-control" placeholder="First Name" required="" autofocus="" v-model="firstName">
        <input type="text" class="form-control" placeholder="Last Name" required="" autofocus="" v-model="lastName">
        <input type="email" class="form-control" placeholder="Email" required="" autofocus="" v-model="email">
        <input type="password" class="form-control" placeholder="Input Password" required="" v-model="password">
        <input type="password" class="form-control" placeholder="Comfirm Password" required="" v-model="rePassword">
        <div class="checkbox mb-3">
            <label>
            <input type="checkbox" v-model="isManager" > Is Manager?
            </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block">Register</button>
        <p>Login via:</p>
        <button class="btn btn-lg btn-primary btn-block">Google Account</button>
    </div>
    `
})

Vue.component('dashboard-header-component', {
    data: function () {
        return {
            schedule: function (event) {
                window.location.href = "/dashboard";
            },
            availability: function (event) {
                window.location.href = "/availability";
            },
            preference: function (event) {
                window.location.href = "/preference";
            },
            profile: function (event) {
                window.location.href = "/profile";
            }
        }
    },
    template: `<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 class="my-0 mr-md-auto font-weight-normal">Logo</h5>
                    <nav class="my-2 my-md-0 mr-md-3">
                        <a class="btn btn-outline-secondary p-2 text-dark" v-on:click="schedule">Schedule</a>
                        <a class="btn btn-outline-secondary p-2 text-dark" v-on:click="availability">Availability</a>
                        <a class="btn btn-outline-secondary p-2 text-dark" v-on:click="preference">Preference</a>
                        <a class="btn btn-outline-secondary p-2 text-dark" v-on:click="profile">Profile</a>
                    </nav>
                </div>`
})

Vue.component('schedule-talbe', {
    props: ['names', 'period1', 'period2', 'period3', 'period4', 'period5', 'period6', 'period7', 'period8'],
    template: `
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col" v-for=" name in names">
                    {{name}}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">9:00-10:00</th>
                <td v-for="task in period1">
                    {{task.name}}
                </td>
            </tr>
            <tr>
                <th scope="row">10:00-11:00</th>
                <td v-for="task in period2">
                    {{task.name}}
                </td>
            </tr>
            <tr>
                <th scope="row">11:00-12:00</th>
                <td v-for="task in period3">
                    {{task.name}}
                </td>
            </tr>
            <tr>
                <th scope="row">12:00-13:00</th>
                <td v-for="task in period4">
                    {{task.name}}
                </td>
            </tr>
            <tr>
                <th scope="row">13:00-14:00</th>
                <td v-for="task in period5">
                    {{task.name}}
                </td>
            </tr>
            <tr>
                <th scope="row">14:00-15:00</th>
                <td v-for="task in period6">
                    {{task.name}}
                </td>
            </tr>
            <tr>
                <th scope="row">15:00-16:00</th>
                <td v-for="task in period7">
                    {{task.name}}
                </td>
            </tr>
            <tr>
                <th scope="row">16:00-17:00</th>
                <td v-for="task in period8">
                    {{task.name}}
                </td>
            </tr>
        </tbody>
    </table>`
})

Vue.component('my-schedule-talbe', {
    props: ['today'],
    template: `
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">9:00-10:00</th>
                <th scope="col">10:00-11:00</th>
                <th scope="col">11:00-12:00</th>
                <th scope="col">12:00-13:00</th>
                <th scope="col">13:00-14:00</th>
                <th scope="col">14:00-15:00</th>
                <th scope="col">15:00-16:00</th>
                <th scope="col">16:00-17:00</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">today</th>
                <td v-for="task in today">
                    {{task.status}}
                </td>
            </tr>
        </tbody>
    </table>`
})

Vue.component('my-task', {
    props: ['tasks'],
    template: `
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Due date</th>
                <th scope="col">Accomplishment</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="task in tasks">
                <th scope="row">
                    {{task.name}}
                </th>
                <td>
                    {{task.dueDate}}
                </td>
                <td>
                    {{task.isFinished}}
                </td>
            </tr>
        </tbody>
    </table>`
})

Vue.component('my-availability', {
    props: ['days', 'times'],
    template: `
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col" v-for="day in days">
                    {{day.date}}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="time in times">
                <th scope="row">
                    {{time.name}}
                </th>
                <td>
                    {{time.day1}}
                </td>
                <td>
                    {{time.day2}}
                </td>
                <td>
                    {{time.day3}}
                </td>
            </tr>
        </tbody>
    </table>`
})

Vue.component('my-preference', {
    methods: {
        add: function (event) {
            var data = {
                note: this.note,
                selected: this.selected
            }
            this.$emit('add-task', data)
        }
    },
    data: function () {
        return {
            note: '',
            selected: ''
        }
    },
    props: ['tasks','prefers'],
    template: `
    <div>
        <h3>Task Want to do</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="prefer in prefers"> 
                {{prefer.note}}
            </li>
        </ul>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <select v-model="selected">
                    <option v-for="task in tasks" :value="task.key">{{task.name}}</option>
                </select>
            </div>
            <input type="text" class="form-control" placeholder="Note" v-model="note">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" v-on:click="add">add</button>
            </div>
        </div> 
    </div>
    `
})

Vue.component('my-profile', {
    data: function () {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    },
    template: `
    <div class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Edit Profile</h1>
        <input type="text" class="form-control" placeholder="First Name" required="" autofocus="" v-model="firstName">
        <input type="text" class="form-control" placeholder="Last Name" required="" autofocus="" v-model="lastName">
        <input type="email" class="form-control" placeholder="Email" required="" autofocus="" v-model="email">
        <input type="password" class="form-control" placeholder="Change Password" required="" v-model="password">
        <button class="btn btn-lg btn-primary btn-block">Update</button>
    </div>
    `
})

Vue.component('manager-dashboard-header-component', {
    data: function () {
        return {
            task: function (event) {
                window.location.href = "/manager-dashboard";
            },
            groupTask: function (event) {
                window.location.href = "/manager-group-task";
            },
            AssignTask: function (event) {
                window.location.href = "/manager-assign-task";
            },
            ManagerProfile: function (event) {
                window.location.href = "/manager-profile";
            }
        }
    },
    template: `<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 class="my-0 mr-md-auto font-weight-normal">Logo</h5>
                    <nav class="my-2 my-md-0 mr-md-3">
                        <a class="btn btn-outline-secondary p-2 text-dark" v-on:click="task">Task</a>
                        <a class="btn btn-outline-secondary p-2 text-dark" v-on:click="groupTask">Group Task</a>
                        <a class="btn btn-outline-secondary p-2 text-dark" v-on:click="AssignTask">Assign Task</a>
                        <a class="btn btn-outline-secondary p-2 text-dark" v-on:click="ManagerProfile">Manager Profile</a>
                    </nav>
                </div>`
})


