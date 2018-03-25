var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    router = express.Router();

var error = require('./error');
var db = require('./db/connection');
var routeManager = require('./routes/routing');

var server = '';



app.use(router);
app.use(bodyParser);
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

routeManager.register(app, router);


