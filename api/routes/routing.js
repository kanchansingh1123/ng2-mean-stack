var express = require("express");
var router = express.Router();
var dbOperation = require("../db/operations");


router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/getuser', function(req, res) {
    dbOperation.getUsers(req, res);
})

router.get('/update', function (req, res) {
    res.send('About birds')
})

router.get('/deleteuser/:id', function (req, res) {
    dbOperation.deleteUser(req, res);
})

router.post('/add', function (req, res) {
    dbOperation.addUser(req, res);
})

router.post('/updateuser', function (req, res) {
    dbOperation.updateUser(req, res);
})

module.exports = router;