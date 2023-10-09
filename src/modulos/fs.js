const fs = require('fs');
function read(path, callback) {
    fs.readFile(path, (err, data) => {
        callback(data.toString());
    })
}

function write(path, content, callback = undefined) {
    fs.writeFile(path, content, (err) => {
        err ? console.error("i cannot write the file %d", err) : console.log("file writed");
        callback === undefined ? undefined : callback(content);

    });
}

function deleteFile(path,callback) {
    fs.unlink(path,callback)
}
// read((__dirname+'/test.txt'),console.log);
// write(`${__dirname}/test.vim`,"Hi Mom!!",console.log);
deleteFile(__dirname+'/test.vim',console.log);