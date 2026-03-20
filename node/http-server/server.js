const http = require('http');
http.createServer(function (req,res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end(`<p><a href="http://goldtop.hopto.org">Museum of Cultural Memory</a></p>`);
}).listen(3001, "127.0.0.1");
console.log('Server running on 3001');
