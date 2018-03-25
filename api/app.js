var express = require("express"),
    app = express(),
    router = express.Router();
    bodyParser = require('body-parser');

var error = require('./error');
var db = require('./db/connection');
var server = '';
var apiRoutes = require("./routes/routing");


app.use(bodyParser.json());
app.use(error.errorHandler);

db.connect('mongodb://localhost:27017', function(err) {
    if(err) {
        console.log('Unable to connect to Mongo.')
        process.exit(1);
    } else {
        server = app.listen(3000, function() {
            var port = server.address().port;
            console.log("Express is listining on port %s", port);
        });
    }
});

// Add headers
app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json; charset=UTF-8");

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')

     // Request methods you wish to allow
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

     // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

     // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // const { method, url } = req;
    // if(method == 'OPTIONS') {
    //     res.end('ok');
    // }
    // else {
    //     console.log('IN POST METHOD');
    //     next(req, res, next);
    // }
    next();
});

//app.use(router);

app.use('/api', apiRoutes);


