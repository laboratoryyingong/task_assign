const env = require('dotenv').config()
const path = require('path');

// router map
const router = require('express').Router();
const users = require('./api/users');
const groups = require('./api/groups');
const tasks = require('./api/tasks');

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

// api 
router.use('/api/v1/users', users);
router.use('/api/v1/groups', groups);
router.use('/api/v1/tasks', tasks);

// page router
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/index.html'));
});

router.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/login.html'));
});

router.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/register.html'));
});

router.get('/dashboard', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/dashboard.html'));
});

router.get('/availability', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/availability.html'));
});

router.get('/preference', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/preference.html'));
});

router.get('/profile', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/profile.html'));
});

router.get('/manager-dashboard', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/manager-dashboard.html'));
});



router.get('/callback', (req, res) => {
    if (req.error) {
        // error redirect to error page
    } else {
        // success redirect to home page
    }
});

module.exports = router;