import http from 'http'

const userdata = {
    name: 'Deepanshu Rajput',
    age: 20
};

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
        res.on('data',(Chunk)=>{
            body += Chunk;
        })
        res.on("end",()=> {
            const newdata = json.parse(body);
        })
        
    }
    else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});