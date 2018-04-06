/**
 * child_process.fork method is a special case of spawn() to create Node processes. 
 * It has the following signature
 * 
 * The fork method returns an object with a built-in 
 * communication channel in addition to having all the methods in a normal ChildProcess instance.
 */

const fs = require('fs');
const child_process = require('child_process');
 
for(var i=0; i<3; i++) {
   var worker_process = child_process.fork("support.js", [i]);	

   console.log(worker_process)

   worker_process.on('close', function (code) {
      console.log('child process exited with code ' + code);
   });
}