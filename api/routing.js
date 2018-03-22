var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    router = express.Router()

var db = require('./db');
var error = require('./error');

router.get('/', function(req, res) {
    res.end("Hello World");
});

router.get('/:name', function(req, res) {
    var name = req.params.name;
    var fname = req.query.fname;
    var lname = req.query.lname;
    res.end("Hello   " + fname + "  " + lname);
});

router.post('/data', function(req, res, next) {
    var postedData = req.body;
    if(typeof postedData == 'undefined') {
        next("No Data Posted");
    } else {
        res.end("You have posted " + JSON.stringify(postedData))
    }
});

app.use(error.errorHandler);

app.use(function(req, res) {
    res.sendStatus("404");
});

app.use(app._router);
app.use(bodyParser);

exports.router = router;