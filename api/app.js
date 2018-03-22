var express = require("express"),
    app = express(),
    router = express.Router();

var db = require('./db');
//require('./routing');

var server = '';

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

app.get('/', function(req, res) {
    res.end("Hello World");
});

//app.use(app._router);


