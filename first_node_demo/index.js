//require('http').Server().listen(9080);
import {Server} from 'http';
const s = Server((req, res) => {
    //resres.writeHead(200, {'Content-Length': 3});
    if (req.url === '/ru') {
        res.write('Веб');
    } else {
        res.write('OK\n');
    }
    res.end();
});
s.listen(4321);
