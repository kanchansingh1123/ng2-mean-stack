/**
 * http://www.tutorialsteacher.com/nodejs/node-inspector
 */

var fs = require('fs');

fs.readFile('Mongo.txt', 'utf8', function (err, data) {
    
    debugger;

    if (err) throw err;
    
    console.log(data);
});