async function asincronismo(callback) {
    setTimeout(() => {
        console.log("Hello");
        callback();
    }, 1000);
}
async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('hola '+nombre);
            resolve(nombre);
        }, 1000);
    });
}
async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adios " + nombre);
            resolve();
        }, 1000);
    })
}

async function hablar(phrase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(phrase);
            resolve(phrase);
            // reject("Hay un Error")
        }, 1000);
    });
}
console.log("iniciando proceso");
async function main() {
    let greeting = await hola("sebas");
    await hablar("Bla Bla Bla Bla");
    await hablar("Bla Bla Bla Bla");
    await hablar("Bla Bla Bla Bla");
    await hablar("Bla Bla Bla Bla");
}
console.log("Before");
main();
console.log("After");