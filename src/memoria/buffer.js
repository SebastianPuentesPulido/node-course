let buffer = Buffer.alloc(11,'hello world','utf-8');
let buffer1 = Buffer.from([1,2,3]);
let buffer2 = Buffer.from('hola');

console.log(buffer);
console.log(buffer1);
console.log(buffer2);

// --

let abc = Buffer.alloc(26);

console.log(abc);

for (let i = 0; i <= abc.length;i++) {
    abc[i] = i+97;
}
console.log(abc.toString());