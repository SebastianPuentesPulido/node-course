const fs = require('fs');
const stream = require('stream');
const util = require('util');
let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('utf-8');

// readableStream.on('data',(chunk)=> {
//     // console.log(chunk.toString());
//     data+=chunk;
// });

// readableStream.on('end',()=> {
//     console.log(data);
// });

// process.stdout.write('Hello');

// process.stdout.write('World');

// process.stdout.write('Stream');

const Transform = stream.Transform;

function toUpper() {
    return new Transform({
        transform(chunk, encode,cb) {
            let convertedData = chunk.toString().toLowerCase();
            cb(null,convertedData)
        }
    });
}

readableStream
    .pipe(toUpper())
    .pipe(process.stdout);

readableStream.on('end',()=>{
    console.log("\n End Stream");
});