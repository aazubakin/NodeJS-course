
const CORS = { 'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
'Access-Control-Allow-Headers': 'x-test, Content-Type, Accept,Access-Control-Allow-Headers'}

const s = require('http').Server((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json', ...CORS,'x-test':'abc'});
    let bodyData='';

    if (req.url === '/result4/') {

        req.on('data', chunk => {
           bodyData += chunk;  
        });
        req.on('end',()=>{
          
          res.end(JSON.stringify({'message': 'azubakin','x-result': req.headers['x-test'], 'x-body':bodyData}));
        });
        
     
    } else {
        res.write('OK\n');
        res.end(); 
    }
});
s.listen();