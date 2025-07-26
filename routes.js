 // In this section we learn about the routes 
// Mtlb diffrent differetnt url k request pe different diffferent cheezo ko show krana ->server side coding
const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'Text/html');
    res.write('<html>');
    res.write('<head><title> Nitin routes</title></head>');

    if(req.url === '/'){ //here we use routing like jab request / pe ho to response dena hai This is home page
        res.write('<h1>This is home page</h1>');
        res.end();
    }else if(req.url === '/nitin'){
        res.write('<h1>this is nitin page </h1>');
        res.end();
    }else {
        res.write('<h1>404 ERROR <br>Page is not found</br></h1>')
        res.end();
    }
      
});
// const PORT=3001;
//     server.listen(PORT,()=>{
//         console.log(`server running at port number ${PORT}`);
//     });