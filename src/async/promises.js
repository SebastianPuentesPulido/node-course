function asincronismo(callback) {
    setTimeout(() => {
        console.log("Hello");
        callback();
    }, 1000);
}
function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(nombre);
            resolve(nombre);
        }, 1000);
    });
}
function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adios " + nombre);
            resolve();
        }, 1000);
    })
}

function hablar(phrase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(phrase + " Bla Bla Bla");
            // resolve(phrase);
            reject("Hay un Error")
        }, 1000);
    });
}
console.log("iniciando proceso");
//asincronismo((()=> console.log("esto ha terminado")))
// hola('sebas',(() => {
//     adios('sebas',(()=>console.log("terminando proceso")));
// }));
// console.log("terminando proceso");
hola("Sebastian")
    .then(hablar)
    .then(adios)
    .catch(err => console.error(err));