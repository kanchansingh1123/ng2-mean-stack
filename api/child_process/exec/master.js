/**
 * child_process.exec -  child_process.exec method runs a command in a shell/console and buffers the output.
 */

const fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    var workerprocess = child_process.exec('node support.js ' + i, function (err, stdout, stderr) {
        if (err) {
            console.log(err.stack);
            console.log('Error code: ' + err.code);
            console.log('Signal received: ' + err.signal);
        }

        console.log('stdout: ' + stdout); // output buffer

        console.log('stderr: ' + stderr);
    });

    workerprocess.on('exit', function (code) {
        console.log('Child process exited with exit code ' + code);
    });
}
