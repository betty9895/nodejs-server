const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Conent-type', 'text/plan');
    res.end('sever was build sucessfully');
});

server.listen(port, hostname, () => {
    console.log('Server strated on port ' + port);
});

