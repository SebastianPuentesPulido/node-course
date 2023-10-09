const os = require('os');
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.cpus().length);

// console.log(os.constants);
function kb(bytes) {
    return bytes/1024;
}

function mb(bytes) {
    return kb(bytes)/1024;
}

function gb(bytes) {
    return mb(bytes)/1024;
}

function memUsePercentage(total,usage) {
    const gbTotal = gb(total);
    const gbUsage = gb(usage);
    const percentage = (gbUsage/gbTotal)*100;
    return `${gbUsage}/${gbTotal} (${percentage} %)`;
}

// console.log(`${gb(os.freemem())} GB`);
// console.log(`${mb(os.freemem())} MB`);
// console.log(`${kb(os.freemem())} KB`);
// console.log(os.totalmem());
console.log(memUsePercentage(os.totalmem,(os.totalmem-os.freemem)));
// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.hostname());
// console.log(os.networkInterfaces());