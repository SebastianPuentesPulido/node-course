const { exec,spawn } = require('child_process');

exec('neofetch',(err,stdout,stderr) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
});

// let process = spawn('node',['-v']);
// console.log(process.connected);
// console.log(process.pid);

// process.on('spawn',() => {
//     console.log("El proceso ha spawneado");
// })

// process.stdout.on('data',(data) => {
//     console.log(data.toString());
// });

// process.on('exit',()=> {
//     console.log("El proceso se terminado");
//     console.log('Esta Muerto?: '+process.killed);
// });