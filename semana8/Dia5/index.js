const http = require("http");

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.writeHead(200);
        response.write("hola mundo");
        response.end();
    }else if (request.url === "/productos"){
        response.writeHead(200);
        response.write(" productos");
        response.end();
    }

    if (request.url === "/casa") {
        response.writeHead(200);
        response.write("Hola casa");
        response.end();
    }
});

server.listen(9000, () => console.log("el servidor se inició 9000"));