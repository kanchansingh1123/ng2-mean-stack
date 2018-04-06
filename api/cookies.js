var express = require('express');

var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.use(function (req, res, next) {
    var cookies = req.cookies;
    console.log(cookies);
    var randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(2, randomNumber.length);
    res.cookie('random1', randomNumber, { maxAge: 900000 });
    console.log('cookie created successfully');
    next();
});

app.get('/getcooke', function (req, res) {
    console.log(req.cookies);
    res.cookie('test', 'cookieValue')
    res.send(req.cookies);
});

app.get('/', function (req, res) {
    res.send(req.cookies);
    // set the cookes and send it
});

// app.get('/', function (req, res) {
//     res.sendFile(__dirname+'/fileupload/index.html');
// });

var server = app.listen(8080, function () {
    var port = server.address().port;
    console.log('server is running at port %s ', port);
});