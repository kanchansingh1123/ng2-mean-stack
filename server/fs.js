var fs = require('fs');

// fs.open(__dirname+'/input.txt', 'r+', function(err, fd) {
//     if(err) {
//         console.log(err);
//     }
//     console.log('File Open Successfully');
// });

// fs.stat(__dirname+'/input.txt', function(err, stats) {
//     console.log(stats);
//     console.log(stats.isFile());
//     console.log(stats.isDirectory());
//     console.log(stats.isBlockDevice());
//     console.log(stats.isCharacterDevice());
//     console.log(stats.isSymbolicLink());
//     console.log(stats.isFIFO());
//     console.log(stats.isSocket());
// });


// fs.writeFile(__dirname+'/test.txt', 'Hello Every One',function(err) {
//     if(err) {
//         console.log(err);
//     }

//     fs.readFile(__dirname+'/test.txt', 'utf-8', function(err, data) {
//         console.log(data);
//     })
// });

/*var buf = new Buffer(1024);
fs.open(__dirname + '/test.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }

    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            return console.error(err);
        }
        console.log(bytes + " bytes read");

         // Print only read bytes to avoid junk.
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
    });

    fs.close(fd, function() {
        if (err){
            return~ console.log(err);
         } 
         console.log("File closed successfully.");
    })
});*/

// fs.mkdir(__dirname+'/newfolder', function(err) {
//     if (err) {
//         return console.error(err);
//      }
//      console.log("Directory created successfully!");
// });

// fs.readdir(__dirname+'/newfolder', function(err, files) {
//     if (err) {
//         return console.error(err);
//      }
//      files.forEach( function (file){
//         console.log( file );
//      });
// });

// fs.rmdir(__dirname+'/newfolder',function(err){
//     if (err) {
//         return console.error(err); // dir should be empty, or delete all file first under dir
//     }
// })

console.log(__filename);
