let table = [{
    a:1,
    b:2,
    c:1
},{
    a:2,
    b:43
}]
console.group("table");
console.table(table);
console.groupEnd("table");

console.group("Logs");
console.error("This is an error");
console.warn("This is a warning");
console.info("The same that console.log, but more important,info method");
console.groupEnd("Logs")

console.group("counter");
console.count("time:");
console.count("time:");
console.count("time:");
console.count("time:");
console.count("time:");
console.group("resetCounter");
console.countReset("time:");
console.count("time:");
console.count("time:");
console.count("time:");
console.groupEnd("resetCounter");
console.groupEnd("counter");

console.group("Conversacion");
console.log("Hola");
console.log("Bla Bla Bla");
console.log("Adios");
console.groupEnd("Conversacion");