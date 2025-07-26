const http = require('http');

const server =  http.createServer((req,res)=>{
    if(req.url === '/'){
        res.setHeader('Content-Type', 'Text/html');
        res.write(`
            <html>
            <body>
            <head>
             <nav>
             <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/men">Men</a></li>
    <li><a href="/women">Women</a></li>
    <li><a href="/kids">Kids</a></li>
    <li><a href="/cart">Cart</a></li>
    </ul>
  </nav>
  </head>
            </body>
            </html>
            `);  
            
    }
    if(req.url=== '/men'){
        res.setHeader('Content-Type', 'Text/html');
        res.write(`<h1>This is Men's Section</h1>`);
        return res.end();
    }
    else if(req.url=== '/women'){
        res.setHeader('Content-Type', 'Text/html');
        res.write(`<h1>This is Women's Section</h1>`);
        return res.end();
    }else if(req.url=== '/kids'){
        res.setHeader('Content-Type', 'Text/html');
        res.write(`<h1>This is Kids's Section</h1>`);
        return res.end();
    }else if(req.url=== '/cart'){
        res.setHeader('Content-Type', 'Text/html');
        res.write(`<h1>This is Cart Section</h1>`);
        return res.end();
    }
});

const PORT =3001;
server.listen(PORT,()=>{
    console.log("Server statrte at PORT no. 3001");
})