//Creating My first Node js server

 // ye hame batata hai ke ham apne project me fs module ko use krenge
const fs = require('fs');
const http = require('http')

// ye hamara server ban gya hai ye ab hame requset aur response ko batayega k hame kya request aa rhi 
const server = http.createServer((req,res)=>{
    //this is how we send the response in node js
    console.log(req.url , req.method);
    res.setHeader('Content-Type', 'Text/html');
    res.write('<html>');
    res.write('<title> Nitin </title>')
    res.write('<body>');
    res.write('<h1> Hii this is nitin mishra response </h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
})

// const PORT = 3001;
// server.listen(PORT,()=>{
//     console.log(`Server is strten on PORT NO. ${PORT}`);
// })