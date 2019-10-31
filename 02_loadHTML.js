const http=require('http');
const fs=require('fs');

const hostname='127.0.0.1';
var port=process.env.PORT||3000;

fs.readFile('index.html',(err,html)=>{

    if(err){
        throw err;
    }
    else{
        const server=http.createServer((req,res)=>{
            res.statusCode=200;
            res.setHeader('Conent-type','text/html');
            res.write(html);
            res.end();
        });
        
        server.listen(port,hostname,()=>{
            console.log('Server strated on port '+port);
        });
    }    

});

