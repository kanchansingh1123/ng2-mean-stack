const fs = require('fs');

console.log('before');
console.log(__dirname);
const data = fs.readFile(__dirname+'/index.html', (err, data) => {
    if(err) throw err;
    console.log(data.toJSON("UTF-8"));
    //fs.unlinkSync(__dirname+'/index.html');
});


console.log(data); //some data will be available

console.log('after');