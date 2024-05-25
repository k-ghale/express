const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>HELLO WORLD</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>ABOUT PAGE</h1>");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>NOT FOUND</h1>`);
  }
});

server.listen(5000);
