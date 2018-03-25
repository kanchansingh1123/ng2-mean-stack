exports.register = function(app, router) {
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
}