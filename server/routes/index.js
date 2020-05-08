const env = require('dotenv').config()

// router map
const router = require('express').Router();
const users = require('./users');
const groups = require('./groups');

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

router.use('/users', users);
router.use('/groups', groups);


router.get('/', (req, res) => {
    res.json({"message": "/"})
});

router.get('/profile', (req, res) => {
    res.send(JSON.stringify(req.openid.user));
});

router.get('/callback', (req, res) => {
    if (req.error) {
        // error redirect to error page
    } else {
        // success redirect to home page
    }
});

module.exports = router;