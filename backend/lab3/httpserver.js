import http from 'http'
import { json } from 'stream/consumers';

const userdata =[ {
    name: 'Deepanshu Rajput',
    age: 20
}];

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/' && method === 'GET') {
        res.statusCode = 200;
        res.end('Welcome to the Home Page');

    }
    else if (url === '/sys' && method === 'GET') {
        res.statusCode = 201;
        res.end('Welcome to the System Page');
    }
    else if (url === '/data' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify(userdata));
    }
    else if(url === '/create' && method === 'POST'){
        const body= " ";
        req.on('data',(Chunk)=>{
            body += Chunk;
        });
        req.on("end",()=> {
            const newdata = json.parse(body);
        
            const newUserData={
                name: newdata.name,
                age: newdata.age
            };
            userdata.push(newUserData);
            res.end('data update succesfull')
        });
    }
    else if(url.startsWith('/users/')&& method === 'GET'){
        const index = parseInt(url.split('/')[2]);
        if(index >= 0 && index < userdata.length){
            res.end(JSON.stringify(userdata[index]));
        }
        else {
            res.statusCode = 404;
            res.end('user not found');
        }
    }
    else if(url.startsWith('/users/')&& method==='DELETE'){
        const id = parseInt(url.split('/')[2]);
        const index = userdata.findIndex((u)=> u.id==id);
        if(index ==-1){
            res.statusCode = 404;
            res.end('user not found');
        }
        userdata.splice(index,1);
        res.end("data deleted successfully");
    }
    else {
            res.statusCode = 404;
            res.end('Page not found');
    }    
});


server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});