var express = require('express');
var app = express();
var multer  = require('multer');
var fs = require('fs');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(multer({dest: __dirname+'/public'}).array('file'));

app.use(express.static('public'));

app.get('/', function (req, res) {
   //res.send('Hello World');
   res.sendFile(__dirname+'/fileupload/index.html');
})

app.post('/file_upload', function (req, res) {
    console.log(req.files[0]);
    // console.log(req.files.file.name);
    // console.log(req.files.file.path);
    // console.log(req.files.file.type);
    //var file = __dirname+'/'+req.files

    var destination = __dirname+'/public/images/'+req.files[0].originalname;

    fs.readFile(req.files[0].path, function(err, data) {
        fs.writeFile(destination, data , function(err, data) {
            res.send("Upload");
        })
    })
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port);
});