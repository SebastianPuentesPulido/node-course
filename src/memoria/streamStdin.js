let input = process.stdin._read();

process.stdin.setEncoding('utf-8');

process.stdin.on('data',(chunk) =>{
    process.stdout.write(chunk.toString().toUpperCase());
});