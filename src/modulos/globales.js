let i = 0;
let interval = setInterval(()=>{
    console.log("Hola");
    i++;
    if(i===3) {
        clearInterval(interval);
    }
},1000);

setImmediate(()=> {
    console.log("Inmediato");  
});

console.log(__dirname);
console.log(__filename);