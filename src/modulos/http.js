const http =  require('http');

function router (req,res) {
    console.log("nueva peticion");
    console.log(req.url);
    res.writeHead(201,{'Content-Type':'text/plain'});

    switch (req.url) {
        case '/hola':
            let respuesta = hola();
            res.write(respuesta);
            res.end();
            break
        default:
            res.write("Ruta no identificada");
            res.end();
    }

    // res.write("Hello World");
    // res.end();
}

function hola() {
    return "Hola Que Tal";
}

http.createServer(router)
.listen(3000);