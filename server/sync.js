const fs = require('fs');

console.log('before');
console.log(__dirname);

const data = fs.readFileSync(__dirname+'/index.html', 'utf8');

//console.log(data); //some data will be available

var result = data.replace(/__cacheid__/g, new Date().getTime());

//console.log(result);

fs.writeFileSync(__dirname+'/index.html', result, 'utf8');

