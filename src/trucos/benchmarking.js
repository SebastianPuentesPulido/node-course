console.time("todo");
let sum = 0;
console.time("bucle");
for (let i = 0;i<10;i++) {
    sum += 1;
}
console.timeEnd("bucle");

let sum2 = 0;
console.time("bucle2");
for (let j = 0;j<10_000_000;j++) {
    sum2 += 1;
}
console.timeEnd("bucle2");
console.timeEnd("todo");

console.time("async");

function async() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            console.log("Process End");
            resolve("xd");
        },1000)
    })
}
async()
    .then(x=>console.log(x))
    .catch(err=> console.log(err));

console.timeEnd("async");