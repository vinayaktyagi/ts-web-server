import http from 'http';
import path from 'path';
import fs from 'fs/promises';

async function requestListener(req: http.IncomingMessage,res: http.ServerResponse){
    const filePath = path.join(__dirname, 'static/index.html');
    const data =await fs.readFile(filePath);
    res.writeHead(200,{
        "Content-Type": "text/html",

    });

    res.write(data);
    res.end();
    
}

http.createServer(requestListener).listen(9000,()=>{
    console.log('server is running at port 9000');
});