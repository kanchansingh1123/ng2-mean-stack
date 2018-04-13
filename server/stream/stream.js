const fs = require('fs');

var readableStream = fs.createReadStream(__dirname + '/data1.txt', {encoding: 'utf8'});

var writableStream = fs.createWriteStream(__dirname + '/data2.txt');

// readableStream.on('data', function(datachunk) {
//     console.log('data chunk recived');
//     //writableStream.write(datachunk);
// });

readableStream.pipe(writableStream);