const http = require('http');


http.createServer( (req, res) => {


    res.writeHead(200, {'content-Type': 'aplication/json'});

    let salida = {
        nombre: 'Alejandro',
        edad: 27,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    /* res.end(); */

}).listen(8080);

console.log('Escuchando el puerto 8080');