function asincronismo(callback) {
    setTimeout(() => {
       console.log("Hello");
       callback();
    }, 1000);
}
function hola (nombre,callback) {
setTimeout(() => {
   console.log(nombre);
   callback(); 
}, 1000);
}
function adios(nombre,callback) {
setTimeout(() => {
   console.log("Adios "+nombre);
   callback(); 
}, 1000);
}
console.log("iniciando proceso");
//asincronismo((()=> console.log("esto ha terminado")))
hola('sebas',(() => {
    adios('sebas',(()=>console.log("terminando proceso")));
}));
console.log("terminando proceso");
