const fs = require('fs');

const writer = fs.createWriteStream('example.txt');


const reader = fs.createReadStream('example.txt');


writer.on('pipe', (src) => {
    console.error('something is piping into the writer');
    writer.write('hello, ');
    //writer.end('world!');
});

reader.pipe(writer);