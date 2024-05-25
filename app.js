const http = require("http");
const {readFileSync} = require('fs')

//get all files
const homePage = readFileSync('./practice app/index.html')
const homeStyle = readFileSync('./practice app/style.css')

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (req.url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end()
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>NOT FOUND</h1>`);
  }
});

server.listen(5000);
