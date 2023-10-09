const {argv} = require('node:process');

argv.forEach((val,index) => {
  console.log(`${val} from ${index}`);
});

process.on("beforeExit", () => {
  console.log("el proceso se va a terminar");
});

process.on("exit", () => {
  console.log("proceso acabado");
  setTimeout(() => {
    console.log("Estamos desconectados del event loop");
  }, 0);
});


process.on("uncaughtException", (err, origin) => {
  console.error("se nos ha olvidado capurar un error");
  console.error(err);
});

// functionQueNoExiste();
console.log("Si el error no se recoge, no aparece esto");
